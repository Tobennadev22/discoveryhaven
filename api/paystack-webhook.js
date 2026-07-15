import crypto from "crypto";
import { appendSheetRow } from "./lib/googleSheets.js";

// Disable Vercel's default body parser so we can read the raw bytes
// needed for HMAC signature verification.
export const config = { api: { bodyParser: false } };

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

function findCustomField(customFields, variableName) {
  return (customFields || []).find((f) => f.variable_name === variableName)?.value || "";
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
async function addContactToSysteme({ email, firstName, lastName, fields, tags }) {
  const apiKey = process.env.SYSTEME_API_KEY;
  if (!apiKey) {
    console.error("[systeme] SYSTEME_API_KEY is not set — skipping contact creation");
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
async function logToSheet({ eventType, email, amount, reference, systemeStatus, error }) {
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
  console.log(`[webhook] hit: method=${req.method} at ${new Date().toISOString()}`);

  if (req.method !== "POST") {
    await logToSheet({ eventType: `invalid_method:${req.method}`, error: "Non-POST request" });
    return res.status(405).end();
  }

  const rawBody = await getRawBody(req);
  const signature = req.headers["x-paystack-signature"];
  const secretKey = process.env.PAYSTACK_SECRET_KEY;

  if (!secretKey) {
    console.error("[webhook] PAYSTACK_SECRET_KEY is not set");
    await logToSheet({ eventType: "server_misconfigured", error: "PAYSTACK_SECRET_KEY not set" });
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
    await logToSheet({ eventType: "invalid_signature", error: "Signature mismatch" });
    return res.status(401).json({ error: "Invalid signature" });
  }

  let payload;
  try {
    payload = JSON.parse(rawBody.toString());
  } catch {
    console.error("[webhook] failed to parse JSON body");
    await logToSheet({ eventType: "invalid_json", error: "Failed to parse JSON body" });
    return res.status(400).json({ error: "Invalid JSON" });
  }

  console.log(`[webhook] verified event=${payload.event}`);

  if (payload.event !== "charge.success") {
    await logToSheet({ eventType: payload.event, reference: payload.data?.reference });
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
  const { firstName: metaFirstName, lastName: metaLastName } = splitName(nameFromMetadata);
  const firstName = data?.customer?.first_name || metaFirstName;
  const lastName = data?.customer?.last_name || metaLastName;
  const systemeFields = buildSystemeFields(customFields);
  const pageSlug = data?.source?.identifier;
  const course = pageSlug ? COURSE_TAG_MAP[pageSlug] : null;
  const amount = data?.amount != null ? data.amount / 100 : null;

  // Full dump so a real test payment tells us exactly which field actually
  // carries the course/page info — source.identifier is unconfirmed for
  // hosted Payment Page checkouts.
  console.log("[webhook] charge.success data:", JSON.stringify({
    reference: data?.reference,
    amount: data?.amount,
    email,
    firstName,
    lastName,
    systemeFields,
    source: data?.source,
    metadata: data?.metadata,
    pageSlug,
    matchedCourse: course?.name || null,
  }));

  if (!email || !course) {
    const error = `no Systeme.io call made — email=${Boolean(email)} matchedCourse=${Boolean(course)} pageSlug=${pageSlug}`;
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

  const systemeResult = await addContactToSysteme({ email, firstName, lastName, fields: systemeFields, tags: course.tags });

  if (systemeResult.ok) {
    console.log(`[webhook] tagged ${email} for course=${course.name}`);
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
    course: course.name,
    ...(systemeResult.ok ? {} : { error: systemeResult.body }),
  });
}
