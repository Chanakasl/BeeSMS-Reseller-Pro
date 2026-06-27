const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.ADMIN_PORT || 5000;

mongoose
.connect(process.env.MONGODB_URI)
.then(() => console.log("✅ Admin Database Connected"))
.catch(err => console.log(err));

app.get("/", (req, res) => {
    res.json({
        success: true,
        panel: "BeeSMS Admin Panel",
        version: "1.0.0"
    });
});

app.listen(PORT, () => {
    console.log(`🚀 Admin Panel Running : ${PORT}`);
});
