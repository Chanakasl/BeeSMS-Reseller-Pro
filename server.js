require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const connectDatabase = require("./config/database");

// Initialize Bot Commands
const bot = require("./bot");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

const PORT = process.env.PORT || 3000;

// Home Route
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        name: "BeeSMS Reseller Pro",
        version: "1.0.0",
        status: "Running"
    });
});

// Health Check
app.get("/health", (req, res) => {
    res.status(200).json({
        success: true,
        database: "Connected",
        bot: "Running"
    });
});

async function startServer() {
    try {

        // Connect MongoDB
        await connectDatabase();

        // Start Telegram Bot
        await bot.start();

        console.log("🤖 Telegram Bot Started");

        // Start Express
        app.listen(PORT, () => {
            console.log(`🚀 Server Running on Port ${PORT}`);
        });

    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

startServer();
