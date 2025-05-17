const mongoose = require("mongoose");
const { Schema } = mongoose;

const PaymentSchema = new Schema(
  {
    paymentMethod: { type: Number, required: true },
    paymentStatus: String,
    amount: { type: Number, required: true },
    paidAt: { type: Number },
    bookingId: { type: Schema.Types.ObjectId, ref: "Booking" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Payment", PaymentSchema);
