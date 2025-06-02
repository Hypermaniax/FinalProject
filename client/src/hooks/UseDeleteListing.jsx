import axios from "axios";
import { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function UseDeleteListing() {
  const [id, setId] = useState(null);

  useEffect(() => {
    const fetching = async () => {
      try {
        const res = await axios.post(
          "http://localhost:3000/new-listing",
          formData
        );
      } catch (err) {
        console.log(err);
      }
    };
  }, [id]);

  return { setId };
}
