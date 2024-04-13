// src/AuthContext.js
import React, { createContext, useState } from 'react';

import Cookies from "js-cookie"

const AppContext = createContext();

const AuthProvider = ({ children }) => {
  const isTokenAvail = Cookies.get("token")
  const isAdmin = Cookies.get("role")

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [tokens, setTokens] = useState(isTokenAvail);
  const [role, setRole] = useState(isAdmin);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  
  };

  return (
    <AppContext.Provider value={{ isLoggedIn,
     login,
      logout
      ,tokens, setTokens,
      role, setRole
       }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AuthProvider };
