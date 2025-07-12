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
  return booking.data;
};

export const updateBookingDate = async (id,bookings) => {
  const token = localStorage.getItem("Token");

  const booking = await axios.patch(
    `${import.meta.env.VITE_API_URL_SELECTED_BOOKING}/${id}`,
    bookings,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  return booking.data.message;
};

export const removeBooking = async (id) => {
  const token = localStorage.getItem("Token");

  const booking = await axios.delete(
    `${import.meta.env.VITE_API_URL_SELECTED_BOOKING}/${id}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  return booking;
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
