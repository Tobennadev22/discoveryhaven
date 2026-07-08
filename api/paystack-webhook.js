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

async function getRawBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on("data", (chunk) => chunks.push(chunk));
    req.on("end", () => resolve(Buffer.concat(chunks)));
    req.on("error", reject);
  });
}

async function addContactToSysteme({ email, firstName, tags }) {
  const apiKey = process.env.SYSTEME_API_KEY;
  if (!apiKey) return;

  const res = await fetch("https://api.systeme.io/api/contacts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": apiKey,
    },
    body: JSON.stringify({
      email,
      fields: firstName
        ? [{ slug: "first_name", value: firstName }]
        : [],
      tags: tags.map((name) => ({ name })),
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Systeme.io error ${res.status}: ${text}`);
  }
  return res.json();
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const rawBody = await getRawBody(req);
  const signature = req.headers["x-paystack-signature"];
  const secretKey = process.env.PAYSTACK_SECRET_KEY;

  if (!secretKey) {
    return res.status(500).json({ error: "Server misconfigured" });
  }

  // Verify HMAC-SHA512 signature
  const expectedSig = crypto
    .createHmac("sha512", secretKey)
    .update(rawBody)
    .digest("hex");

  if (signature !== expectedSig) {
    return res.status(401).json({ error: "Invalid signature" });
  }

  let payload;
  try {
    payload = JSON.parse(rawBody.toString());
  } catch {
    return res.status(400).json({ error: "Invalid JSON" });
  }

  if (payload.event !== "charge.success") {
    return res.status(200).json({ received: true });
  }

  const data = payload.data;
  const email = data?.customer?.email;
  const firstName = data?.customer?.first_name || "";
  const pageSlug = data?.source?.identifier;
  const course = pageSlug ? COURSE_TAG_MAP[pageSlug] : null;

  if (!email || !course) {
    return res.status(200).json({ received: true, tagged: false });
  }

  try {
    await addContactToSysteme({ email, firstName, tags: course.tags });
    return res.status(200).json({ received: true, tagged: true, course: course.name });
  } catch (err) {
    console.error("Systeme.io tagging failed:", err.message);
    // Return 200 so Paystack doesn't retry — log the failure for investigation
    return res.status(200).json({ received: true, tagged: false, error: err.message });
  }
}
