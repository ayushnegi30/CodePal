const express = require('express');
const cors = require('cors');
const aiRoutes = require('./routes/ai.routes');

const app = express();

/* ✅ CORRECT CORS CONFIG */
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://code-pal-seven.vercel.app"
  ],
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());

/* ✅ HEALTH CHECK */
app.get('/', (req, res) => {
  res.send('Backend alive ✅');
});

/* ✅ AI ROUTES */
app.use('/ai', aiRoutes);

module.exports = app;
