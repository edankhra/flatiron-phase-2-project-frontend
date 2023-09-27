import React, { useState, useEffect } from 'react'

const Paintinglist = () => {
    const[paintings, setPaintings] = useState([]);

    useEffect(() =>{
        fetchPaintings();
    }, []);

    const fetchPaintings = async () => {
        try {
            const res
        }
    }
  return (
    <div> 
        <h2>Paintings</h2>
        <ul>
           
        </ul>
    </div>
  )
}

export default Paintinglist;