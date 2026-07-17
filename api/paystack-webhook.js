import crypto from "crypto";
import { appendSheetRow } from "./lib/googleSheets.js";

// Disable Vercel's default body parser so we can read the raw bytes
// needed for HMAC signature verification.
export const config = { api: { bodyParser: false } };

// Keyed by metadata.course_slug, which api/create-checkout.js sets when it
// initializes the transaction server-side. The old static
// paystack.com/pay/... links never reliably carried this through the
// webhook (source.identifier is null for these transactions) — course
// purchases now go through create-checkout.js precisely so this metadata
// key is guaranteed to round-trip.
const COURSE_TAG_MAP = {
  "dh-creative-quest-2026": {
    name: "Creative Quest",
    tags: ["discovery-haven", "enrolled-creative-quest"],
  },
  "dh-loud-and-fearless-2026": {
    name: "Loud & Fearless",
    tags: ["discovery-haven"],
  },
  "dh-curiosity-box-2027": {
    name: "The Curiosity Box",
    tags: ["discovery-haven"],
  },
  "dh-eq-lab-2027": {
    name: "The EQ Lab",
    tags: ["discovery-haven"],
  },
};

// Keyed by the event's id (see src/data/content.js EVENTS), which
// EnrollModal.jsx sends as an "Event Id" custom field via the Paystack
// inline checkout's metadata — that metadata reliably round-trips to the
// webhook, unlike source.identifier. Tag names here are a reasonable
// default; rename them to match whatever's actually used in Systeme.io.
const EVENT_TAG_MAP = {
  "creative-quest-aug-2026": {
    name: "Creative Quest — Summer Cohort",
    tags: ["discovery-haven", "dh-enrolled-creative-quest"],
  },
  "loud-&-fearless-Oct-2026": {
    name: "Loud & Fearless — Cohort",
    tags: ["discovery-haven", "enrol-loud-and-fearless"],
  },
  "summit-nov-2026": {
    name: "Discovery Haven Children's Summit",
    tags: ["discovery-haven", "enrol-summit"],
  },
};

function findCustomField(customFields, variableName) {
  return (
    (customFields || []).find((f) => f.variable_name === variableName)?.value ||
    ""
  );
}

// Maps Paystack metadata.custom_fields variable_name -> Systeme.io custom
// field slug. These slugs are a best guess (child_name, child_age, event)
// and must match whatever custom fields actually exist in the Systeme.io
// account (Contacts -> Settings -> Custom Fields), or Systeme.io may
// reject the request. Verify/correct against the real slugs.
const CUSTOM_FIELD_SLUG_MAP = {
  "child name": "child_name",
  "child age": "child_age",
  event: "event",
};

function buildSystemeFields(customFields) {
  const fields = [];
  for (const f of customFields || []) {
    const slug = CUSTOM_FIELD_SLUG_MAP[f.variable_name];
    if (slug && f.value) fields.push({ slug, value: f.value });
  }
  return fields;
}

function splitName(fullName) {
  const parts = fullName.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return { firstName: "", lastName: "" };
  return { firstName: parts[0], lastName: parts.slice(1).join(" ") };
}

async function getRawBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on("data", (chunk) => chunks.push(chunk));
    req.on("end", () => resolve(Buffer.concat(chunks)));
    req.on("error", reject);
  });
}

// Returns { ok, status, body } instead of throwing, so the caller can log
// the Systeme.io response status/body to the sheet regardless of outcome.
async function addContactToSysteme({
  email,
  firstName,
  lastName,
  fields,
  tags,
}) {
  const apiKey = process.env.SYSTEME_API_KEY;
  if (!apiKey) {
    console.error(
      "[systeme] SYSTEME_API_KEY is not set — skipping contact creation",
    );
    return { ok: false, status: null, body: "SYSTEME_API_KEY not set" };
  }

  const body = {
    email,
    ...(firstName ? { firstName } : {}),
    ...(lastName ? { lastName } : {}),
    fields: fields || [],
    tags: tags.map((name) => ({ name })),
  };

  console.log("[systeme] POST /api/contacts request:", JSON.stringify(body));

  const res = await fetch("https://api.systeme.io/api/contacts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": apiKey,
    },
    body: JSON.stringify(body),
  });

  const text = await res.text();
  console.log(`[systeme] response status=${res.status} body=${text}`);

  return { ok: res.ok, status: res.status, body: text };
}

// Logs one row to the "Discovery Haven Contact Forms" sheet for every
// webhook invocation. Never throws — a Sheets outage must not affect the
// webhook's response to Paystack.
async function logToSheet({
  eventType,
  email,
  amount,
  reference,
  systemeStatus,
  error,
}) {
  try {
    await appendSheetRow([
      new Date().toISOString(),
      eventType || "",
      email || "",
      amount != null ? amount : "",
      reference || "",
      systemeStatus != null ? systemeStatus : "",
      error || "",
    ]);
  } catch (err) {
    console.error("[sheets] failed to log row:", err.message);
  }
}

