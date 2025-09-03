// src/pages/Cart.js
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/Cart.css";

function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleQuantityChange = (item, newQuantity) => {
    const quantity = parseInt(newQuantity);
    
    // Validate quantity
    if (isNaN(quantity) || quantity < 1) {
      return; // Don't update if invalid
    }
    
    // Use item.id if available, otherwise use item.name as fallback
    const identifier = item.id !== undefined ? item.id : item.name;
    updateQuantity(identifier, quantity);
  };

  const handleRemoveItem = (item) => {
    // Use item.id if available, otherwise use item.name as fallback
    const identifier = item.id !== undefined ? item.id : item.name;
    removeFromCart(identifier);
  };

  const handleIncrement = (item) => {
    handleQuantityChange(item, item.quantity + 1);
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      handleQuantityChange(item, item.quantity - 1);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart">
        <h2>Your Cart</h2>
        <div className="emptyCart">
          <p>Your cart is empty</p>
          <p>Add some delicious pizzas to get started!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <div className="cartItems">
        {cartItems.map((item, index) => (
          <div 
            key={item.id !== undefined ? item.id : `${item.name}-${index}`} 
            className="cartItem"
          >
            <img src={item.image} alt={item.name} className="cartItemImage" />
            <div className="cartItemDetails">
              <h4 className="itemName">{item.name}</h4>
              <p className="itemPrice">₹{item.price}</p>
              
              <div className="quantityControls">
                <button 
                  className="quantityBtn" 
                  onClick={() => handleDecrement(item)}
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                
                <input
                  type="number"
                  className="quantityInput"
                  value={item.quantity}
                  min="1"
                  max="99"
                  onChange={(e) => handleQuantityChange(item, e.target.value)}
                />
                
                <button 
                  className="quantityBtn" 
                  onClick={() => handleIncrement(item)}
                >
                  +
                </button>
              </div>
              
              <p className="itemTotal">
                Subtotal: ₹{(item.price * item.quantity).toFixed(2)}
              </p>
              
              <button 
                className="removeBtn" 
                onClick={() => handleRemoveItem(item)}
              >
                Remove from Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="cartSummary">
        <div className="totalSection">
          <h3>Total Items: {cartItems.reduce((acc, item) => acc + item.quantity, 0)}</h3>
          <h3>Total Amount: ₹{total.toFixed(2)}</h3>
        </div>
        
        <div className="checkoutSection">
          <button className="checkoutBtn">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;