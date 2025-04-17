// src/js/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

// --- Corrected Import: Point to Home.jsx ---
// Import 'Home' from './components/Home.jsx'
import Home from './components/Home';

// --- Import Global Assets Here ---
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// --- Corrected import path for index.css ---
// Go up one level (from js to src) then into the 'styles' directory
import '../styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      {/* --- Render the Home component --- */}
      <Home />
    </Router>
  </React.StrictMode>
);