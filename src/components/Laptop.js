import React, { useState } from 'react';

import { Button } from '@mui/material';

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
      <Button variant='contained' onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? 'Show less' : 'Show more'}
      </Button>
    </div>
  );
};

export default Laptop;
