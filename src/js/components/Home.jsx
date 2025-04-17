// src/js/components/Home.jsx
import React, { useState, useEffect, useCallback } from 'react'; // Import hooks
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Hero from './Hero';
import CardRow from './CardRow';
// Import ThemeToggle (we'll create this next)
import ThemeToggle from './ThemeToggle';

// --- Define content component (as before) ---
const HomePageContent = () => {
  return (
    <>
      <Hero />
      <div className="container my-5">
        <CardRow />
      </div>
    </>
  );
};

function Home() { // This component is the main App shell

  // --- Theme State ---
  const [theme, setTheme] = useState(() => {
    // 1. Check localStorage
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      return storedTheme;
    }
    // 2. Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    // 3. Default to light
    return 'light';
  });

  // --- Function to Toggle Theme ---
  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  }, []); // Empty dependency array means this function is created once

  // --- Effect to Apply Theme and Save to localStorage ---
  useEffect(() => {
    // Apply theme attribute to <html> element
    document.documentElement.setAttribute('data-bs-theme', theme);
    // Save theme to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]); // Run this effect whenever the theme state changes

  return (
    <div className="app-container d-flex flex-column min-vh-100">
      {/* Pass theme and toggle function to Navbar */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<HomePageContent />} />
          {/* Other routes */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default Home;