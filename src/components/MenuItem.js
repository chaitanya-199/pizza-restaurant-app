// src/components/MenuItem.js
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import '../styles/Menu.css';

function MenuItem({ id, image, name, price }) {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    const item = { id, image, name, price }; // Include id
    addToCart(item);
  };

  return (
    <div className="menuItem">
      <div
        className="menuItemImage"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <h3>{name}</h3>
      <p>₹{price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default MenuItem;