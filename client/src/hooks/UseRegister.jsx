import axios from "axios";
import { useEffect, useState } from "react";

export default function UseRegister(regist) {
  const [formData, setFormData] = useState(undefined);
  const [response, setResponse] = useState(undefined);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!formData) return;
    (async () => {
      try {
        setLoading(true);
        const post = await axios.post(regist, formData);
        setLoading(false);
        setResponse(post);
      } catch (error) {
        setResponse(error.response.data);
        setLoading(false);
      }
    })();
  }, [formData]);

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
