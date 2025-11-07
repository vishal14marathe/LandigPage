import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
      <div className="container">
        <nav className="navbar">
          <a href="#" className="logo">
            TTM<span>.</span>
          </a>
          <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
            <li>
              <a href="#features" onClick={closeMenu}>
                Features
              </a>
            </li>
            <li>
              <a href="#benefits" onClick={closeMenu}>
                Benefits
              </a>
            </li>
            <li>
              <a href="#solutions" onClick={closeMenu}>
                Solutions
              </a>
            </li>
            <li>
              <a href="#pricing" onClick={closeMenu}>
                Pricing
              </a>
            </li>
            <li>
              <a href="#resources" onClick={closeMenu}>
                Resources
              </a>
            </li>
          </ul>
          <div className="nav-actions">
            <a href="#" className="btn btn-secondary">
              Login
            </a>
            <a href="#contact" className="btn btn-primary">
              Get Demo
            </a>
          </div>
          <button className="mobile-toggle" onClick={toggleMenu}>
            ☰
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
