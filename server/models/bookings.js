// models/Booking.js
const mongoose = require("mongoose");
const { Schema } = mongoose;

const BookingSchema = new Schema(
  {
    checkIn: { type: Date, required: true },
    checkOut: { type: Date, required: true },
    totalPrice: { type: Number, required: true },
    statusBooking: String,
    guestId: { type: Schema.Types.ObjectId, ref: "Guest" },
    listingId: { type: Schema.Types.ObjectId, ref: "Listing" },
    payment: { type: Schema.Types.ObjectId, ref: "Payment" },
  },
  { timestamps: true }
);

BookingSchema.post("save", async function (doc) {
  const guest = require("./guestSchema");
  const listing = require("./listing");
  const payment = require("./payment");

  await listing.findByIdAndUpdate(doc._id, {
    $pull: { bookings: doc._id },
  });
  await guest.findByIdAndUpdate(doc._id, {
    $pull: { bookings: doc._id },
  });
  await payment.findByIdAndUpdate(doc._id, {
    $pull: { bookings: doc._id },
  });
});

module.exports = mongoose.model("Booking", BookingSchema);
