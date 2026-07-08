import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { COURSE_MENU } from "../../config/menu"; // update path if needed

type Props = {
  isOpen: boolean;
  onMenuClick: () => void;
};

const Header = ({ isOpen, onMenuClick }: Props) => {
  const [isMobileHeaderMenu, setIsMobileHeaderMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 768);

    update();

    window.addEventListener("resize", update);

    return () => window.removeEventListener("resize", update);
  }, []);

  const closeMenu = () => setIsMobileHeaderMenu(false);

  return (
    <header style={styles.header}>
      <b style={styles.logo}>📘 Tutorial Hub</b>

      {/* ================= DESKTOP ================= */}

      {!isMobile && (
        <nav style={styles.nav}>
          <NavItem to="/" label="🏠 Home" />

          {COURSE_MENU.map((course) => (
            <NavItem
              key={course.path}
              to={course.path}
              label={`${course.icon} ${course.title}`}
            />
          ))}

          <NavItem to="/login" label="🔐 Sign In" />
        </nav>
      )}

      {/* Sidebar Button */}

      {isMobile && (
        <button
          onClick={onMenuClick}
          style={styles.menuBtn}
          aria-label="sidebar-toggle"
        >
          {isOpen ? "⬅️" : "➡️"}
        </button>
      )}

      {/* Header Menu */}

      {isMobile && (
        <button
          onClick={() => setIsMobileHeaderMenu(!isMobileHeaderMenu)}
          style={styles.menuBtn}
        >
          {isMobileHeaderMenu ? "✖" : "☰"}
        </button>
      )}

      {/* ================= MOBILE MENU ================= */}

      {isMobile && isMobileHeaderMenu && (
        <div style={styles.mobileMenu}>
          <NavItem
            to="/"
            label="🏠 Home"
            onClick={closeMenu}
          />

          {COURSE_MENU.map((course) => (
            <NavItem
              key={course.path}
              to={course.path}
              label={`${course.icon} ${course.title}`}
              onClick={closeMenu}
            />
          ))}

          <NavItem
            to="/login"
            label="🔐 Sign In"
            onClick={closeMenu}
          />
        </div>
      )}
    </header>
  );
};

// ---------------- NAV ITEM ----------------

type NavItemProps = {
  to: string;
  label: string;
  onClick?: () => void;
};

const NavItem = ({ to, label, onClick }: NavItemProps) => {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      style={({ isActive }) => ({
        ...styles.link,
        background: isActive ? "#ffcc00" : "transparent",
        color: isActive ? "#000" : "#fff",
        borderRadius: 8,
      })}
    >
      {label}
    </NavLink>
  );
};

// ---------------- STYLES ----------------

const styles: any = {
  header: {
    height: 60,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 15px",
    background: "#4f46e5",
    color: "#fff",
    position: "sticky",
    top: 0,
    zIndex: 2000,
  },

  logo: {
    fontSize: 22,
    whiteSpace: "nowrap",
  },

  nav: {
    display: "flex",
    alignItems: "center",
    gap: 7,
    overflowX: "auto",
    scrollbarWidth: "none",
  },

  link: {
    textDecoration: "none",
    padding: "8px 14px",
    fontWeight: "bold",
    transition: ".3s",
    whiteSpace: "nowrap",
  },

  menuBtn: {
    fontSize: 24,
    background: "transparent",
    border: "none",
    color: "#fff",
    cursor: "pointer",
    marginLeft: 8,
  },

  mobileMenu: {
    position: "absolute",
    top: 60,
    left: 0,
    right: 0,
    background: "#4f46e5",
    display: "flex",
    flexDirection: "column",
    padding: 10,
    gap: 8,
    zIndex: 3000,
  },
};

export default Header;