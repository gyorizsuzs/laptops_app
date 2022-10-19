import React, { useEffect, useState } from 'react';

import Input from '@mui/material/Input';
import Button from '@mui/material/Button';

import LoadingMask from './components/LoadingMask';
import Laptop from './components/Laptop';

const App = () => {
  const [laptops, setLaptops] = useState();
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState(true);
  const [search, setSearch] = useState([]);

  useEffect(() => {
    fetch('https://demoapi.com/api/laptop', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((body) => {
        setLaptops(body);
        setLoading(false);
      });
  }, []);

  function sortByWeight() {
    setSort(!sort);
  }

  function handleSearch(event) {
    setSearch(event.target.value.toLowerCase());
  }

  return (
    <div className='App'>
      <h1 className='title'>Laptops</h1>

      <header>
        <Input type='text' onChange={handleSearch} />
        <Button variant='outlined' onClick={sortByWeight}>
          Sort
        </Button>
      </header>
      <div className='inner-container'>
        {!laptops ? (
          <LoadingMask />
        ) : (
          laptops
            .filter(
              (laptop) =>
                laptop.name.toLowerCase().includes(search) ||
                laptop.brand.toLowerCase().includes(search)
            )
            .sort((a, b) => (sort ? a.weight - b.weight : b.weight - a.weight))
            .map((laptop, index) => <Laptop key={index} laptop={laptop} />)
        )}
      </div>
    </div>
  );
};

export default App;
