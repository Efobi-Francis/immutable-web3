import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './AuthContext.jsx';

export const PrivateRoute = ({ children }) => {
  const { user } = AuthContext()

  if (!user) {
    // user is not authenticated
    console.log(user)
    return <Navigate to="login" />;
    
  }
  return children;
};
