import { useContext } from "react";
import { AuthContext } from "../../store/AuthContext";

AuthContext;
export default function ProtectedRoute({ children, role }) {
  const { user, isExpired,setUser } = useContext(AuthContext);
  if (isExpired() === true) {
    localStorage.removeItem("Token");
    setUser('')
    return;
  }
  if (!user) return <>Need to 2Login First</>;

  if (user?.role !== role) return <>You Dont have an acces for this</>;

  return children;
}
