import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function PublicRoutes({ children }) {
  const { user } = useContext(UserContext);

  if (user) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
}

export default PublicRoutes;
