import React, { useState } from 'react';

const PaintingForm = () => {
  const[formData, setFormData] = useState({
    name: "",
    price: 0,
    image: ""
  })

  function handleChange(e){
    if(e.target.name === "price"){
      const amt = e.target.value
      if (amt === "" || amt === null){
        setFormData({...formData, [e.target.name]: ""})
      }else{
        setFormData({
            ...formData,
             [e.target.name]: parseFloat(e.target.value),
            })
          }
    }else{
      setFormData({...formData, [e.target.name]: (e.target.value)})
    }
  }
  
  function handleSubmit(e){
    e.preventDefault()

    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    }

    fetch("https://raw.githubusercontent.com/edankhra/flatiron-phase-2-project-frontend/main/art-gallery/db.json", configObj)
    .then(r => r.json())
    .then(() => setFormData({
      name: "",
      price: 0,
      image: ""
    }))
  }


  return (
    <div className='painting-form'>
      <h1> Add Painting </h1>
    <form onSubmit={handleSubmit}>
    <input type="text" name="name" value ={formData.name} placeholder="Plant name" onChange ={handleChange} />
        <input type="text" name="image" value ={formData.image} placeholder="Image URL" onChange ={handleChange}/>
        <input type="number" name="price" step="0.01" value ={formData.price} placeholder="Price" onChange ={handleChange}/>
        <button type="submit">Add Painting</button>
    </form>
    </div>
  );
};

export default PaintingForm;
