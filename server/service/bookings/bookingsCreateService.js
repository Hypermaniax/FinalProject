const {createBookings} = require("../../repositories/bookings");

const bookingsCreateService = async (data) => {  
  const bookings = await createBookings(data);
  return bookings
};
module.exports = bookingsCreateService;
