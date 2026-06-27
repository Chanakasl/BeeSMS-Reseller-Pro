const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
{
    telegramId: {
        type: Number,
        unique: true,
        required: true
    },

    username: {
        type: String,
        default: ""
    },

    firstName: {
        type: String,
        default: ""
    },

    lastName: {
        type: String,
        default: ""
    },

    language: {
        type: String,
        enum: ["si", "en"],
        default: "en"
    },

    wallet: {
        lkr: {
            type: Number,
            default: 0
        },

        usd: {
            type: Number,
            default: 0
        }
    },

    referralCode: {
        type: String,
        default: ""
    },

    referredBy: {
        type: String,
        default: ""
    },

    totalOrders: {
        type: Number,
        default: 0
    },

    totalSpentUSD: {
        type: Number,
        default: 0
    },

    totalSpentLKR: {
        type: Number,
        default: 0
    },

    isAdmin: {
        type: Boolean,
        default: false
    },

    isBanned: {
        type: Boolean,
        default: false
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("User", userSchema);
