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
  const Guest = require("./guestSchema");
  const Listing = require("./listing");

  await Guest.findByIdAndUpdate(doc.guestId, {
    $addToSet: { bookings: doc._id },
  });

  await Listing.findByIdAndUpdate(doc.listingId, {
    $addToSet: { bookings: doc._id },
  });
});

module.exports = mongoose.model("Booking", BookingSchema);
