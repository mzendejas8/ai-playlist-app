import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

app.post("/ai", async (req, res) => {
    const mood = req.body.mood;

    const response = await client.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            { role: "system", content: "Generate 10 songs in JSON format." },
            { role: "user", content: `Mood: ${mood}` }
        ]
    });

    res.json(response.choices[0].message.content);
});

app.listen(3000, () => console.log("AI server running on http://localhost:3000"));
