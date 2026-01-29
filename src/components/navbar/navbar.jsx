// Navbar.jsx
import { useState } from "react";
import "./navbar.css";
import hamburgerIcon from "../../assets/images/hamburger.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // Close menu after clicking even if section not found (safety)
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        {/* Logo */}
        <a className="navbar-brand" onClick={() => scrollToSection("home")}>
          <span className="brand-P">P</span>
          <span className="brand-rest">ortfolio</span>
        </a>

        {/* Toggler Button */}
        <button
          className={`navbar-toggler ${isOpen ? "open" : ""}`}
          type="button"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <img src={hamburgerIcon} alt="menu" className="hamburger-svg-icon" />
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav ms-auto gap-4">
            <li className="nav-item">
              <a className="nav-link" style={{ color: "#FFFFFF", cursor: "pointer" }}
                onClick={() => scrollToSection("home")}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={{ color: "#FFFFFF", cursor: "pointer" }}
                onClick={() => scrollToSection("about")}>About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={{ color: "#FFFFFF", cursor: "pointer" }}
                onClick={() => scrollToSection("experience")}>Experience</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={{ color: "#FFFFFF", cursor: "pointer" }}
                onClick={() => scrollToSection("services")}>Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={{ color: "#FFFFFF", cursor: "pointer" }}
                onClick={() => scrollToSection("projects")}>Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={{ color: "#FFFFFF", cursor: "pointer" }}
                onClick={() => scrollToSection("contact")}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
