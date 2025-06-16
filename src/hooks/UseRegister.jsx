import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function UseRegister(role) {
  const [formData, setFormData] = useState(undefined);
  const [response, setResponse] = useState(undefined);
  const [loading, setLoading] = useState(false);

  const url =
    role === "guest"
      ? "http://localhost:3000/api/v1/auth/register/guest"
      : "http://localhost:3000/api/v1/auth/register/host";
  useEffect(() => {
    if (!formData) return;
    (async () => {
      try {
        setLoading(true);
        const req = await axios.post(url, formData);
        setResponse(req);
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
  console.log(formData);

  function handleCick({ name, username, email, password, confirmPassword }) {
    setFormData({
      name,
      username,
      email,
      password,
      confirmPassword,
    });
  }

  return {
    onSubmit: handleCick,
    response,
    loading,
  };
}
