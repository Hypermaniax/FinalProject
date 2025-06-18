import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../routes/AuthContext";
import { toast } from "react-toastify";

export default function UseLogin(role) {
  const [formData, setFormData] = useState(null);
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const { handleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const ridercerUrl =
    role === "Guest" ? "/bookings" : "/host/dashboard/dashboard-host";

  useEffect(() => {
    if (!formData) return;
    (async () => {
      setLoading(true);
      try {
        const token = await axios.post(
          import.meta.env.VITE_API_URL_LOGIN,
          formData
        );
        setResponse(token);
        localStorage.setItem("Token", JSON.stringify(token.data.user) || "");
        handleLogin();
        navigate(ridercerUrl);
      } catch (error) {
        setResponse(error.response);
      } finally {
        setLoading(false);
      }
    })();
  }, [formData]);

  useEffect(() => {
    const handleResponse = async () => {
      if (!response) return;
      if (response.status === 200) {
        toast.success(response?.data.message);
      } else {
        toast.error(response?.data.message);
      }
    };
    handleResponse();
  }, [response]);

  function handleClick({ field1, field2 }) {
    setFormData({ field1, field2 });
  }

  return { onsubmit: handleClick, loading };
}
