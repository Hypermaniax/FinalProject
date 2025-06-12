const Bookings = require("../models/bookings");

const createBookings = async (data) => {
  const bookings = new Bookings(data);
  return await bookings.save();
};

const findBookingByid = async (id) => {
  return await Bookings.find({ _id: { $in: id } })
    .select("checkIn checkOut _id totalPrice listingId")
    .populate([
      {
        path: "listingId",
        select: ["_id", "title", "location", "category", "capacity", "imgUrl"],
      },
    ]);
};

module.exports = { createBookings, findBookingByid };
