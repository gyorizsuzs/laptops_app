import React, { useState } from 'react';

const Laptop = ({ laptop }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className='laptop-card'>
      <div>
        <h2>{laptop.name}</h2>
      </div>
      {showDetails && (
        <div className='laptop-text'>
          <h3>Brand: {laptop.brand}</h3>
          <h3>Weight: {laptop.weight}</h3>
        </div>
      )}
      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? 'Show less' : 'Show more'}
      </button>
    </div>
  );
};

export default Laptop;
