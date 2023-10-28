import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './AuthContext.jsx';

export const PrivateRoute = ( {children} ) => {
  const { isAuthenticated } = useContext(AuthContext);

  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    } else {
        return children
    }
  }, [isAuthenticated, navigate]);
};
