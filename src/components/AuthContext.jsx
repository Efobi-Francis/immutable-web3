import React, { createContext, useContext, useState } from 'react';
import { getUserInfo, logoutCallback } from '../auth/ImmutableAuth.ts';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const loginUser = (status) => {
    // This is where you would typically make a request to your authentication API
    setIsAuthenticated(status)
    console.log(status)
   
  };

  console.log(isAuthenticated)

  const logout = () => {
    // This is where you would typically make a request to your authentication API
    logoutCallback();
    setIsAuthenticated(false);
  };

  
  return (
    <AuthContext.Provider value={{ isAuthenticated, loginUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  return useContext(AuthContext)
}
