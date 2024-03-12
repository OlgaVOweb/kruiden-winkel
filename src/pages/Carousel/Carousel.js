
import React, {useState } from 'react';
import './Carousel.css';
import { dataProducts } from '../../data/dataProducts';
import arrowleft from '..//..//image/arrow-left.png'
import arrowright from '..//..//image/arrow-right.png'
import AboutProduct from '../AboutProduct/AboutProduct';

const cardsData = [
    { id: 1, productName: 'Knoflook Zout', image: 'imageData/knoflookZout.png', description: '' },
   { id: 2, productName: 'Paprika zoet', image: 'imageData/paprikazoet.png' },
   { id: 3, productName: 'Kerry Masala', image: 'imageData/kerryMasala.png' },
   { id: 4, title: 'Daragon Blad', image: 'imageData/daragonBlad.png' },
   { id: 5, title: 'Bami Kruiden', image: 'imageData/bamiKruiden.png' },
   { id: 6, title: 'Basilicum', image: 'imageData/basilicum.png' },
   { id: 7, title: 'Karwij zaad', image: 'imageData/karwijZaad.png' },
   { id: 8, title: 'MaanZaad', image: 'imageData/maanZaad.png' },
   { id: 9, title: 'Cardomon gemalen', image: 'imageData/cardomonGemalen.png' },
   { id: 10, title: 'Bami Kruiden', image: 'imageData/bamiKruiden.png' },
   { id: 11, title: 'Basilicum', image: 'imageData/basilicum.png' },
   { id: 12, title: 'Kerry Masala', image: 'imageData/kerryMasala.png' },
   { id: 13, title: 'Basilicum', image: 'imageData/basilicum.png' },
   { id: 14, title: 'Karwij zaad', image: 'imageData/karwijZaad.png' }
   
 ];
 
 const Carousel = () => {

   const [startIndex, setStartIndex] = useState(0);
   const showCards = () => {
    if (window.innerWidth < 600) {
      return cardsData.slice(startIndex, startIndex + 1);
    } else if (window.innerWidth < 885) {
      return cardsData.slice(startIndex, startIndex + 2);
    } else {
      return cardsData.slice(startIndex, startIndex + 3);
    }
  };
 
  const nextCards = () => {
    setStartIndex((prevIndex) => (prevIndex + showCards().length) % cardsData.length);
  };
  const prevCards = () => {
    setStartIndex((prevIndex) => (prevIndex + showCards().length) % cardsData.length);
  };


  return (
    <div>
        <div className='block-second'>
           <p className='one-text'>Bestsellers</p>
           <div className='carousel' >
    <button className='arrow' onClick={prevCards}><img className='arrowleft' src={arrowleft} alt='arrow'/></button> 
              {showCards().map((card) => (

        <div className='card-bestsellers width-mini' key={card.id} >
           <img src={card.image} alt={card.title} className='card-best'/>
                           <div className="product__card-content">
                              <h4   className="product__card-header">{card.productName} </h4>
                              <p className="product__card-price">€ 1.75</p>
                           </div> 
      </div>
              
      ))}
  <button className='arrow' onClick={nextCards}><img className='arrowright' src={arrowright} alt='arrow' /></button>
   </div>
    </div>
  
</div>
  );

 };
 
 export default Carousel;
 
 

