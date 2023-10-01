import React from 'react';
import { Link } from 'react-router-dom';

const Paintings = ({ paintings }) => {
  return (
    <div>
      <h1>Paintings</h1>
      <ul>
        {paintings.map((painting) => (
        <li key={painting.id}>
          <Link to={`/paintings/${painting.id}`}>
            <img src={painting.image} alt={painting.name} />
            <p>{painting.name}</p>
          </Link>
        </li>
      ))} 
      </ul>
    </div>
  )
}

export default Paintings;