const mongoose = require("mongoose");
const { Schema } = mongoose;

const HostSchema = new Schema(
  {
    name: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    hashPassword: { type: String, required: true },
    imageUrl: String,
    listings: [{ type: Schema.Types.ObjectId, ref: "Listing" }],
  },
  { timestamps: true }
);
const Host = mongoose.model("Host", HostSchema);
module.exports = Host;
