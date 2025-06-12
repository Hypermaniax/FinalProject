import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function UseRegister(role) {
  const [formData, setFormData] = useState(undefined);
  const [response, setResponse] = useState(undefined);
  const [loading, setLoading] = useState(false);

  const url =
    role === "guest"
      ? "http://localhost:3000/regist-guest"
      : "http://localhost:3000/regist-host";

  useEffect(() => {
    if (!formData) return;
    (async () => {
      try {
        setLoading(true);
        const post = await axios.post(url, formData);
        setLoading(false);
        setResponse(post);
      } catch (error) {
        setResponse(error.response.data);
        setLoading(false);
      }
    })();
  }, [formData]);
  // console.log(response);
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

  function handleCick({ fullNameref, usernameRef, emailRef, passwordRef }) {
    if (
      fullNameref === "" ||
      usernameRef === "" ||
      emailRef === "" ||
      passwordRef === ""
    ) {
      setResponse({ data: "All fields must be filled" });
      return;
    }

    if (usernameRef.length < 5 || passwordRef < 5) {
      setResponse({
        data: "Username and password must be at least 5 characters",
      });
      return;
    }

    setFormData({
      name: fullNameref,
      userName: usernameRef,
      email: emailRef,
      password: passwordRef,
    });
  }

  return {
    onSubmit: handleCick,
    response,
    loading,
  };
}
