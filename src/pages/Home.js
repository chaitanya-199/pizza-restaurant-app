
import React from 'react'
import { Link } from 'react-router-dom'
import BannerImg from "../assets/pizza.jpeg"
import '../styles/home.css'
const Home = () => {
  return (
    <div className='home' style={{ backgroundImage: `url(${BannerImg})`}}> 
      <div className='headerContainer' >
        <h1>Zomino's Pizza</h1>
        <p>PIZZA FOR ALL DAY</p>
        <Link to= "/menu">
        <button>ORDER NOW</button>
        </Link>
        

      </div>
    </div>
  )
}

export default Home