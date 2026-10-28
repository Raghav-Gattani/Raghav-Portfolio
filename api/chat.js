// Vercel serverless function. The key lives ONLY in Vercel env var GROQ_API_KEY.
const MODELS = ["openai/gpt-oss-20b", "openai/gpt-oss-120b"]; // tries the next one if a model is unavailable

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Use POST" });
  const key = process.env.GROQ_API_KEY;
  if (!key) return res.status(500).json({ error: "API key not configured on server." });
  try {
    const { message, context } = req.body || {};
    if (!message) return res.status(400).json({ error: "Message required" });
    const system = `You are the portfolio assistant for Raghav Gattani, speaking like a friendly One Piece crew member. Answer ONLY using the portfolio info below. If the answer isn't there, say you don't have that info. Keep replies short.\n\nPORTFOLIO:\n${JSON.stringify(context)}`;

    let lastError = "Groq API error";
    for (const model of MODELS) {
      const r = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${key}` },
        body: JSON.stringify({
          model,
          messages: [
            { role: "system", content: system },
            { role: "user", content: String(message).slice(0, 500) },
          ],
          temperature: 0.4,
          max_completion_tokens: 1024,
          reasoning_effort: "low",
        }),
      });
      const data = await r.json();
      if (r.ok) {
        const reply = data.choices?.[0]?.message?.content;
        if (reply) return res.status(200).json({ reply });
        lastError = "Empty response from model";
        continue;
      }
      lastError = data?.error?.message || lastError;
      if (!/model/i.test(lastError)) break; // only retry when the problem is the model
    }
    return res.status(502).json({ error: lastError });
  } catch (e) {
    return res.status(500).json({ error: "Server error: " + e.message });
  }
}
