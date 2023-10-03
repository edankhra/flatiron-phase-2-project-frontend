import React, {useState} from "react";

function PaintingCard({painting}) {
  const {id, name, price, image} = painting
  const [inStock, setInStock] = useState(true)
  const [updatedPrice, setUpdatedPrice] = useState(0)

  function handleClick(){
    setInStock(inStock => !inStock)
  }

  function handlePriceChange(e){
   const amount = e.target.value
   if(amount === "" || amount === null ){
     setUpdatedPrice(" ")
   }else{
     setUpdatedPrice(parseFloat(e.target.value))
   }
  }
  
  return (
    <div className="card-container">
    <li className="card">
        <div className="cardContent">
      <img src={image} alt={name} />
      <div className="cardInfo">
      <h4>{name}</h4>
      <p>Price: {price.toFixed(2)}</p>
      {inStock ? (
        <button className="primary" onClick = {handleClick}>In Stock</button>
      ) : (
        <button onClick = {handleClick}>Out of Stock</button>
      )}
      <form> 
        <input type="number" 
               step="0.01" 
               placeholder="New Price..." 
               value={updatedPrice} 
               onChange={handlePriceChange}
            />
            <button type="submit">Updete Price </button>
        </form>
        </div>
        </div>
    </li>
    </div>
  );
}

export default PaintingCard;
