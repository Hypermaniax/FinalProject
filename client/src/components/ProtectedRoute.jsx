import axios from "axios";
import { useEffect, useState } from "react";

export default function ProtectedRoutes({ children }) {
  const [protect, setProtect] = useState();
  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    try {
      (async () => {
        console.log(token);
        const res = await axios.post(
          "http://localhost:3000/protect",
          {},
          { headers: { Authorization:  token } }
        );

        setProtect(res);
      })();
    } catch (error) {
      console.log(error);
    }
  }, []);
  // console.log(protect);
  if (!protect) return;

  return children;
}
