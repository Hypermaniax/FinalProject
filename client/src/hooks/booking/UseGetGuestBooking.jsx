import { useCallback, useEffect } from "react";
import { useState } from "react";
import { guestBookings } from "../../services/bookings";

export default function UseGetGuestBookings() {
  const [status, setStatus] = useState('pending');
  const [booking, setBooking] = useState();

  useEffect(() => {
    const bookings = async () => {
      try {
        const req = await guestBookings(status);
        setBooking(req);
      } catch (error) {}
    };
    bookings();
  }, [status]);

  const handleSelectStatus = useCallback((currentStatus)=>{
    setStatus(currentStatus)
  },[])

  return { booking,handleSelectStatus,status };
}
