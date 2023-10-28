import { Outlet, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './AuthContext.jsx';

export const PrivateRoute = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return(
    isAuthenticated ? <Outlet/> : <Navigate to='/login' replace/>
  )
  
};
