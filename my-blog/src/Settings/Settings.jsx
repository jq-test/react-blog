// Allow users to change theme, font size, language, and other preference.
// Update settings in real-tmie
// Provide reset button to revert to default settings.

// import { useTheme } from '../../contexts/ThemeContext';
// import { usePreferences } from '../../contexts/PreferencesContext';
import { useTheme } from '../hooks/useTheme';
import { usePreferences } from '../contexts/PreferencesContext';
import './Settings.css';

function Settings() {
  const { theme, toggleTheme } = useTheme();
  const { preferences, updatePreference, resetPreferences } = usePreferences();

  return (
    <div className="settings">
      <h2>Settings</h2>
      
      <section className="settings-section">
        <h3>Theme</h3>
        <label className="setting-item">
          <span className="setting-name">Dark Mode</span>
          <input
            type="checkbox"
            checked={theme === 'dark'}
            onChange={toggleTheme}
            title={theme === 'dark' ? "Dark Mode" : "Light Mode"}
          />
        </label>
      </section>

      <section className="settings-section">
        <h3>Preferences</h3>
        
        <label className="setting-item">
          <span className="setting-name">Font Size</span>
          <select
            value={preferences.fontSize}
            onChange={e => updatePreference('fontSize', e.target.value)}
          >
            <option value="small">Small</option>
            <option value="base">Medium</option>
            <option value="large">Large</option>
          </select>
        </label>
        <br></br>

        <label className="setting-item">
          <span className="setting-name">Reduced Motion</span>
          <input
            type="checkbox"
            checked={preferences.reducedMotion}
            onChange={e => updatePreference('reducedMotion', e.target.checked)}
          />
        </label>
        <br></br>

        <label className="setting-item">
          <span className="setting-name">Language</span>
          <select
            value={preferences.language}
            onChange={e => updatePreference('language', e.target.value)}
          >
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
          </select>
        </label>
        <br></br>

        <label className="setting-item">
          <span className="setting-name">Layout Density</span>
          <select
            value={preferences.layoutDensity}
            onChange={e => updatePreference('layoutDensity', e.target.value)}
          >
            <option value="comfortable">Comfortable</option>
            <option value="compact">Compact</option>
          </select>
        </label>
        <br></br>
      </section>

      <button 
        onClick={resetPreferences}
        className="reset-button"
      >
        Reset to Defaults
      </button>
    </div>
  );
}

export default Settings;