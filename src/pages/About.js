import React from 'react';
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/about.css"; 

const About = () => {
  return (
    <div className='about'>
      <div
        className='aboutTop'
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className='aboutBottom'>
        <h1>ABOUT US</h1>
        <p>
          Welcome to <strong>Pizza Paradise</strong>, where passion meets perfection—one slice at a time!
        </p>
        <p>
          At Pizza Paradise, we believe that pizza isn't just food — it's an experience.
          Founded with the goal of bringing fresh, flavorful, and handcrafted pizzas to your table,
          we use only the finest ingredients and traditional recipes blended with a modern twist.
          From our signature <em>Pepperoni Classic</em> to the bold and unique <em>PedroTech Special</em>,
          each pizza is made with love, fire-baked to perfection, and served with a smile.
         </p>
      </div>
    </div>
  );
};

export default About;
