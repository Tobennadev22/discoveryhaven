// Parent Community signup (fallback while no hosted Systeme.io opt-in URL
// is configured in src/data/site.js). Adds the contact to Systeme.io and
// applies the community tag plus a source tag, so a Systeme.io automation
// on the community tag can send the welcome email.
//
// Env vars: SYSTEME_API_KEY (already used by the Paystack webhook).
// Optional overrides: SYSTEME_COMMUNITY_TAG, SYSTEME_SOURCE_TAG.
const DEFAULT_COMMUNITY_TAG = "dh-parent-community";
const DEFAULT_SOURCE_TAG = "dh-source-website";
const SYSTEME = "https://api.systeme.io/api";

function extractId(json) {
  if (json?.id != null) return json.id;
  const match =
    typeof json?.["@id"] === "string" ? json["@id"].match(/(\d+)$/) : null;
  return match ? Number(match[1]) : null;
}

function listItems(json) {
  return Array.isArray(json)
    ? json
    : json?.items || json?.member || json?.["hydra:member"] || [];
}

async function findContactId(email, apiKey) {
  const res = await fetch(
    `${SYSTEME}/contacts?email=${encodeURIComponent(email)}`,
    { headers: { "X-API-Key": apiKey } },
  );
  if (!res.ok) return null;
  const match = listItems(await res.json()).find(
    (c) => String(c.email || "").toLowerCase() === email.toLowerCase(),
  );
  return match ? extractId(match) : null;
}

async function createContact(email, firstName, apiKey) {
  const res = await fetch(`${SYSTEME}/contacts`, {
    method: "POST",
    headers: { "Content-Type": "application/json", "X-API-Key": apiKey },
    body: JSON.stringify({ email, ...(firstName ? { firstName } : {}) }),
  });
  const text = await res.text();
  if (!res.ok) {
    throw new Error(`create contact failed ${res.status}: ${text}`);
  }
  return extractId(JSON.parse(text));
}

async function resolveTagId(name, apiKey) {
  for (let page = 1; page <= 10; page++) {
    const res = await fetch(`${SYSTEME}/tags?limit=100&page=${page}`, {
      headers: { "X-API-Key": apiKey },
    });
    if (!res.ok) break;
    const json = await res.json();
    const items = listItems(json);
    const existing = items.find((t) => t.name === name);
    if (existing) return extractId(existing);
    if (Array.isArray(json) || !json.hasMore || items.length === 0) break;
  }
  const res = await fetch(`${SYSTEME}/tags`, {
    method: "POST",
    headers: { "Content-Type": "application/json", "X-API-Key": apiKey },
    body: JSON.stringify({ name }),
  });
  const text = await res.text();
  if (!res.ok) throw new Error(`create tag failed ${res.status}: ${text}`);
  return extractId(JSON.parse(text));
}

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    const { email, firstName, website } = req.body || {};

    // Honeypot: real visitors never see or fill the "website" field.
    if (website) return res.status(200).json({ ok: true });

    const cleanEmail = typeof email === "string" ? email.trim() : "";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail) || cleanEmail.length > 254) {
      return res.status(400).json({ error: "A valid email is required" });
    }

    const apiKey = process.env.SYSTEME_API_KEY;
    if (!apiKey) {
      console.error("[subscribe] SYSTEME_API_KEY is not set");
      return res.status(500).json({ error: "Signup is not configured" });
    }

    const cleanFirst =
      typeof firstName === "string" ? firstName.trim().slice(0, 80) : "";

    // Existing contacts are reused, so a repeat signup just re-applies the
    // tags instead of failing on a duplicate email.
    let contactId = await findContactId(cleanEmail, apiKey);
    if (contactId == null) {
      contactId = await createContact(cleanEmail, cleanFirst, apiKey);
    }
    if (contactId == null) throw new Error("no contact id returned");

    const tags = [
      process.env.SYSTEME_COMMUNITY_TAG || DEFAULT_COMMUNITY_TAG,
      process.env.SYSTEME_SOURCE_TAG || DEFAULT_SOURCE_TAG,
    ];
    for (const tagName of tags) {
      const tagId = await resolveTagId(tagName, apiKey);
      if (tagId == null) throw new Error(`no tag id returned for ${tagName}`);
      const tagRes = await fetch(`${SYSTEME}/contacts/${contactId}/tags`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "X-API-Key": apiKey },
        body: JSON.stringify({ tagId }),
      });
      // 422 here means the contact already has the tag, which is fine.
      if (!tagRes.ok && tagRes.status !== 422) {
        throw new Error(`assign tag ${tagName} failed ${tagRes.status}: ${await tagRes.text()}`);
      }
    }

    console.log(`[subscribe] ok contact=${contactId} tags=${tags.join(",")}`);
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("[subscribe] error:", err.message);
    return res.status(502).json({ error: "Signup failed" });
  }
}
