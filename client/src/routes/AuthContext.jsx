import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext({ setToken: () => {} });

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(() => localStorage.getItem("accessToken"));

  useEffect(() => {
    const syncToken = () => {
      const getToken = localStorage.getItem("accessToken");
      setToken(getToken);
    };

    window.addEventListener("storage", syncToken);
    return () => window.removeEventListener("storage", syncToken);
  }, []);

  useEffect(() => {
    if (!token) return;

    const fetchUser = async () => {
      try {
        const res = await axios.post("http://localhost:3000/user", { token });
        setUser(res.data);
      } catch (err) {
        if (err.response?.status === 403) {
          localStorage.removeItem("accessToken");
          setToken(null);
          setUser(null);
        }
      }
    };
    fetchUser();
  }, [token]);

  return (
    <AuthContext.Provider value={{ user, setUser, setToken, token }}>
      {children}
    </AuthContext.Provider>
  );
}
