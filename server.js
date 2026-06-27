require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");

const { Bot } = require("grammy");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

const PORT = process.env.PORT || 3000;

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Error:", err));

// Telegram Bot
const bot = new Bot(process.env.BOT_TOKEN);

// Start Command
bot.command("start", async (ctx) => {
  await ctx.reply(
`👋 Welcome to BeeSMS Reseller Pro

🇱🇰 සිංහල
ඔබගේ භාෂාව තෝරන්න.

🇬🇧 English
Please select your language.

(Buttons will be added in Part 2)`
  );
});

// Health Check
app.get("/", (req, res) => {
  res.json({
    status: true,
    project: "BeeSMS Reseller Pro",
    version: "1.0.0",
    server: "Running"
  });
});

// Start Express
app.listen(PORT, async () => {
  console.log(`🚀 Server Running on ${PORT}`);

  await bot.start();

  console.log("🤖 Telegram Bot Started");
});
