
import tea from '..//..//image/tea.png';
import spice from '..//..//image/spice.png';
import './Home.css';
import oolong from '..//..//imageData/oolong.jpg';
import banner1 from '..//..//image/banner1.png';
import banner2 from '..//..//image/banner2.png';
import Contacts from '../Contacts/Contacts';

const Home = () => {
  return (
    <div className='home-page'>
    <div className="main-home">
      <div className='block-first'>
     <img src={tea} className='img-main' alt='tea' />
     <div className='main-text'>
     <p className='big-text'>TURAN KRUIDEN EN THEE</p>
     <p className='mini-text  top'>WIJ VERKOOP AL 16 JAAR THEE EN KRUIDEN</p>

<p className='mini-text'>DAAROM GARANDEREN WIJ DE KWALITEIT!</p>
     </div>
     <img src={spice} className='img-main' alt='spice' />
     </div>
    </div>

    <div className='block-second'>
      <div className='bl-second'>
      <div className='bestsellers'>
        <div className='best-text'>
          <p className='one-text'>Bestsellers</p>
          <p className='two-text'>Legendary products won love our clients</p>
          <button className='btn-bestsellers'>Look</button>
</div>
<div className='card-bestsellers  width-mini'>
                    <img className="bestsellers-img" src={oolong} alt="prod"/>
                    <div className="product__card-content ">
                        <h4 className='price-best'>$ 2 </h4>
                        <button className='more'>Read more</button>
                    </div>
                                    </div>
                                    <div className='card-bestsellers width-mini'>
                    <img className="bestsellers-img " src={oolong} alt="prod"/>
                    <div className="product__card-content">
                        <h4 className='price-best'>$ 2 </h4>
                        <button className='more'>Read more</button>
                    </div>
                                    </div>
                                    <div className='card-bestsellers width-mini none'>
                    <img className="bestsellers-img " src={oolong} alt="prod"/>
                    <div className="product__card-content ">
                        <h4 className='price-best'>$ 2 </h4>
                        <button className='more'>Read more</button>
                    </div>
                                    </div>
        </div>
      </div>
    </div>

    <div className='block-third'>
      <div className='block-3'>
    <img className="banner-img" src={banner1} alt="tea"/>
    <div className='enjoy-main-text'>
          <p className='enjoy-text'>Enjoy the variety of flavors of our tea</p>
          <p className='collection-text'>Our store has the most unique collection of tea so that you can enjoy the beneficial properties and unique tastes.</p>
          <button className='btn-bestsellers enjoy-btn'>Products</button>
</div>
</div>
    </div>
    <div className='block-third'>
      <div className='block-3'>
    
    <div className='range-main-text'>
          <p className='enjoy-text'>A wide range of</p>
          <p className='collection-text-two'>Our wide range of herbs will not leave you without a purchase.
After all, your dishes will acquire incredible notes and taste.</p>
          <button className='btn-bestsellers enjoy-btn'>Products</button>
</div>
<img className="banner-spice-img" src={banner2} alt="spice"/>
</div>
    </div>
    <Contacts/>
    </div>
  )
}

export default Home;