import { useTheme } from "../hooks/useTheme";

export default function ThemeToggle() {
    const { toggleTheme, isDark } = useTheme();
    return (
        <>
        <h1 className= "animate__animated animate__zoomOutUp">Welcome!</h1> 
        <div className="align-right">
        <button onClick= {toggleTheme} className="animate__animated animate__fadeIn toggle-button"> 
            {isDark ? '🌑' : '☀️'}
        </button>
        </div>
        </>
    )
}