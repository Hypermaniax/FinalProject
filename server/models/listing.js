const mongoose = require("mongoose");
const { Schema } = mongoose;

const ListingSchema = new Schema(
  {
    location: {
      province: { type: String, required: true },
      city: { type: String, required: true },
    },
    category: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    imgUrl: { type: [String], required: true },
    facility: { type: [String], required: true },
    capacity: { type: Number, required: true },
    price: { type: Number, required: true },
    host: { type: Schema.Types.ObjectId, ref: "Host" },
    bookings: [{ type: Schema.Types.ObjectId, ref: "Booking" }],
    reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
    wishlists: [{ type: Schema.Types.ObjectId, ref: "Wishlist" }],
  },
  { timestamps: true }
);

const Listing = mongoose.model("Listing", ListingSchema);

module.exports = Listing
