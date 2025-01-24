import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function ProtectedRoutes({ children }) {
  const { user } = useContext(UserContext);
  if (!user) {
    return <Navigate to="/loginpage" />;
  }
  return <>{children}</>;
}

export default ProtectedRoutes;
