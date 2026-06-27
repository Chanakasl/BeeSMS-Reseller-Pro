const mongoose = require("mongoose");

const otpSchema = new mongoose.Schema({

    order: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order"
    },

    code: String,

    sms: String,

    receivedAt: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model("Otp", otpSchema);
