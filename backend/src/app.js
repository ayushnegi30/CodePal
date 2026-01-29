const express = require("express");
const cors = require("cors");

const aiRoutes = require("./routes/ai.routes");

const app = express();

/* 🔥 TRUST RENDER PROXY */
app.set("trust proxy", 1);

/* 🔥 HARD RESET CORS (ALLOW ALL FOR NOW) */
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

/* 🔥 FORCE PREFLIGHT RESPONSE */
app.options("*", cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Backend alive ✅");
});

app.use("/ai", aiRoutes);

module.exports = app;
