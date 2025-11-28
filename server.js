// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const OpenAI = require('openai');

const app = express();
const port = process.env.PORT || 3000;
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.use(cors());
app.use(express.json());

// Simple POST /chat endpoint
app.post('/chat', async (req, res) => {
  try {
    const userMessage = req.body.message || '';

    const response = await client.chat.completions.create({
      model: 'gpt-4.1-mini', // cheaper, good for early testing
      messages: [
        {
          role: 'system',
          content:
            'You are an appliance repair assistant. Ask about the user\'s comfort level (beginner/handy/tech) and tools, ' +
            'and give safe, step-by-step guidance for household appliances. ' +
            'If something seems unsafe for a homeowner, recommend a professional.',
        },
        { role: 'user', content: userMessage },
      ],
    });

    const answer = response.choices[0].message.content;
    res.json({ reply: answer });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error talking to OpenAI' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});