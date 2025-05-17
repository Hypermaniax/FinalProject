import axios from "axios";
import { useEffect, useState } from "react";

export default function UseListing() {
  const [listingDashboard, setListingDashboard] = useState();

  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    (async () => {
      try {
        const req = await axios.post(
          "http://localhost:3000/listing-host",
          {token}
        );
        setListingDashboard(req.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return { listingDashboard };
}
