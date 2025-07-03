import axios from "axios";
import { useEffect, useState } from "react";
import { listingDetail } from "../../services/listing";

export default function UseListingDetail(id) {
  const [hotel, setHotel] = useState(null);
  const [booked, setbooked] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    const fetch = async () => {
      setLoading(true);
      try {
        const listing = await listingDetail(id);
        setHotel(listing.data[0]);
        setbooked(listing.booked.map((item) => new Date(item)));
      } catch (error) {
        setHotel(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, [id]);

  const formatted = new Intl.NumberFormat("id-ID", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(hotel?.price);

  return {
    hotel,
    loading,
    booked,
    formatted,
  };
}
