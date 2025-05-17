// models/Guest.js
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { Schema } = mongoose;

const guestSchema = new Schema(
  {
    name: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    hashPassword: { type: String, required: true },
    imageUrl: String,
    bookings: [{ type: Schema.Types.ObjectId, ref: "Booking" }],
    reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
    wishlists: [{ type: Schema.Types.ObjectId, ref: "Wishlist" }],
  },
  { timestamps: true }
);

const Guest = mongoose.model("Guest", guestSchema);

module.exports = Guest;
