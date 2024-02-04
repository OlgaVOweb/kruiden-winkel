

import React, { useState } from 'react';
import AddressTwo from './AddressTwo';
import AddressThird from './AddressThird';
import AddressFour from './AddressFour';
import AddressFive from './AddressFive';
import  '..//Contacts/Contacts.css';
import local from '..//..//image/local.png'

const Contacts = () => {
  const [showMap, setShowMap] = useState(false);

  const handleButtonClick = () => {
    setShowMap(true);
  }

  return (
    <div>
    <div className='block-contacts'>
      <div className='contact-text'>
        <p className='text-cont'>Ahfjkhljl;jjhghghgkhk</p>
        </div>
        <div className='arrow'>
        <div className="arrow-down">
                 <span></span>
    <span></span>
    <span></span>
    </div>
    </div> 
      <button className='btn-map' onClick={handleButtonClick}><img src={local} alt="local" className='local' width={16} height={18}/>Donderdag Zaandam Rozengracht (8.00-16.30)</button>
      {showMap && (
                <div className='map'>
          <iframe
            width="550"
            height="400"
                        src={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2432.241674246313!2d4.816874176223277!3d52.438536742258144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5fd5e7ce5d885%3A0x92a1745cecbb621e!2sStreet%20market%20Rozengracht!5e0!3m2!1sru!2sby!4v1706791568207!5m2!1sru!2sby" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"'}
            allowFullScreen
            title="Google Map" className='map-img'
          ></iframe>
        </div>
              )}

      <AddressTwo/>
      <AddressThird/>
      <AddressFour/>
      <AddressFive/>
    </div>
    </div>
  );
}

export default Contacts;
