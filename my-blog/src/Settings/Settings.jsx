// Allow users to change theme, font size, language, and other preference.
// Update settings in real-tmie
// Provide reset button to revert to default settings.

// import { useTheme } from '../../contexts/ThemeContext';
// import { usePreferences } from '../../contexts/PreferencesContext';
import { useTheme } from '../hooks/useTheme';
import { usePreferences } from '../contexts/PreferencesContext';
import { useTranslation } from "react-i18next";
import { useEffect } from 'react';
import './Settings.css';

function Settings() {
  const { theme, toggleTheme } = useTheme();
  const { preferences, updatePreference, resetPreferences } = usePreferences();
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (e) => {
    const newLanguage = e.target.value;
    updatePreference("language", newLanguage);
    i18n.changeLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  useEffect (() => {
    i18n.changeLanguage(preferences.language);
  }, [preferences.language, i18n])
  const languages = [
    { value: "en", label: t("English") },
    { value: "es", label: t("Español") },
    { value: "fr", label: t("Français") },
  ];

  return (
    <div className="settings">
      <h2>{t("Settings")}</h2>

      {/* <section className="settings-section">
        <h3>{t("Theme")}</h3>
        <label className="setting-item">
          <span className="setting-name">{t("Dark Mode")}</span>
          <input
            type="checkbox"
            checked={theme === "dark"}
            onChange={toggleTheme}
          />
        </label>
      </section> */}

      <section className="settings-section">
        <h3>{t("Preferences")}</h3>

        <label className="setting-item">
          <span className="setting-name">{t("Font Size")}</span>
          <select
            value={preferences.fontSize}
            onChange={(e) => updatePreference("fontSize", e.target.value)}
          >
            <option value="small">{t("Small")}</option>
            <option value="base">{t("Medium")}</option>
            <option value="large">{t("Large")}</option>
          </select>
        </label>
        <br></br>

        <label className="setting-item">
          <span className="setting-name">{t("Reduced Motion")}</span>
          <input
            type="checkbox"
            checked={preferences.reducedMotion}
            onChange={(e) =>
              updatePreference("reducedMotion", e.target.checked)
            }
          />
        </label>
        <br></br>

        {/* <label className="setting-item">
          <span className="setting-name">{t("Language")}</span>
          <select value={preferences.language} onChange={handleLanguageChange}>
            <option value="en">{t("English")}</option>
            <option value="es">{t("Español")}</option>
            <option value="fr">{t("Français")}</option>
          </select>
        </label>
        <br></br> */}
        <label className="setting-item">
          <span className="setting-name">{t("Language")}</span>
          <select value={preferences.language} onChange={handleLanguageChange}>
            {languages.map((lang) => (
              <option key={lang.value} value={lang.value}>
                {lang.label}
              </option>
            ))}
          </select>
        </label>
        <br></br>

        <label className="setting-item">
          <span className="setting-name">{t("Layout Density")}</span>
          <select
            value={preferences.layoutDensity}
            onChange={(e) => updatePreference("layoutDensity", e.target.value)}
          >
            <option value="comfortable">{t("Comfortable")}</option>
            <option value="compact">{t("Compact")}</option>
          </select>
        </label>
        <br></br>
      </section>

      <button onClick={resetPreferences} className="reset-button">
        {t("Reset to Defaults")}
      </button>
    </div>
  );
}

export default Settings;