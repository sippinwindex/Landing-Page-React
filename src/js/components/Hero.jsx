// src/js/components/Hero.jsx
import React from 'react';
import '../../styles/Hero.css'; // Corrected import path (Keep this)

// --- Define the Hero component ONCE ---
const Hero = () => {
  return (
    // Hero Section Container
    <section className="hero-section d-flex align-items-center text-white">
      <div className="container">
        {/* Use Bootstrap grid for responsive layout */}
        <div className="row justify-content-center justify-content-lg-start">
          {/* Adjust column width as needed (e.g., col-lg-8) */}
          <div className="col-lg-8 text-center text-lg-start">

            {/* Animated Gradient Title */}
            <h1 className="display-3 fw-bold animated-gradient-text mb-3">
              A Warm Welcome!
            </h1>

            {/* Paragraph Text */}
            <p className="lead hero-paragraph mb-4">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
            </p>

            {/* Creative Call to Action Button */}
            <button className="button mt-3">
              {/* SVG Sparkle */}
              <svg
                className="sparkle"
                viewBox="0 0 75 75"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="path"
                  d="M8.56299 37.5001C8.56299 16.8632 24.9261 0.500122 45.563 0.500122C57.908 0.500122 68.9668 6.20012 75 15.5626"
                  strokeWidth="1"
                ></path>
                <path
                  className="path"
                  d="M66.4369 37.5C66.4369 58.1369 50.0738 74.5 29.4369 74.5C17.0919 74.5 6.03311 68.8 0 59.4375"
                  strokeWidth="1"
                ></path>
                <path
                  className="path"
                  d="M37.5 66.4369C16.8631 66.4369 0.5 50.0738 0.5 29.4369C0.5 17.0919 6.2 6.03311 15.5625 0"
                  strokeWidth="1"
                ></path>
              </svg>
              {/* Dotted Border Effect */}
              <span className="dots_border"></span>
              {/* Button Text */}
              <span className="text_button">Call to action!</span>
            </button>

          </div>
        </div>
      </div>
    </section>
  );
};
// --- End of Hero component definition ---

// --- Export the Hero component ONCE ---
export default Hero;
