import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const savedLanguage = localStorage.getItem("language") || "en";

const resources = {
  en: {
    translation: {
      "Settings": "Settings",
      "Theme": "Theme",
      "Dark Mode": "Dark Mode",
      "Preferences": "Preferences",
      "Font Size": "Font Size",
      "Small": "Small",
      "Medium": "Medium",
      "Large": "Large",
      "Reduced Motion": "Reduced Motion",
      "Language": "Language",
      "Layout Density": "Layout Density",
      "Comfortable": "Comfortable",
      "Compact": "Compact",
      "Reset to Defaults": "Reset to Defaults",
      "My Blog": "My Blog",
      "By": "By"
    }
  },
  es: {
    translation: {
      "Settings": "Configuraciones",
      "Theme": "Tema",
      "Dark Mode": "Modo Oscuro",
      "Preferences": "Preferencias",
      "Font Size": "Tamaño de Fuente",
      "Small": "Pequeño",
      "Medium": "Medio",
      "Large": "Grande",
      "Reduced Motion": "Movimiento Reducido",
      "Language": "Idioma",
      "Layout Density": "Densidad de Diseño",
      "Comfortable": "Cómodo",
      "Compact": "Compacto",
      "Reset to Defaults": "Restablecer a los Valores Predeterminados",
      "My Blog": "Mi Blog",
      "By": "Por"
    }
  },
  fr: {
    translation: {
      "Settings": "Paramètres",
      "Theme": "Thème",
      "Dark Mode": "Mode Sombre",
      "Preferences": "Préférences",
      "Font Size": "Taille de Police",
      "Small": "Petit",
      "Medium": "Moyen",
      "Large": "Grand",
      "Reduced Motion": "Mouvement Réduit",
      "Language": "Langue",
      "Layout Density": "Densité de Mise en Page",
      "Comfortable": "Confortable",
      "Compact": "Compact",
      "Reset to Defaults": "Réinitialiser aux Valeurs par Défaut",
      "My Blog": "Mon Blog",
      "By": "Par"
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLanguage, // default language
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;