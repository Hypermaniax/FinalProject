import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export default function UseAddListing() {
  const [addListing, setAddListing] = useState(null);
  const [res, setRes] = useState();

  useEffect(() => {
    if (!addListing) return;
    const uploadListing = async () => {
      const formData = new FormData();
      formData.append("photo", addListing.photo);
      formData.append("id", addListing.id);
      formData.append("facilities", addListing.selectedFacilities);
      formData.append("province", addListing.selectedProvince);
      formData.append("city", addListing.selectedCity);
      formData.append("category", addListing.category);
      formData.append("title", addListing.title);
      formData.append("capacity", addListing.capacity);
      formData.append("price", addListing.price);
      formData.append("description", addListing.description);
      try {
        const res = await axios.post(
          "http://localhost:3000/new-listing",
          formData
        );
        setRes(res);
        console.log(res);
      } catch (error) {
        console.error("Upload error:", error);
      }
    };

    uploadListing();
  }, [addListing]);

  return { setAddListing };
}
