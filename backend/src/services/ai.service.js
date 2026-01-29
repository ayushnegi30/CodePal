const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GOOGLE_GEMINI_KEY,
});

async function aiService(code) {
  try {
    const result = await ai.models.generateContent({
      model: "models/gemini-2.5-flash",
      contents: [
        {
          role: "user",
          parts: [{ text: code }],
        },
      ],
    });

    // ✅ CORRECT way to extract text
    const text =
      result.candidates?.[0]?.content?.parts
        ?.map((p) => p.text)
        .join("") || "";

    return text;
  } catch (error) {
    console.error("❌ Gemini error:", error);
    throw error;
  }
}

module.exports = aiService;
