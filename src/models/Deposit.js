const mongoose = require("mongoose");

const depositSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    telegramId: {
        type: Number,
        required: true
    },

    currency: {
        type: String,
        enum: ["USD", "LKR"],
        default: "LKR"
    },

    amount: {
        type: Number,
        required: true
    },

    paymentMethod: {
        type: String,
        enum: [
            "Manual",
            "PayHere",
            "Stripe",
            "Binance"
        ],
        required: true
    },

    reference: {
        type: String,
        default: ""
    },

    screenshot: {
        type: String,
        default: ""
    },

    status: {
        type: String,
        enum: [
            "Pending",
            "Approved",
            "Rejected"
        ],
        default: "Pending"
    }

}, {
    timestamps: true
});

module.exports = mongoose.model("Deposit", depositSchema);
