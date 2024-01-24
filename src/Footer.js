import instagram from './icons/instagram.png';
import whatsapp from './icons/whatsapp.png';

const Footer = () => {
  return (
    <footer>
      <div className='footer-container'>
        <div className="top-line">
          <p>TURAN KRUIDEN</p>
          <div className="social-links">
            <img src={instagram} alt='instagram'/>
            <img src={whatsapp} alt='whatsapp'/>
          </div>
        </div>

        <div className="bottom-line">
          <p>&copy; 2023 Все права защищены</p>
          <p>Политика конфиденциальности</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;