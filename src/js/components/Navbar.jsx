// src/js/components/Navbar.jsx
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
// Import the toggle component
import ThemeToggle from './ThemeToggle';

// Accept theme and toggleTheme as props
const Navbar = ({ theme, toggleTheme }) => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top"> {/* Removed navbar-dark, theme attr handles it */}
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Start Bootstrap</Link>
        <button
          className="navbar-toggler"
          // ... (rest of toggler attributes)
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center"> {/* Use align-items-center */}
            <li className="nav-item">
              <NavLink className="nav-link" end to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/services">Services</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>
            {/* Add the Theme Toggle Button Here */}
            <li className="nav-item ms-lg-2"> {/* Add some margin on large screens */}
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;