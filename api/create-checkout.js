// Server-side Paystack transaction initialization for course purchases.
// Unlike the old static paystack.com/pay/... links, this lets us attach
// metadata.course_slug that Paystack guarantees echoes back in the
// charge.success webhook — the static links never reliably identified
// which course was purchased.
const COURSES = {
  "creative-quest": {
    paystackSlug: "dh-creative-quest-2026",
    name: "Creative Quest",
    amount: 200,
  },
  "loud-and-fearless": {
    paystackSlug: "dh-loud-and-fearless-2026",
    name: "Loud & Fearless",
    amount: 75000,
  },
  "curiosity-box": {
    paystackSlug: "dh-curiosity-box-2027",
    name: "The Curiosity Box",
    amount: 50000,
  },
  "eq-lab": {
    paystackSlug: "dh-eq-lab-2027",
    name: "The EQ Lab",
    amount: 50000,
  },
};

export default async function handler(req, res) {
  // Whole body wrapped in try/catch, not just the Paystack call — any
  // unexpected exception here must still return JSON, never let Vercel's
  // platform-level error page (HTML) leak to the client, which the
  // frontend can't parse and shows as a cryptic "unexpected character"
  // error instead of anything actionable.
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    const { email, courseSlug, firstName, lastName, countryCode, phone, childName, childAge } = req.body || {};
    const course = COURSES[courseSlug];

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return res.status(400).json({ error: "A valid email is required" });
    }
    if (!course) {
      return res.status(400).json({ error: "Unknown course" });
    }
    if (!firstName || !lastName || !phone || !childName || !childAge) {
      return res.status(400).json({ error: "Missing required enrollment details" });
    }
    if (!countryCode || !/^\+\d{1,4}$/.test(countryCode)) {
      return res.status(400).json({ error: "Invalid country code" });
    }

    const secretKey = process.env.PAYSTACK_SECRET_KEY;
    if (!secretKey) {
      console.error("[create-checkout] PAYSTACK_SECRET_KEY is not set");
      return res.status(500).json({ error: "Payment service not configured" });
    }

    // Amount is always taken from the server-side COURSES map above, never
    // from the client, so a tampered request can't change the charged price.
    const proto = req.headers["x-forwarded-proto"] || "https";
    const callbackUrl = `${proto}://${req.headers.host}/thank-you/${courseSlug}`;
    // Local numbers are commonly written with a leading 0 that's dropped
    // once the country code is prefixed (e.g. Nigeria/UK/Ghana convention)
    // - a no-op for countries/numbers that don't have one.
    const fullPhone = `${countryCode}${String(phone).replace(/^0+/, "")}`;

    const paystackRes = await fetch("https://api.paystack.co/transaction/initialize", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${secretKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        amount: course.amount * 100,
        currency: "NGN",
        callback_url: callbackUrl,
        metadata: {
          course_slug: course.paystackSlug,
          course_name: course.name,
          // Same custom_fields shape the event enrollment flow uses, so the
          // webhook's existing extraction logic (findCustomField /
          // buildSystemeFields) works unchanged for both flows.
          custom_fields: [
            { display_name: "First Name", variable_name: "first name", value: firstName },
            { display_name: "Last Name", variable_name: "last name", value: lastName },
            { display_name: "Phone", variable_name: "phone", value: fullPhone },
            { display_name: "Child Name", variable_name: "child name", value: childName },
            { display_name: "Child Age", variable_name: "child age", value: String(childAge) },
          ],
        },
      }),
    });

    const data = await paystackRes.json();
    console.log(`[create-checkout] course=${courseSlug} email=${email} paystackStatus=${paystackRes.status}`);

    if (!paystackRes.ok || !data.status || !data.data?.authorization_url) {
      console.error("[create-checkout] Paystack init failed:", JSON.stringify(data));
      return res.status(502).json({ error: data.message || "Failed to start payment" });
    }

    return res.status(200).json({ authorizationUrl: data.data.authorization_url });
  } catch (err) {
    console.error("[create-checkout] error:", err.message);
    return res.status(500).json({ error: "Failed to start payment" });
  }
}
