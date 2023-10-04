import React, {useState} from "react";

function PaintingCard({painting}) {
  const {id, name, price, image} = painting
  const [inStock, setInStock] = useState(true)

  function handleClick(){
    setInStock(inStock => !inStock)
  }

return (
   <li className="card">
    <div className="cardContent">
      <img src={image} alt={name} />
       <div className="cardInfo">
        <h4>{name}</h4>
        <p>Price: {price}</p>
        {inStock ? (
        <button className="primary" onClick = {handleClick}>In Stock</button>
        ) : (
        <button onClick = {handleClick}>Out of Stock</button>
        )}
       </div>
    </div>
   </li>
  );
}

export default PaintingCard;
