const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    telegramId: Number,

    provider: {
        type: String,
        default: "BeeSMS"
    },

    country: String,

    service: String,

    phoneNumber: String,

    orderId: String,

    priceUSD: Number,

    priceLKR: Number,

    otpCode: {
        type: String,
        default: ""
    },

    status: {
        type: String,
        enum: [
            "Waiting",
            "Received",
            "Expired",
            "Cancelled"
        ],
        default: "Waiting"
    }

}, {
    timestamps: true
});

module.exports = mongoose.model("Order", orderSchema);
