// Theming a systematic consistent design across app. 
// Theme Object 

import { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { themes } from "../data/themes"
import { useTheme as useThemeHook } from "../hooks/useTheme"

const ThemeContext = createContext(); //Create context

// Create ThemeProvider component to manage state and store in local storage. 
export function ThemeProvider({ children }) { 
    const { theme, toggleTheme, setTheme, isDark } = useThemeHook();

  // Update document root with theme variables.
  useEffect(() => {
    const root = document.documentElement;
    const themeObj = themes[theme];

    // Apply theme variables to CSS
    Object.entries(themeObj.colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });

    localStorage.setItem('blog_theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider 
        value={{ theme, toggleTheme, setTheme, isDark, themes: themes[theme] }}>
      {children}
    </ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};