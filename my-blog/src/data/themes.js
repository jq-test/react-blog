export const themes = {
    light: {
      colors: {
        primary: '#2563eb',
        background: '#ffffff',
        text: '#1f2937',
        border: '#e5e7eb',
        accent: '#3b82f6',
        error: '#ef4444',
        success: '#22c55e'
      },
      typography: {
        fontFamily: "'Inter', sans-serif",
        fontSize: {
          small: '0.875rem',
          base: '1rem',
          large: '1.125rem',
          h1: '2rem',
          h2: '1.5rem',
          h3: '1.25rem'
        },
        fontWeight: {
          normal: 400,
          medium: 500,
          bold: 700
        }
      },
      spacing: {
        small: '0.5rem',
        base: '1rem',
        large: '1.5rem',
        xlarge: '2rem'
      },
      borderRadius: {
        small: '0.25rem',
        base: '0.375rem',
        large: '0.5rem',
        full: '9999px'
      }
    },
    dark: {
      colors: {
        primary: '#3b82f6',
        background: '#1f2937',
        text: '#f3f4f6',
        border: '#374151',
        accent: '#60a5fa',
        error: '#f87171',
        success: '#4ade80'
      },
      // ... other theme values remain same
    }
  };