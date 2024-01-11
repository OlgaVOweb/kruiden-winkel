import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import AboutUs from './AboutUs';
import Contacts from './Contacts';
import './App.css';

function App() {
  return(
  <Router>
      <nav>
        
        <Link to="/" className='link'>Home</Link>
        <Link to="/products" className='link'>Products</Link>
        <Link to="/about" className='link'>About Us</Link>
        <Link to="/contacts" className='link'>Contacts</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/contacts" element={<Contacts/>}/>
      </Routes>
    </Router>
    )
}

export default App;
