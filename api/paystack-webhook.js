import crypto from "crypto";

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

async function addContactToSysteme({ email, firstName, lastName, tags }) {
  const apiKey = process.env.SYSTEME_API_KEY;
  if (!apiKey) {
    console.error("[systeme] SYSTEME_API_KEY is not set — skipping contact creation");
    return;
  }

  const body = {
    email,
    ...(firstName ? { firstName } : {}),
    ...(lastName ? { lastName } : {}),
    fields: [],
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

  if (!res.ok) {
    throw new Error(`Systeme.io error ${res.status}: ${text}`);
  }
  return text ? JSON.parse(text) : null;
}

export default async function handler(req, res) {
  console.log(`[webhook] hit: method=${req.method} at ${new Date().toISOString()}`);

  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const rawBody = await getRawBody(req);
  const signature = req.headers["x-paystack-signature"];
  const secretKey = process.env.PAYSTACK_SECRET_KEY;

  if (!secretKey) {
    console.error("[webhook] PAYSTACK_SECRET_KEY is not set");
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
    return res.status(401).json({ error: "Invalid signature" });
  }

  let payload;
  try {
    payload = JSON.parse(rawBody.toString());
  } catch {
    console.error("[webhook] failed to parse JSON body");
    return res.status(400).json({ error: "Invalid JSON" });
  }

  console.log(`[webhook] verified event=${payload.event}`);

  if (payload.event !== "charge.success") {
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
  const pageSlug = data?.source?.identifier;
  const course = pageSlug ? COURSE_TAG_MAP[pageSlug] : null;

  // Full dump so a real test payment tells us exactly which field actually
  // carries the course/page info — source.identifier is unconfirmed for
  // hosted Payment Page checkouts.
  console.log("[webhook] charge.success data:", JSON.stringify({
    reference: data?.reference,
    amount: data?.amount,
    email,
    firstName,
    lastName,
    source: data?.source,
    metadata: data?.metadata,
    pageSlug,
    matchedCourse: course?.name || null,
  }));

  if (!email || !course) {
    console.warn(`[webhook] no Systeme.io call made — email=${Boolean(email)} matchedCourse=${Boolean(course)} pageSlug=${pageSlug}`);
    return res.status(200).json({ received: true, tagged: false });
  }

  try {
    await addContactToSysteme({ email, firstName, lastName, tags: course.tags });
    console.log(`[webhook] tagged ${email} for course=${course.name}`);
    return res.status(200).json({ received: true, tagged: true, course: course.name });
  } catch (err) {
    console.error("[webhook] Systeme.io tagging failed:", err.message);
    // Return 200 so Paystack doesn't retry — log the failure for investigation
    return res.status(200).json({ received: true, tagged: false, error: err.message });
  }
}
