import Navbar from './components/Navbar';
import Footer from './components/Footer'
import './App.css';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart'; // Add Cart import
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CartProvider } from './context/CartContext'; // Add CartProvider import

function App() {
  return (
    <div className='App'>
      <CartProvider>  {/* Wrap everything with CartProvider */}
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/cart' element={<Cart />} /> {/* Add Cart route */}
          </Routes>
          <Footer />
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;