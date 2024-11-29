import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "./contexts/ThemeProvider.jsx";
import { ThemeErrorBoundary } from "./contexts/ThemeErrorBoundary.jsx";
import { PreferencesProvider } from "./contexts/PreferencesContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeErrorBoundary>
      <ThemeProvider>
        <PreferencesProvider>
          <App />
        </PreferencesProvider>
      </ThemeProvider>
    </ThemeErrorBoundary>
  </StrictMode>
);
