import { useContext } from "react";
import { AuthContext } from "./AuthContext";

export default function ProtectedRoute({ children, role }) {
  const { user } = useContext(AuthContext);  
  
  if (!user) return <>Need to 2Login First</>;
  if (user?.role !== role) return <>You Dont have an acces for this</>;

  return children;
}
