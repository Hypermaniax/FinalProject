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

ListingSchema.post("save", async function (doc) {
  const Host = require("./host");
  await Host.findByIdAndUpdate(doc.host, {
    $addToSet: { listings: doc._id },
  });
});

ListingSchema.post("findOneAndDelete", async function (doc) {
  if (doc) {
    const Host = require("./host");
    await Host.findByIdAndUpdate(doc.host, {
      $pull: { listings: doc._id },
    });

    // Optionally, also remove related images or other cleanup
    console.log(`Deleted listing ${doc._id}`);
  }
});


const Listing = mongoose.model("Listing", ListingSchema);

module.exports = Listing;
