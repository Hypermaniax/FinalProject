import { useCallback, useEffect } from "react";
import { useState } from "react";
import { guestBookings } from "../../services/bookings";
import { removeListingGuest } from "../../services/listing";
import { toast } from "react-toastify";

export default function UseGetGuestBookings() {
  const [status, setStatus] = useState("pending");
  const [booking, setBooking] = useState();

  const bookings = useCallback(async () => {
    try {
      const req = await guestBookings(status);
      setBooking(req);
    } catch (error) {}
  }, [status]);

  const handleRemoveListing = useCallback(
    async (id) => {
      try {
        console.log();
        const req = await removeListingGuest(id);
        toast.success(req.data.message)
        bookings();
      } catch (error) {}
    },
    [bookings]
  );

  const handleSelectStatus = useCallback((currentStatus) => {
    setStatus(currentStatus);
  }, []);

  useEffect(() => {
    bookings();
  }, [status, bookings]);

  return { booking, handleSelectStatus, status, handleRemoveListing };
}
