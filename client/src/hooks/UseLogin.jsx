import axios from "axios";
import { useEffect, useState } from "react";

export default function UseLogin() {
  const [formData, setFormData] = useState(null);
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!formData) return;
    (async () => {
      setLoading(true);
      try {
        const token = await axios.post("http://localhost:3000/login", formData);
        setResponse(token);
        localStorage.setItem("accessToken", token.data.token);
      } catch (error) {
        setResponse(error.response);
      } finally {
        setLoading(false);
      }
    })();
  }, [formData]);

  function handleClick({ userLogin, passwordLogin }) {
    setFormData({ userLogin, passwordLogin });
  }

  return { onsubmit: handleClick, loading, response };
}
