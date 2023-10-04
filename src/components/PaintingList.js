import React, { useState, useEffect } from 'react';
import PaintingCard from './PaintingCard';

const PaintingList = () => {
  const [paintings, setPaintings] = useState([]);

    useEffect(() => {
    fetch("https://raw.githubusercontent.com/edankhra/flatiron-phase-2-project-frontend/main/db.json")
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setPaintings(data.paintings)
      })
      .catch(error => console.error('Error fetching paintings:', error));
  }, []);

console.log(paintings)
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
