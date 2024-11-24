import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "./contexts/ThemeProvider.jsx";
import { ThemeErrorBoundary } from "./contexts/ThemeErrorBoundary.jsx";

createRoot(document.getElementById("root")).render(
  <ThemeErrorBoundary>
    <ThemeProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </ThemeProvider>
  </ThemeErrorBoundary>
);
