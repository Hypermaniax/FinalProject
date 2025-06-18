import axios from "axios";
import { useEffect, useState } from "react";

export default function UseListingDetail(id) {
  const [hotel, setHotel] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    const fetch = async () => {
      setLoading(true);
      try {
        const req = await axios.get(
          `${import.meta.env.VITE_API_URL_LOGIN}${id}`
        );
        setHotel(req.data.result);
      } catch (error) {
        setHotel(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, [id]);

  function getExcludedDates(ranges) {
    const excluded = [];
    if (!ranges) return [];
    ranges.forEach(([start, end]) => {
      const current = new Date(start);
      const last = new Date(end);

      while (current <= last) {
        excluded.push(new Date(current));
        current.setDate(current.getDate() + 1);
      }
    });
    return excluded;
  }

  const exlucdeCheckIn = getExcludedDates(
    hotel?.bookings.map((book) => [book.checkIn, book.checkOut])
  );

  return {
    hotel,
    loading,
    exlucdeCheckIn,
  };
}
