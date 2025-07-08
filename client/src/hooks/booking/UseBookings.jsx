import { useCallback, useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { createBookings } from "../../services/bookings";

export default function UseBookings() {
  const [bookings, setBookings] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (!bookings) return;
    const fetch = async () => {
      try {
        const booking = await createBookings(bookings);
        toast.success(booking.message);
        return navigate(`../request-to-book/${booking.id}`);
      } catch (error) {
        toast.success(error);
      }
    };
    fetch();
  }, [bookings]);

  const handleSubmit = useCallback((data) => {
    if (!data) return;
    if (!data?.checkIn || !data?.checkOut)
      return toast.error("you must input the Check in and Check Out Date");

    setBookings(data);
  }, []);

  return {
    handleSubmit,
  };
}
