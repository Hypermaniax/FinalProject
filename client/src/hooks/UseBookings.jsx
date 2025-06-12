import axios from "axios";
import { useCallback, useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../routes/AuthContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function UseBookings() {
  const [bookings, setBookings] = useState();
  const { refreshUser } = useContext(AuthContext);
  const navigate = useNavigate()
  
  function longDays() {
    const current = new Date(checkIn);
    const last = new Date(checkOut);

    const time = last - current;
    const daysDiff = time / (1000 * 60 * 60 * 24);

    return daysDiff;
  }

  useEffect(() => {
    if (!bookings) return;
    const fetch = async () => {
      try {
        const req = await axios.post("http://localhost:3000/create-bookings", bookings);
        refreshUser();
        toast.success(req.data.message)
        return navigate('/payment-bookings')
      } catch (error) {}
    };
    fetch();
  }, [bookings]);

  const handleSubmit = useCallback((data) => {
    if (!data) return;
    if (!data?.checkIn || !data?.checkOut) return toast.error('you must input the Check in and Check Out Date') ;
    if (!data?.guestId) return toast.error('Login Required');

    setBookings(data);
  }, []);

  return {
    handleSubmit,
  };
}
