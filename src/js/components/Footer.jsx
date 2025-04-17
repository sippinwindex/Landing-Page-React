// src/js/components/Footer.jsx
import React from 'react';

// Import CSS for the footer
// Option A: Use a dedicated file (recommended)
import '../../styles/Footer.css';
// Option B: Add styles to index.css and remove the import above

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    // Use the semantic footer tag
    // mt-auto helps push footer down in flexbox layouts (like your App.jsx)
    // Add 'footer-styling' class for custom styles
    <footer className="footer-styling mt-auto py-3">
      <div className="container text-center">
        {/* Use a specific class for the text if more styling needed */}
        <span className="footer-text">
          {/* Copyright Symbol ©, dynamic year, your text, and heart Unicode */}
          Copyright © {currentYear} Juancitos Ecstatic Emporioum Enterprise The E E E way. ❤️
        </span>
      </div>
    </footer>
  );
};

export default Footer;