import React, { useState } from 'react'

const Paintingform = () => {
  const [name, setName] = useState('');

  const handleSubmit =(e) => {
    e.preventDefault();

    //Creat a new painting object 
    const newPainting = { name};

    //Make a POST request to the API

    fetch(`${process.env.REACT_APP_API_URL}/paintings`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newMovie),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response and update the state
        // You can use the addMovie function mentioned in the requirements
        console.log('Painting added:', data);
    });
    setName('');
  };

  return (
    <div>
      <h1>Add a Painting</h1>
      <form onSubmit={handleSubmit}>
        <input
        type="text"
        placeholder='Painting Name'
        value={name}
        onChange={(e)=> setName(e.target.value)}
        />
        <button type="submit">Add Painting</button>
      </form>
    </div>
  )
}

export default Paintingform