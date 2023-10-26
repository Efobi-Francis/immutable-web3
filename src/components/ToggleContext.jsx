import React, { createContext, useContext, useState } from "react";

const ToggleContext = createContext();

export function ToggleProvider({ children }) {
  const [currentMode, setCurrentMode] = useState(null);
  
  const toggleMode = (mode) => {
    setCurrentMode(mode)
  };

  return (
    <ToggleContext.Provider value={{ currentMode, toggleMode }}>
      {children}
    </ToggleContext.Provider>
  );
}

export function useToggle() {
  return useContext(ToggleContext);
}
