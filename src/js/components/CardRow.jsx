// src/js/components/CardRow.jsx
import React from 'react';
import Card from './Card'; // Assuming Card.jsx is in the same directory

const CardRow = () => {
  return (
    // Bootstrap row to contain the columns
    <div className="row">

      {/* Card 1 */}
      {/* col-lg-3: Takes 3/12 columns on large screens and up */}
      {/* col-md-6: Takes 6/12 columns on medium screens (2 per row) */}
      {/* mb-4: Adds margin-bottom for spacing when columns stack */}
      {/* d-flex justify-content-center: Centers card within its column */}
      <div className="col-lg-3 col-md-6 mb-4 d-flex justify-content-center">
        <Card
          title="Feature One"
          text="Description for the first feature card."
          imageUrl="https://picsum.photos/200/300"
        />
      </div>

      {/* Card 2 */}
      <div className="col-lg-3 col-md-6 mb-4 d-flex justify-content-center">
        <Card
          title="Feature Two"
          text="Description highlighting the second feature."
          imageUrl="https://picsum.photos/200"
        />
      </div>

      {/* Card 3 */}
      <div className="col-lg-3 col-md-6 mb-4 d-flex justify-content-center">
        <Card
          title="Feature Three"
          text="Details about the third exciting feature."
          imageUrl="https://picsum.photos/200/300"
        />
      </div>

      {/* Card 4 */}
      <div className="col-lg-3 col-md-6 mb-4 d-flex justify-content-center">
        <Card
          title="Feature Four"
          text="Information regarding the final feature presented."
          imageUrl="https://picsum.photos/200"
        />
      </div>

    </div> // End of .row
  );
};

export default CardRow;