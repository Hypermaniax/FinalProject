import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../ui/Loading";
import { ProtectContext } from "./Context";
import { useNavigate } from "react-router-dom";

export default function ProtectedRoutesProvider({ children,riderect,role }) {
  const [protect, setProtect] = useState();
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("accessToken");
  const navigate = useNavigate()

  useEffect(() => {
    try {
      (async () => {
        const res = await axios.post(
          "http://localhost:3000/dashboardHost",
          {},
          {  headers: { Authorization: token } }
        );

        setProtect(res.data);
      })();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);
  if (loading) return <Loading />;
  if (!protect) return navigate(riderect)

  return (
    <ProtectContext.Provider value={protect}>
      {children}
    </ProtectContext.Provider>
  );
}
