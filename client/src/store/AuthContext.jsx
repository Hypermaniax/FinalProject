import { useCallback, useState } from "react";
import { createContext } from "react";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext({
  setUser: () => {},
  handleLogout: () => {},
  handleLogin: () => {},
});

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(
    localStorage.getItem("Token")
      ? jwtDecode(localStorage.getItem("Token"))
      : ""
  );
  
  function isExpired () {
    const currentTime = Date.now() / 1000;
    return user.exp < currentTime
  }

  const handleLogin = useCallback(() => {
    setUser(
      localStorage.getItem("Token")
        ? jwtDecode(localStorage.getItem("Token"))
        : ""
    );
  }, []);

  const handleLogout = useCallback(() => {
    localStorage.removeItem("Token");
    setUser("");
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, handleLogin, handleLogout,isExpired }}>
      {children}
    </AuthContext.Provider>
  );
}
