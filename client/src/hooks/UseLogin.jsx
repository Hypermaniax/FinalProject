import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function UseLogin() {
  const [formData, setFormData] = useState(null);
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [url,setUrl]=useState()
  const nav = useNavigate()
  useEffect(() => {
    if (!formData) return;
    (async () => {
      setLoading(true);
      try {
        const token = await axios.post(
          "http://localhost:3000/login-guest",
          formData
        );
        setResponse(token);
        
        localStorage.setItem("accessToken", JSON.stringify(token.data.result.token));
        nav('/bookings')
      } catch (error) {        
        setResponse(error.response);
      } finally {
        setLoading(false);
      }
    })();
  }, [formData]);

  
  function handleClick({ username, password }) {
    setFormData({ username, password });
  }

  return { onsubmit: handleClick, loading, response };
}
