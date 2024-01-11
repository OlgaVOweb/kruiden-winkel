import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import AboutUs from './AboutUs';
import Reviews from './Reviews';
import basket from './basket.png';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/" className='link'>Home</Link>
        <Link to="/products" className='link'>Products</Link>
        <Link to="/about" className='link'>About Us</Link>
        <Link to="/reviews" className='link'>Reviews</Link>
        <img src={basket} alt='basket'/>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/reviews" element={<Reviews/>}/>
      </Routes>
    </Router>
  );
}

export default App;
