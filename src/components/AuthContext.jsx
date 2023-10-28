import React, { createContext, useState } from 'react';
import { loginCallback, logoutCallback } from '../auth/ImmutableAuth.ts';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    // This is where you would typically make a request to your authentication API
    loginCallback()
    setIsAuthenticated(true);
  };

  const logout = () => {
    // This is where you would typically make a request to your authentication API
    logoutCallback();
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
