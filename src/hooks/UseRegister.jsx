import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function UseRegister(role) {
  const [formData, setFormData] = useState(undefined);
  const [response, setResponse] = useState(undefined);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!formData) return;
    (async () => {
      try {
        setLoading(true);
        const req = await axios.post(import.meta.env.VITE_API_URL_REGISTER, formData);
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
      if (response.status === 201) {
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
      role
    });
  }

  return {
    onSubmit: handleCick,
    response,
    loading,
  };
}
