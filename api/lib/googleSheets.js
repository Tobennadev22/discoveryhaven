import crypto from "crypto";

function base64url(input) {
  return Buffer.from(input)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

// Vercel env vars can arrive mangled depending on how they were pasted:
// wrapped in stray quotes, Windows \r\n line endings, or the literal
// two-character sequence \n instead of a real newline. All of these
// produce a PEM string Node's crypto module rejects with an opaque
// "1E08010C:DECODER routines::unsupported" error, so normalize
// defensively rather than trusting the raw env var.
function normalizePrivateKey(raw) {
  let key = (raw || "").trim();
  if (key.startsWith('"') && key.endsWith('"')) key = key.slice(1, -1);
  key = key.replace(/\\r\\n/g, "\n").replace(/\\n/g, "\n").replace(/\r\n/g, "\n").replace(/\r/g, "\n");
  return key.trim();
}

async function getAccessToken() {
  const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
  const privateKey = normalizePrivateKey(process.env.GOOGLE_SHEETS_PRIVATE_KEY);
  if (!clientEmail || !privateKey) return null;

  // Non-secret structural diagnostics — never log the key itself.
  const lines = privateKey.split("\n");
  console.log("[sheets] private key check:", JSON.stringify({
    startsWithBeginMarker: privateKey.startsWith("-----BEGIN PRIVATE KEY-----"),
    endsWithEndMarker: privateKey.endsWith("-----END PRIVATE KEY-----"),
    lineCount: lines.length,
    length: privateKey.length,
  }));

  const header = { alg: "RS256", typ: "JWT" };
  const now = Math.floor(Date.now() / 1000);
  const claimSet = {
    iss: clientEmail,
    scope: "https://www.googleapis.com/auth/spreadsheets",
    aud: "https://oauth2.googleapis.com/token",
    exp: now + 3600,
    iat: now,
  };

  const unsigned = `${base64url(JSON.stringify(header))}.${base64url(JSON.stringify(claimSet))}`;
  let signature;
  try {
    signature = crypto
      .sign("RSA-SHA256", Buffer.from(unsigned), privateKey)
      .toString("base64")
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/, "");
  } catch (err) {
    throw new Error(`Failed to sign JWT with GOOGLE_SHEETS_PRIVATE_KEY — check the key was pasted with real newlines and the full BEGIN/END markers intact: ${err.message}`);
  }
  const jwt = `${unsigned}.${signature}`;

  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: jwt,
    }),
  });

  const json = await res.json();
  if (!res.ok) {
    throw new Error(`Google auth error ${res.status}: ${JSON.stringify(json)}`);
  }
  return json.access_token;
}

// Appends one row to the configured spreadsheet/tab. Silently no-ops (with a
// console.error) if credentials aren't configured, so a missing Sheets
// integration never breaks the caller's primary flow.
export async function appendSheetRow(values) {
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
  const sheetName = process.env.GOOGLE_SHEETS_SHEET_NAME || "Sheet1";

  if (!spreadsheetId) {
    console.error("[sheets] GOOGLE_SHEETS_SPREADSHEET_ID is not set — skipping row log");
    return;
  }

  const accessToken = await getAccessToken();
  if (!accessToken) {
    console.error("[sheets] GOOGLE_SHEETS_CLIENT_EMAIL/PRIVATE_KEY are not set — skipping row log");
    return;
  }

  // Sheet/tab names must be single-quoted in A1 notation whenever they
  // contain a space (or other special character) — Google's API rejects
  // an unquoted "My Tab Name!A:G" as an unparseable range. Quoting is
  // always valid, even for single-word names, so quote unconditionally.
  // A literal ' inside the tab name is escaped as '' per A1 notation.
  const quotedSheetName = `'${sheetName.replace(/'/g, "''")}'`;
  const range = encodeURIComponent(`${quotedSheetName}!A:G`);
  const res = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}:append?valueInputOption=USER_ENTERED`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ values: [values] }),
    }
  );

  const text = await res.text();
  console.log(`[sheets] append status=${res.status}`);

  if (!res.ok) {
    // "Unable to parse range" also fires when the quoted range is
    // syntactically valid but no tab with that exact name exists in the
    // spreadsheet (the file's Drive title != a sheet/tab name). List the
    // spreadsheet's actual tabs so the mismatch is visible without another
    // round trip of guessing.
    try {
      const metaRes = await fetch(
        `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}?fields=sheets.properties.title`,
        { headers: { Authorization: `Bearer ${accessToken}` } }
      );
      const metaJson = await metaRes.json();
      console.error(
        `[sheets] configured tab name is "${sheetName}" — actual tabs in this spreadsheet:`,
        JSON.stringify(metaJson?.sheets?.map((s) => s.properties.title) ?? metaJson)
      );
    } catch (metaErr) {
      console.error("[sheets] could not fetch spreadsheet tab list:", metaErr.message);
    }
    throw new Error(`Google Sheets error ${res.status}: ${text}`);
  }
}
