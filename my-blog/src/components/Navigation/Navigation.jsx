import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import Header from "../Header"
// import "./Navigation.css";

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    // { path: "/posts", label: "Published Blog" },
    { path: "/newPost", label: "New Post" },
    // { path: "/profile", label: "Profile" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navigation">
      <div className="navigation__brand">
        <Header />
    
      {/* <button
        className="navigation__toggle"
        onClick={toggleMenu}
        aria-expanded={isMenuOpen}
        aria-label="Toggle navigation"
      >
        <span className="navigation__toggle-icon"></span>
      </button> */}
    
      <ul className={`navigation__menu ${isMenuOpen ? "is-open" : ""}`}>
        {navItems.map((item) => (
          <li key={item.path} className="navigation__item center-text">
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `nav-links navigation__link ${isActive ? "is-active" : ""}`
            }
            onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
        </div>
    </nav>
  );
}

export default Navigation;