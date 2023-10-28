import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './AuthContext.jsx';

export const PrivateRoute = ( {children} ) => {
  const { isAuthenticated } = useContext(AuthContext);

  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) {
      return children
    } else {
        return navigate('/login');
    }
  }, [isAuthenticated, navigate]);
};
