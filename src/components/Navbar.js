import React, { useState, useContext } from 'react'
import Logo from "../assets/pizzaLogo.png"
import { Link } from 'react-router-dom'
import ReorderIcon from '@mui/icons-material/Reorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from '../context/CartContext';
import '../styles/Navbar.css'

const Navbar = () => {
  const [openLinks, setOpenLinks] = useState(false)
  const { cartItems } = useContext(CartContext);
  
  const toggleHandler = () => {
    setOpenLinks(!openLinks)
  }

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  }

  return (
    <div className='navbar'>
      <div className='leftSide' id={openLinks ? "open" : "close"}>
        <img src={Logo} alt='Logo' />
        <div className='hiddenLinks'>
          <Link to="/"> Home</Link>
          <Link to="/menu"> Menu</Link>
          <Link to="/about"> About</Link>
          <Link to="/contact"> Contact</Link>
        </div>
      </div>

      <div className='rightSide'>
        <Link to="/"> Home</Link>
        <Link to="/menu"> Menu</Link>
        <Link to="/about"> About</Link>
        <Link to="/contact"> Contact</Link>
        
        {/* Cart Icon with counter */}
        <Link to="/cart" className="cartLink">
          <ShoppingCartIcon />
          {getTotalItems() > 0 && (
            <span className="cartCounter">{getTotalItems()}</span>
          )}
        </Link>
        
        <button onClick={toggleHandler}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  )
}

export default Navbar