export default async function handler(req, res) {
  console.log(
    `[webhook] hit: method=${req.method} at ${new Date().toISOString()}`,
  );

  // Log arrival to the sheet before anything else (signature check, parsing,
  // etc.) so a row appears even if a later step throws or misconfigured env
  // vars cause an early return — this is the ground truth for "did Paystack
  // even reach us."
  await logToSheet({ eventType: `arrival:${req.method}` });

  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const rawBody = await getRawBody(req);
  console.log(
    `[webhook] raw body (${rawBody.length} bytes):`,
    rawBody.toString().slice(0, 2000),
  );
  const signature = req.headers["x-paystack-signature"];
  const secretKey = process.env.PAYSTACK_SECRET_KEY;

  if (!secretKey) {
    console.error("[webhook] PAYSTACK_SECRET_KEY is not set");
    await logToSheet({
      eventType: "server_misconfigured",
      error: "PAYSTACK_SECRET_KEY not set",
    });
    return res.status(500).json({ error: "Server misconfigured" });
  }

  // Verify HMAC-SHA512 signature
  const expectedSig = crypto
    .createHmac("sha512", secretKey)
    .update(rawBody)
    .digest("hex");

  if (signature !== expectedSig) {
    console.error("[webhook] signature mismatch — rejecting", {
      hasSignatureHeader: Boolean(signature),
    });
    await logToSheet({
      eventType: "invalid_signature",
      error: "Signature mismatch",
    });
    return res.status(401).json({ error: "Invalid signature" });
  }

  let payload;
  try {
    payload = JSON.parse(rawBody.toString());
  } catch {
    console.error("[webhook] failed to parse JSON body");
    await logToSheet({
      eventType: "invalid_json",
      error: "Failed to parse JSON body",
    });
    return res.status(400).json({ error: "Invalid JSON" });
  }

  console.log(`[webhook] verified event=${payload.event}`);

  if (payload.event !== "charge.success") {
    await logToSheet({
      eventType: payload.event,
      reference: payload.data?.reference,
    });
    return res.status(200).json({ received: true });
  }

  const data = payload.data;
  const email = data?.customer?.email;
  const customFields = data?.metadata?.custom_fields;
  // Paystack's customer.first_name/last_name come from Paystack's own
  // persisted Customer record, which we never populate — the name typed
  // into our checkout form only ever arrives via metadata.custom_fields
  // (see usePaystack.js), so that's the field we must read the payer's
  // name from.
  const nameFromMetadata = findCustomField(customFields, "name");
  const { firstName: metaFirstName, lastName: metaLastName } =
    splitName(nameFromMetadata);
  const firstName = data?.customer?.first_name || metaFirstName;
  const lastName = data?.customer?.last_name || metaLastName;
  const systemeFields = buildSystemeFields(customFields);
  const courseSlug = data?.metadata?.course_slug;
  const course = courseSlug ? COURSE_TAG_MAP[courseSlug] : null;
  const eventId = findCustomField(customFields, "event id");
  const event = eventId ? EVENT_TAG_MAP[eventId] : null;
  const match = course || event;
  const amount = data?.amount != null ? data.amount / 100 : null;

  console.log(
    "[webhook] charge.success data:",
    JSON.stringify({
      reference: data?.reference,
      amount: data?.amount,
      email,
      firstName,
      lastName,
      systemeFields,
      metadata: data?.metadata,
      courseSlug,
      eventId,
      matchedName: match?.name || null,
    }),
  );

  if (!email || !match) {
    const error = `no Systeme.io call made — email=${Boolean(email)} matched=${Boolean(match)} courseSlug=${courseSlug} eventId=${eventId}`;
    console.warn(`[webhook] ${error}`);
    await logToSheet({
      eventType: payload.event,
      email,
      amount,
      reference: data?.reference,
      systemeStatus: "",
      error,
    });
    return res.status(200).json({ received: true, tagged: false });
  }

  const systemeResult = await addContactToSysteme({
    email,
    firstName,
    lastName,
    fields: systemeFields,
    tags: match.tags,
  });

  if (systemeResult.ok) {
    console.log(`[webhook] tagged ${email} for ${match.name}`);
  } else {
    console.error("[webhook] Systeme.io tagging failed:", systemeResult.body);
  }

  await logToSheet({
    eventType: payload.event,
    email,
    amount,
    reference: data?.reference,
    systemeStatus: systemeResult.status,
    error: systemeResult.ok ? "" : systemeResult.body,
  });

  // Return 200 either way so Paystack doesn't retry — failures are recorded
  // above, in the sheet and in the function logs, for investigation.
  return res.status(200).json({
    received: true,
    tagged: systemeResult.ok,
    match: match.name,
    ...(systemeResult.ok ? {} : { error: systemeResult.body }),
  });
}
