import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import "./Navigation.css";

export const ROUTES = {
  HOME: '/',
  NEWPOST: '/newpost',
  SAVEDRAFT: '/savedraft',
  BLOG_POST: (id) => `/posts/${id}`,
  ADMIN: '/admin',
  ADMIN_POSTS:'/admin/posts',
  SETTINGS: "./settings"
}
function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: ROUTES.HOME, label: "🏠 All Posts" },
    // { path: "/posts", label: "Published Blog" },
    { path: ROUTES.NEWPOST, label: "📔 +New Posts" },
    { path: ROUTES.SAVEDRAFT, label: "📃 Draft Posts"},
    { path: ROUTES.SETTINGS, label: "⚙️ Settings"},
    // { path: "/profile", label: "Profile" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navigation breadcrumb">
      <div className="navigation__brand">
      <h1><header className="blog-header sticky"> 
          My Cool Blog 😎
      </header></h1>
    
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