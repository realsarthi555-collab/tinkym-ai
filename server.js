const express = require("express");
const cors = require("cors");
const OpenAI = require("openai");

console.log("Tinkym AI server starting...");

const app = express();

app.use(cors());
app.use(express.json());

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

app.get("/", (req, res) => {
    res.send("Tinkym AI Backend is running!");
});

app.post("/chat", async (req, res) => {
    try {
        const { message } = req.body;

        const response = await client.responses.create({
            model: "gpt-4.1-mini",
            input: message
        });

        res.json({
            reply: response.output_text
        });

    } catch (error) {
        console.error("AI ERROR:", error);
        res.status(500).json({
            error: "AI response failed"
        });
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
    console.log("Tinkym AI is running on port " + PORT);
});
