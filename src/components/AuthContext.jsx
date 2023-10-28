import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginCallback, logoutCallback } from '../auth/ImmutableAuth.ts';
import { useLocalStorage } from './useLocalStorage.js';


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage('user', null)

  const navigate = useNavigate();

  const login = (data) => {
    // This is where you would typically make a request to your authentication API
    setUser(data)
    navigate('/')
    console.log(data)
  };

  const logout = () => {
    // This is where you would typically make a request to your authentication API
    setUser(null);
    navigate("login", { replace: true });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
