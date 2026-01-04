import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function Header({ toggleTheme, isDarkMode }) {
  return (
    <nav className="navbar-premium">
      <div className="container nav-container">
        <div style={{ flex: 1 }}></div>
        <div className="nav-links">
          <a href="#hero" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#activities" className="nav-link">Activities</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#contact" className="nav-link">Contact</a>

          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>
    </nav>
  );
}