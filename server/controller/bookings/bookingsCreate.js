const bookingsCreateService = require("../../service/bookings/bookingsCreateService");

const createBookings = async (req, res) => {
  try {
    await bookingsCreateService(req.body);
    console.log(req.body);
    
    return res.status(200).json({ message: "succes Bookings" });
  } catch (error) {
    console.log(error);

    return res
      .status(401)
      .json({ message: "Failed to Create bookings", error });
  }
};
module.exports = createBookings;
