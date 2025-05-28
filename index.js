const cors = require('cors');
app.use(cors());

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Configuration, OpenAIApi } = require('openai');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Autoriser uniquement GitHub Pages
app.use(cors({
  origin: 'https://horus911.github.io'
}));

app.use(bodyParser.json());

// Configurer OpenAI
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// Route de résumé
app.post('/api/summarize', async (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: 'No text provided' });
  }

  try {
    const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{
        role: 'user',
        content: `Please summarize the following news article in one sentence:\n\n${text}`,
      }],
    });

    const summary = completion.data.choices[0].message.content.trim();
    res.json({ summary });
  } catch (error) {
    console.error('OpenAI error:', error.message);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
git add index.js
git commit -m "Fix CORS for GitHub Pages"
git push
