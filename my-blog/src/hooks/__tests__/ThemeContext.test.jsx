// ThemeContext.test.jsx
import { render, act } from '@testing-library/react';
import { useTheme, ThemeProvider } from './ThemeContext';

describe('ThemeContext', () => {
  test('toggles theme', () => {
    let result;
    
    function TestComponent() {
      result = useTheme();
      return null;
    }

    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    expect(result.theme).toBe('light');
    
    act(() => {
      result.toggleTheme();
    });
    
    expect(result.theme).toBe('dark');
  });
});