import React from 'react'

const Paintinglist = ({paintings}) => {
  return (
    <div> 
        <h2>Paintings</h2>
        <ul>
            {paintings.map((painting) => (
                <li key={painting.id}>{painting.name}</li>
            ))}
        </ul>
    </div>
  )
}

export default Paintinglist