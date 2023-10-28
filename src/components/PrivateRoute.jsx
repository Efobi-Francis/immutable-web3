import { Navigate, useLocation } from "react-router-dom";
import { login } from "../auth/ImmutableAuth.ts";

export const PrivateRoute = ({ children }) => {
  const location = useLocation();

  if (!login) {
    // user is not authenticated
    return (
      <Navigate
        to="/"
        state={{ from: location }}
      />
    );
  } else {
    <Navigate to="select" state={{ from: location }}/>
  }

  return children;
};
