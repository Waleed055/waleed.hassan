// Navbar.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./navbar.css";
import hamburgerIcon from "../../assets/images/hamburger.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const menuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: { duration: 0.2 }
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        {/* Logo */}
        <a className="navbar-brand" onClick={() => scrollToSection("home")} style={{ cursor: "pointer", zIndex: 10001 }}>
          <span className="brand-P">P</span>
          <span className="brand-rest">ortfolio</span>
        </a>

        {/* Toggler Button */}
        <button
          className={`navbar-toggler ${isOpen ? "open" : ""}`}
          type="button"
          onClick={toggleMenu}
          style={{ zIndex: 10001 }}
        >
          <img src={hamburgerIcon} alt="menu" className="hamburger-svg-icon" />
        </button>

        {/* Desktop Menu */}
        <div className="collapse navbar-collapse d-none d-lg-block">
          <ul className="navbar-nav ms-auto gap-4">
            {["home", "about", "experience", "services", "projects", "contact"].map((id) => (
              <li key={id} className="nav-item">
                <a className="nav-link" style={{ color: "#FFFFFF", cursor: "pointer" }}
                  onClick={() => scrollToSection(id)}>
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="navbar-mobile-drawer"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={menuVariants}
            >
              <ul className="navbar-nav-mobile">
                {["home", "about", "experience", "services", "projects", "contact"].map((id) => (
                  <motion.li key={id} variants={itemVariants}>
                    <a className="nav-link-mobile" onClick={() => scrollToSection(id)}>
                      {id.charAt(0).toUpperCase() + id.slice(1)}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

