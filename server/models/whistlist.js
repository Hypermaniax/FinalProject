// models/Wishlist.js
const mongoose = require("mongoose");
const { Schema } = mongoose;

const WishlistSchema = new Schema(
  {
    guestId: { type: Schema.Types.ObjectId, ref: "Guest" },
    listingId: { type: Schema.Types.ObjectId, ref: "Listing" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Wishlist", WishlistSchema);