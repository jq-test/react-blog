// User Preference Context
// Set default preference and saves user preferences to local storage
// Provide a way to update and reset preference.

import { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const PreferencesContext = createContext();

const defaultPreferences = {
  fontSize: 'base',
  reducedMotion: false,
  language: 'en',
  layoutDensity: 'comfortable',
};

// Save, update, reset user preference to localStorage 
export function PreferencesProvider({ children }) {
  const [preferences, setPreferences] = useState(() => {
    const saved = localStorage.getItem('blog_preferences');
    return saved ? JSON.parse(saved) : defaultPreferences;
  });

  useEffect(() => {
    localStorage.setItem('blog_preferences', JSON.stringify(preferences));
  }, [preferences]);

  const updatePreference = (key, value) => {
    setPreferences(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const resetPreferences = () => {
    setPreferences(defaultPreferences);
  };

  return (
    <PreferencesContext.Provider 
      value={{ 
        preferences, 
        updatePreference, 
        resetPreferences 
      }}
    >
      {children}
    </PreferencesContext.Provider>
  );
}

PreferencesProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export const usePreferences = () => {
  const context = useContext(PreferencesContext);
  if (!context) {
    throw new Error('usePreferences must be used within a PreferencesProvider');
  }
  return context;
};