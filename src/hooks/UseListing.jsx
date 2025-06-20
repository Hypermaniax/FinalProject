import axios from "axios";
import { useContext, useEffect, useState } from "react";
import UseAddListing from "./UseAddListing";
import { AuthContext } from "../routes/AuthContext";

export default function UseListing() {
  const { user } = useContext(AuthContext);
  const [listingDashboard, setListingDashboard] = useState();
  const { res } = UseAddListing();

  useEffect(() => {
    (async () => {
      try {
        const req = await axios.get(
          `${import.meta.env.VITE_API_URL_LISTING_HOST}${user.id}`
        );
        setListingDashboard(req.data.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [res]);

  return { listingDashboard };
}