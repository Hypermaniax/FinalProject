import { useContext, useEffect } from "react";
import { useState } from "react";
import { listingAdd } from "../../services/listing";
import { AuthContext } from "../../store/AuthContext";
export default function UseAddListing(handleClose) {
  const [addListing, setAddListing] = useState(null);
  const [loading, setLoading] = useState(false);
  const [res, setRes] = useState();

  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!addListing) return;
    const uploadListing = async () => {
      try {
        setLoading(true);
        const listing = await listingAdd(addListing);
        setRes(listing);
        handleClose();
      } catch (error) {
        setRes("Upload error:", error);
      } finally {
        setLoading(false);
      }
    };
    uploadListing();
  }, [addListing]);

  return { setAddListing, res, loading };
}
