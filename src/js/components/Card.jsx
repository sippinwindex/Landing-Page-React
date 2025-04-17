// src/js/components/Card.jsx
import React, { useState } from 'react';
import '../../styles/Card.css'; // Or remove if using index.css

const Card = ({
  title = "Card Title",
  imageUrl = "https://via.placeholder.com/190x150.png?text=Product+Image",
  description = "Quick Product mini description here."
}) => {
  const [showDescription, setShowDescription] = useState(false);

  const handleCardClick = () => {
    setShowDescription(!showDescription);
  };

  return (
    // Add conditional class 'card-zoomed' based on showDescription state
    <div
      className={`neumorphic-card ${showDescription ? 'card-zoomed' : ''}`}
      onClick={handleCardClick}
    >
      <img src={imageUrl} alt={title} className="card-img-top-fill" />

      <div className="card-content-area">
        <h5 className="card-title">{title}</h5>
        <button className="cart-button" onClick={(e) => e.stopPropagation()}>
          <div className="glass-effect"></div>
          <span className="button-text">
            View Details
          </span>
        </button>
      </div>

      {/* Description Card remains conditional */}
      {showDescription && (
        <div className="description-card">
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};



export default Card;