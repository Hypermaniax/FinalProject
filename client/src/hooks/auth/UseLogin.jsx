import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { login } from "../../services/auth";
import { AuthContext } from "../../store/AuthContext";

export default function UseLogin(role) {
  const [formData, setFormData] = useState(null);
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const { handleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const ridercerUrl =
    role === "guest" ? "/bookings" : "/host/dashboard/dashboard-host";

  useEffect(() => {
    if (!formData) return;
    (async () => {
      setLoading(true);
      try {
        const user = await login(formData);
        setResponse(user.message);
        console.log(user);

        localStorage.setItem("Token", user.token || "");
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
        toast.success(response?.message);
      } else {
        toast.error(response?.message);
      }
    };
    handleResponse();
  }, [response]);

  function handleClick({ field1, field2 }) {
    setFormData({ field1, field2 });
  }

  return { onsubmit: handleClick, loading };
}
