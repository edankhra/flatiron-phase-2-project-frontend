import React, { useState, useEffect } from 'react'

const Paintinglist = () => {
    const[paintings, setPaintings] = useState([]);

    useEffect(() =>{
        fetch("http://localhost:3001/paintings")
         .then((response) => response.json())
         .then((data) => setPaintings(data));
    }, []);

  return (
    <div> 
        <h1>Paintings</h1>
        <ul>
           {paintings.map((painting) => (
            <li key={painting.id}>{painting.name}</li>
           ))}
        </ul>
    </div>
  )
}

export default Paintinglist;