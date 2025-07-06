// routes/chat.routes.js
import express from "express";
import gemini_response from "../gemini.js";

const router = express.Router();

router.post("/chat", async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ success: false, message: "Prompt is required" });
  }

  try {
    const reply = await gemini_response(prompt);
    res.status(200).json({ success: true, reply });
  } catch (err) {
    console.error("Error getting Gemini response:", err);
    res.status(500).json({ success: false, message: "Gemini API failed" });
  }
});

export default router;
