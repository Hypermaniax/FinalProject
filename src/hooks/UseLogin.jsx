import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../routes/AuthContext";
import { toast } from "react-toastify";

export default function UseLogin(role) {
  const [formData, setFormData] = useState(null);
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const { setToken } = useContext(AuthContext);

  const navigate = useNavigate();
  const url =
    role === "guest"
      ? "http://localhost:3000/api/v1/auth/login/guest"
      : "http://localhost:3000/api/v1/auth/login/host";

  const ridercerUrl =
    role === "guest" ? "/bookings" : "/host/dashboard/dashboard-host";

  useEffect(() => {
    if (!formData) return;
    (async () => {
      setLoading(true);
      try {
        const token = await axios.post(url, formData);
        console.log(token)
        setResponse(token);

        localStorage.setItem("accessToken", JSON.stringify(token.data.token));

        localStorage.setItem("validation", role);
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
        setToken(JSON.stringify(response?.data.token));
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
