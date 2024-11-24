import { useTheme } from "../hooks/useTheme";

export default function ThemeToggle() {
    const { toggleTheme, isDark } = useTheme();
    return (
        <button onClick= {toggleTheme}> 
            {isDark ? '🌑' : '☀️'}
        </button>
    )
}