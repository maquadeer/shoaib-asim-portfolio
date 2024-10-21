// src/app/ThemeContext.js
import React, { createContext, useContext, useState } from 'react';

// Create a ThemeContext
const ThemeContext = createContext();

// Create a custom hook to use the ThemeContext
export const useTheme = () => {
  return useContext(ThemeContext);
};

// Create a ThemeProvider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // Default theme

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
