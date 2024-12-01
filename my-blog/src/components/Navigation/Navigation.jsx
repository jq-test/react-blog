import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import ThemeToggle from "../../contexts/ThemeToggle";
import "./Navigation.css";

export const ROUTES = {
  HOME: "/",
  NEWPOST: "/newpost",
  SAVEDRAFT: "/savedraft",
  BLOG_POST: (id) => `/posts/${id}`,
  ADMIN: "/admin",
  ADMIN_POSTS: "/admin/posts",
  SETTINGS: "./settings",
  LOGIN: "/login",
};

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { user, logout } = useAuth();

  const navItems = [
    { path: ROUTES.HOME, label: "🏠 All Posts" },
    { path: ROUTES.NEWPOST, label: "📔 +New Post" },
    { path: ROUTES.SAVEDRAFT, label: "💾 Save Draft" },
    { path: ROUTES.SETTINGS, label: "⚙️ Settings" },
    { path: ROUTES.LOGIN, label: "🔒 Login" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
        <ThemeToggle />
        <header className="blog-header sticky animate__animated animate__bounce">
          <h1 className="animate__animated animate__jackInTheBox">
            {" "}
            My Cool Blog 😎{" "}
          </h1>
        </header>
        <nav className="navigation breadcrumb">
        <div className="navigation__brand">
          <ul
            className={`animate__animated animate__slideInLeft navigation__menu ${
              isMenuOpen ? "is-open" : ""
            }`}
          >
            {navItems.map((item) => (
              <li key={item.path} className="navigation__item center-text">
                <NavLink
                  // key={item.path}
                  to={item.path}
                  activeClassName="active"
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) => 
                    `nav-links navigation__link ${isActive ? "is-active" : ""}`
                  }
                  // to={item.path}
                  // className={({ isActive }) =>
                  //   `nav-links navigation__link ${isActive ? "is-active" : ""}`
                  // }
                  // onClick={toggleMenu}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            {user ? (
              <li>
                <button onClick={logout}>Logout</button>
              </li>
            ) : (
              <li>
                <NavLink to={ROUTES.LOGIN}></NavLink>
              </li>
            )}
          </ul>
          </div>
        </nav>

        <div className="mobile-menu">
          <button className="mobile-menu-button" onClick={toggleMenu}>
            ☰
          </button>
          <div className={`mobile-menu-content ${isMenuOpen ? "open" : ""}`}>
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={toggleMenu}
              >
                {item.label}
              </NavLink>
            ))}
            {user ? (
              <button onClick={logout}>Logout</button>
            ) : (
              <NavLink
                to={ROUTES.LOGIN}
                onClick={toggleMenu}
              >
                {" "}
              </NavLink>
            )}
          </div>
        </div>
    </>
  );
}

export default Navigation;