const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
{
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    telegramId: {
        type: Number,
        required: true
    },

    type: {
        type: String,
        enum: [
            "deposit",
            "purchase",
            "refund",
            "withdraw",
            "bonus"
        ],
        required: true
    },

    currency: {
        type: String,
        enum: ["USD", "LKR"],
        default: "USD"
    },

    amount: {
        type: Number,
        required: true
    },

    status: {
        type: String,
        enum: [
            "pending",
            "approved",
            "rejected",
            "completed"
        ],
        default: "pending"
    },

    description: {
        type: String,
        default: ""
    },

    createdAt: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model(
    "Transaction",
    transactionSchema
);
