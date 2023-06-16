import React, { useState } from 'react';

const NewGame = ({ onAddGame }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newGame = { name, price, image };
    onAddGame(newGame);
    setName('');
    setPrice('');
    setImage('');
  };

  return (
    <>
      <h2>Game Details</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={handleNameChange} />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image:</label>
          <input type="text" id="image" value={image} onChange={handleImageChange} />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input type="number" id="price" value={price} onChange={handlePriceChange} step="0.01" />
        </div>
        <button type="submit" className="btn">Submit</button>
      </form>
    </>
  );
};

export default NewGame;
