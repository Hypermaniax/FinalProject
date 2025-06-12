import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext({
  setToken: () => {},
  refreshUser: () => {},
});

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(() => localStorage.getItem("accessToken"));
  console.log(user);
  
  useEffect(() => {
    const syncToken = () => {
      const getToken = localStorage.getItem("accessToken");
      setToken(getToken);
    };

    window.addEventListener("storage", syncToken);
    return () => window.removeEventListener("storage", syncToken);
  }, []);

  const fetchUser = async () => {
    if (!token) return;
    try {
      const res = await axios.post("http://localhost:3000/user", { token });
      const validation = localStorage.getItem("validation");

      // Combine the server user data with local "validation"
      setUser({ ...res.data, validation });
    } catch (err) {
      if (err.response?.status === 403) {
        localStorage.removeItem("accessToken");
        setToken(null);
        setUser(null);
      }
    }
  };
  useEffect(() => {
    fetchUser();
  }, [token]);

  return (
    <AuthContext.Provider
      value={{ user, setUser, setToken, token, refreshUser: fetchUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}
