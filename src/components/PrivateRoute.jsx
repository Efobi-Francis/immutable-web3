import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './AuthContext.jsx';

export const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    return (
        children
    )
  }else{
    return(
        <Navigate to="/login" replace={true} />
    )
  }
};
