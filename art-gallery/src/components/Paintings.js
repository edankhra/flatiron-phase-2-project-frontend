import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PaintingForm from './PaintingForm';

const Paintings = () => {
    const [paintings, setPaintings] = useState([]);
    const [formData, setFormData] = useState(null);

    useEffect(() => {
        // Fetch paintings data from db.json
        fetch('http://localhost:3000/paintings')
          .then((response) => response.json())
          .then((data) => setPaintings(data.paintings))
          .catch((error) => console.error('Error fetching paintings:', error));
      }, []);

      const handleFormSubmit = (data) => {
        // Submit form data to add a new painting
        // Assuming your API endpoint to add a painting is 'http://localhost:3000/paintings'
        fetch('http://localhost:3000/paintings', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
          .then((response) => response.json())
          .then((newPainting) => {
            setPaintings([...paintings, newPainting]);
          })
          .catch((error) => console.error('Error adding painting:', error));
      };
    
  return (
    <div>
      <h1>Paintings</h1>
      <PaintingForm onSubmit={handleFormSubmit} />
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