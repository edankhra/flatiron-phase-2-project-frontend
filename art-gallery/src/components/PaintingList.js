import React, { useState, useEffect } from 'react';
import PaintingCard from './PaintingCard';

const PaintingList = () => {
  const [paintings, setPaintings] = useState([]);

    useEffect(() => {
    fetch('http://localhost:3001/paintings')
      .then(response => response.json())
      .then(data => setPaintings(data))
      .catch(error => console.error('Error fetching paintings:', error));
  }, []);


  return (
    <div className='painting-list'>
      <h1>Paintings</h1>
      <ul>
        {paintings.map(painting => (
         
          <PaintingCard painting= {painting} key={painting.id} />
        
        ))}
      </ul>
    </div>
  );
};

export default PaintingList;
