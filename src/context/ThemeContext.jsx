
import React, { useState, useEffect, createContext, useContext } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState({
    mode: 'light',
    primaryColor: '#007bff',
    fontSize: '16px',
  });

  useEffect(() => {
    document.documentElement.style.setProperty('--bs-primary', theme.primaryColor);
    document.documentElement.style.setProperty('--font-size', theme.fontSize);
  }, [theme]);
  

  const updateTheme = (newTheme) => {
    setTheme((prev) => ({ ...prev, ...newTheme }));
    document.documentElement.style.setProperty('--bs-primary', newTheme.primaryColor || '#007bff');
    document.documentElement.style.setProperty('--font-size', newTheme.fontSize || '16px');
  };

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
