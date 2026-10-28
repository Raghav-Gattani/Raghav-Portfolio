// Vercel serverless function. The key lives ONLY in Vercel env var GROQ_API_KEY.
export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Use POST" });
  const key = process.env.GROQ_API_KEY;
  if (!key) return res.status(500).json({ error: "API key not configured on server." });
  try {
    const { message, context } = req.body || {};
    if (!message) return res.status(400).json({ error: "Message required" });
    const system = `You are the portfolio assistant for Raghav Gattani, speaking like a friendly One Piece crew member. Answer ONLY using the portfolio info below. If the answer isn't there, say you don't have that info. Keep replies short.\n\nPORTFOLIO:\n${JSON.stringify(context)}`;
    const r = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${key}` },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
          { role: "system", content: system },
          { role: "user", content: String(message).slice(0, 500) },
        ],
        temperature: 0.4,
        max_tokens: 400,
      }),
    });
    const data = await r.json();
    if (!r.ok) return res.status(502).json({ error: data?.error?.message || "Groq API error" });
    return res.status(200).json({ reply: data.choices?.[0]?.message?.content || "No response received." });
  } catch (e) {
    return res.status(500).json({ error: "Server error: " + e.message });
  }
}
