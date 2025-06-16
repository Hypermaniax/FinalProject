import { useContext } from "react";
import { AuthContext } from "./AuthContext";

export default function ProtectedRoute({ children, role }) {
  const { user } = useContext(AuthContext);
  
  if (!user) return <>Need to Login First</>;
  if (user?.validation !== role) return <>You Dont have an acces for this</>;

  return children;
}
