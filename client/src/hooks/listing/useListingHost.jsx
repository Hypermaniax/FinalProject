import { useContext, useEffect, useState } from "react";
import UseAddListing from "./UseAddListing";
import { listingHostByid } from "../../services/listing";
import { AuthContext } from "../../store/AuthContext";

export default function useListingHost() {
  const { user } = useContext(AuthContext);
  const [listingDashboard, setListingDashboard] = useState();
  const { res } = UseAddListing();
  console.log(listingDashboard);
  
  useEffect(() => {
    (async () => {
      try {
        const listing = await listingHostByid(user.id);
        setListingDashboard(listing);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [res]);

  return { listingDashboard };
}
