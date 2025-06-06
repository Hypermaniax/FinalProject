const Bookings = require("../models/bookings");

const createBookings = async (data) => {
  const bookings = new Bookings(data);
  return bookings.save();
};
module.exports = createBookings;
