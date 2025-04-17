// src/js/components/ThemeToggle.jsx
import React from 'react';
// Option: Install react-bootstrap-icons
// npm install react-bootstrap-icons
// Or use simple text/emoji
import { Sun, MoonStars } from 'react-bootstrap-icons'; // Example using react-bootstrap-icons

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    // Style this button nicely using Bootstrap classes or custom CSS
    <button
      onClick={toggleTheme}
      className="btn btn-outline-secondary ms-2 theme-toggle-btn" // Basic styling
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
         <MoonStars size={18} /> // Show Moon icon in light mode
      ) : (
         <Sun size={18} /> // Show Sun icon in dark mode
      )}
    </button>
  );
};

export default ThemeToggle;

// Add some basic CSS for the button if needed in index.css
/*
.theme-toggle-btn {
  border-radius: 50%; // Make it round
  padding: 0.3rem 0.45rem;
  line-height: 1;
}
.theme-toggle-btn svg {
  vertical-align: middle; // Align icon better
}
*/