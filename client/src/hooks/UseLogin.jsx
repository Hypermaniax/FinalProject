import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../routes/AuthContext";
import { toast } from "react-toastify";

export default function UseLogin(role) {
  const [formData, setFormData] = useState(null);
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const url =
    role === "guest"
      ? "http://localhost:3000/login-guest"
      : "http://localhost:3000/login-host";

  const ridercerUrl =
    role === "guest" ? "/bookings" : "/host/dashboard/dashboard-host";

  useEffect(() => {
    if (!formData) return;
    (async () => {
      setLoading(true);
      try {
        const token = await axios.post(url, formData);
        setResponse(token);
        localStorage.setItem(
          "accessToken",
          JSON.stringify(token.data.result.token)
        );
        localStorage.setItem("validation", role);
        navigate(ridercerUrl);
      } catch (error) {
        setResponse(error.response);
      } finally {
        setLoading(false);
      }
    })();
  }, [formData]);

  const { setToken } = useContext(AuthContext);

  useEffect(() => {
    const handleResponse = async () => {
      if (!response) return;
      if (response.status === 200) {
        toast.success(response?.data.message);
        setToken(JSON.stringify(response?.data.result.token));
      } else {
        toast.error(response?.data.message);
      }
    };
    handleResponse();
  }, [response]);

  function handleClick({ username, password }) {
    setFormData({ username, password });
  }

  return { onsubmit: handleClick, loading, response };
}
