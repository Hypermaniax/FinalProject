import axios from "axios";

export const createBookings = async (bookings) => {
  const token = localStorage.getItem("Token");
  const booking = await axios.post(
    import.meta.env.VITE_API_URL_CREATE_BOOKING,
    bookings,
    {
      headers: {
        Authorization: `Bearer ${token} `,
      },
    }
  );

  console.log(booking.data)

  return booking.data;
};

export const guestBookings = async (status) => {
  const token = localStorage.getItem("Token");
  const booking = await axios.get(
    `${import.meta.env.VITE_API_URL_GUEST_BOOKINGS}`,
    {
      headers: { Authorization: `Bearer ${token}` },
      params: { statusFilter: status },
    }
  );
  return booking.data.data[0].bookings;
};
