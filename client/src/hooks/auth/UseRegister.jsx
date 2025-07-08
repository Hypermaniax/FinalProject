import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { register } from "../../services/auth";
export default function UseRegister(role) {
  const [formData, setFormData] = useState(undefined);
  const [response, setResponse] = useState(undefined);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!formData) return;
    (async () => {
      try {
        setLoading(true);
        const user = await register(formData);
        setResponse(user);
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

  function handleCick({
    name,
    username,
    email,
    password,
    confirmPassword,
    phone,
  }) {
    setFormData({
      name,
      username,
      email,
      password,
      confirmPassword,
      role,
      phone,
    });
  }

  return {
    onSubmit: handleCick,
    response,
    loading,
  };
}
