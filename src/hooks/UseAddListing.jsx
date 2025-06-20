import axios from "axios";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../routes/AuthContext";
import { useNavigate } from "react-router-dom";

export default function UseAddListing(handleClose) {
  const [addListing, setAddListing] = useState(null);
  const [loading, setLoading] = useState(false);
  const [res, setRes] = useState();

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!addListing) return;
    const uploadListing = async () => {
      const formData = new FormData();

      formData.append("form", JSON.stringify({ ...addListing }));
      formData.append("host", user.id);
      addListing.imgUrl.forEach((file, index) => {
        formData.append("listingImg", file);
      });

      try {
        setLoading(true);
        const res = await axios.post(
          import.meta.env.VITE_API_URL_LISTING_CREATE,
          formData
        );
        setRes(res);
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
