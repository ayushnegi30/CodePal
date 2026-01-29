const express = require('express');
const aiRoutes = require('./routes/ai.routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

/* 🔥 TEST ROUTE — VERY IMPORTANT */
app.get('/test-ai', async (req, res) => {
  const result = await generateContent("Say hello in one line");
  res.send(result);
});

app.use('/ai', aiRoutes);

module.exports = app;
