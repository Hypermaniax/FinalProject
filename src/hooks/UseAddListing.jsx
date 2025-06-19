import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export default function UseAddListing() {
  const [addListing, setAddListing] = useState(null);
  const [res, setRes] = useState();
  // console.log(addListing);

  useEffect(() => {
    if (!addListing) return;
    const uploadListing = async () => {
      const formData = new FormData();
      addListing.listingImg.forEach((file) => {
        formData.append("listingImg", file);
      });
      formData.append("id", addListing.id);
      formData.append("facilities", addListing.selectedFacilities);
      formData.append(
        "location",
        JSON.stringify({
          province: addListing.selectedProvince,
          city: addListing.selectedCity,
        })
      );
      formData.append(
        "rules",
        JSON.stringify({
          checkIn: "",
        })
      );
      formData.append("category", addListing.category);
      formData.append("title", addListing.title);
      formData.append("capacity", addListing.capacity);
      formData.append("price", addListing.price);
      formData.append("description", addListing.description);
      try {
        const res = await axios.post(
          import.meta.env.VITE_API_URL_LISTING_CREATE,
          formData
        );
        setRes(res);
      } catch (error) {
        console.error("Upload error:", error);
      }
    };

    uploadListing();
  }, [addListing]);

  return { setAddListing };
}
