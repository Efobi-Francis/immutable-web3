import { Navigate, useLocation } from "react-router-dom";
import { login, loginCallback } from "../auth/ImmutableAuth.ts";

export const PrivateRoute = ({ children }) => {
  const location = useLocation();

  if (login) {
    // user is not authenticated
    return (
      <Navigate
        to="/select"
        state={{ from: location }}
      />
    );
  } else {
    return (
        <Navigate
        to="/"
        state={{ from: location }}
      />
    )
  }

  return children;
};
