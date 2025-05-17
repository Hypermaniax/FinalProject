const mongoose = require("mongoose");
const { Schema } = mongoose;

const ReviewSchema = new Schema(
  {
    guestId: { type: Schema.Types.ObjectId, ref: "Guest" },
    listingId: { type: Schema.Types.ObjectId, ref: "Listing" },
    rating: Number,
    reviews: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Review", ReviewSchema);