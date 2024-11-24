import PropTypes from "prop-types";
import { useState } from "react";

function ThemeErrorBoundary({ children }) {
    const [hasError, setHasError] = useState(false);
  
    if (hasError) {
      return (
        <div className="error-fallback">
          Theme system encountered an error. 
          <button onClick={() => window.location.reload()}>
            Reload Page
          </button>
        </div>
      );
    }
  
    try {
      return children;
    } catch (error) {
      setHasError(true);
      console.error('Theme Error:', error);
      return null;
    }
  }

  ThemeErrorBoundary.propType = {
    children: PropTypes.node.isRequired,
  };

  export { ThemeErrorBoundary };