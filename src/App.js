
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home/Home';
import Delivery from './pages/Delivery/Delivery';
import basket from './icons/basket.png';
import magnifier from './icons/magnifier.png';
import burger from './icons/burger.png';
import Contacts from './pages/Contacts/Contacts';
import Footer from './Footer';
import { useState} from 'react';
import Products from './pages/Products/Products';
import Cart from './pages/Cart/Cart';
import Top from './pages/Top/Top';
import { getTotalQuantity } from './redux/cartSlice';
import { useSelector } from 'react-redux';


function App() {
  const [isOpen, setOpen] = useState();
  const totalQuantity = useSelector(getTotalQuantity);

  const closeMobileMenu = () => {
    setOpen(false);
  };

  return (
    <Router>
      <nav>
        <div className='header'>
          <p className='logo'>TURAN KRUIDEN</p>

          <div className='header-left-part'>
            <div className={`links ${isOpen ? "active" : ""}`}>
              <Link to="/" className='link' onClick={closeMobileMenu}>Home</Link>
              <Link to="/products" className='link' onClick={closeMobileMenu}>Products</Link>
              <Link to="/delivery" className='link' onClick={closeMobileMenu}>Delivery</Link>
              <Link to="/contacts" className='link' onClick={closeMobileMenu}>Contacts</Link>
            </div>  
            <input className='search'/>
            <img src={magnifier} alt='magnifier' className='magnifier'/>
            <Link to="/cart">
              <div className='cart-box'>
                <img src={basket} alt='basket' className='basket'/>
                {totalQuantity > 0 && <span className='total-quantity'>{totalQuantity}</span>}
              </div>
            </Link>
            
            <button className='burger-button' onClick={()=> setOpen(!isOpen)}>
              <img src={burger} alt='menu'/>
            </button>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/delivery" element={<Delivery/>} />
        <Route path="/contacts" element={<Contacts/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      <Footer/>
      <Top/>
    </Router>

  );
}

export default App;
