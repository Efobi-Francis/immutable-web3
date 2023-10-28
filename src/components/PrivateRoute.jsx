import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './AuthContext.jsx';

export const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);

  return !isAuthenticated ? children : <Navigate to="/login" replace />;
};
