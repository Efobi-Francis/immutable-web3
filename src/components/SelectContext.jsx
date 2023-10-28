import React, { createContext, useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { TOGGLE_TYPES } from '../commons/data/button.jsx';

// Create a new context
const SelectContext = createContext();


export default function SelectProvider({ children }) {
  const [choice, setChoice] = useState(localStorage.getItem('userChoice') || null) // Store user's choice in localStorage
  
  localStorage.setItem('userChoice', choice)
  const navigate = useNavigate()

  const handleUserChoice = (choice) => {
    setChoice(choice)
    navigate(`/play`)
  };

  return (
    <SelectContext.Provider value={{ choice, handleUserChoice }}>
      {children}
    </SelectContext.Provider>
  )
}

export function useSelect() {
  return useContext(SelectContext);
}

