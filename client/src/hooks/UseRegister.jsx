import axios from "axios";
import { useEffect, useState } from "react";

export default function UseRegister() {
  const [formData, setFormData] = useState(undefined);
  const [response, setResponse] = useState(undefined);

  useEffect(() => {
    if (!formData) return;
    (async () => {
      try {
        const response = await axios.post(
          "http://localhost:3000/register",
          formData
        );
        setResponse(response.data);
      } catch (error) {
        setResponse(error.response.data);
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
      setResponse("All fields must be filled");
      return;
    }

    if (usernameRef.length < 5 || passwordRef < 5) {
      setResponse("Username and password must be at least 5 characters");
      return;
    }

    setFormData({
      fullName: fullNameref,
      userName: usernameRef,
      email: emailRef,
      password: passwordRef,
    });
  }

  return {
    onSubmit: handleCick,
    response,
  };
}
