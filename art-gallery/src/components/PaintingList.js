import React from 'react';


const PaintingList = ({painting}) => {
  return (
    <div>
        <h1>{painting.name}</h1>
        <img src={painting.image} alt={painting.name} />
        <p>Price: ${painting.price}</p>
    </div>
  );
};

export default PaintingList;