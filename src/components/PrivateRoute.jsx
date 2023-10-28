import { Navigate, useLocation } from "react-router-dom";
import { login } from "../auth/ImmutableAuth.ts";

export const PrivateRoute = ({ children }) => {
  const location = useLocation();

  if (!login) {
    // user is not authenticated
    return (
      <Navigate
        to="login"
        state={{ from: location }}
      />
    );
  } 

  return children;
};
