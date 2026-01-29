require("dotenv").config();
const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GOOGLE_GEMINI_KEY,
});

async function run() {
  try {
    const models = await ai.models.list();
    console.log("✅ MODELS AVAILABLE FOR YOUR KEY:\n");

    models.forEach((m) => {
      console.log(
        m.name,
        "→ supports:",
        m.supportedGenerationMethods
      );
    });
  } catch (err) {
    console.error("❌ ERROR LISTING MODELS:", err);
  }
}

run();
