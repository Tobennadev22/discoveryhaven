export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { reference, course, email } = req.body;
  if (!reference) {
    return res.status(400).json({ error: "Missing reference" });
  }

  const secretKey = process.env.PAYSTACK_SECRET_KEY;
  if (!secretKey) {
    return res.status(500).json({ error: "Payment service not configured" });
  }

  try {
    const paystackRes = await fetch(
      `https://api.paystack.co/transaction/verify/${encodeURIComponent(reference)}`,
      {
        headers: {
          Authorization: `Bearer ${secretKey}`,
          "Content-Type": "application/json",
        },
      }
    );

    const data = await paystackRes.json();

    if (!paystackRes.ok || data.data?.status !== "success") {
      return res.status(400).json({ verified: false, message: data.message });
    }

    return res.status(200).json({
      verified: true,
      amount: data.data.amount,
      course,
      email,
    });
  } catch (err) {
    return res.status(500).json({ error: "Verification failed" });
  }
}
