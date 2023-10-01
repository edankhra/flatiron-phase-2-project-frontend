import React, { useState } from 'react';

const PaintingForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title });
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <button type="submit">Add Painting</button>
    </form>
  );
};

export default PaintingForm;