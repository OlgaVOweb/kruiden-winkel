
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Products from './products/Products';
import Delivery from './pages/Delivery';
import Payment from './pages/Payment';
import basket from './icons/basket.png';
import magnifier from './icons/magnifier.png';
import burger from './icons/burger.png';
import Contacts from './pages/Contacts';
import Footer from './Footer';
import { useState } from 'react';

function App() {
  const [isOpen, setOpen] = useState();

  return (
    <Router>
      <nav>
        <div className='header'>
          <p className='logo'>TURAN KRUIDEN</p>
          <div className={`links ${isOpen ? "active" : ""}`}>
            <Link to="/" className='link'>Home</Link>
            <Link to="/products" className='link'>Products</Link>
            <Link to="/delivery" className='link'>Delivery</Link>
            <Link to="/payment" className='link'>Payment</Link>
            <Link to="/contacts" className='link'>Contacts</Link>
          </div>  
          <input className='search'/>
          <img src={magnifier} alt='magnifier' className='magnifier'/>
          <img src={basket} alt='basket' className='basket'/>
          <button className='burger-button' onClick={()=> setOpen(!isOpen)}>
            <img src={burger} alt='menu'/>
          </button>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/delivery" element={<Delivery/>} />
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
