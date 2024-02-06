import React from 'react';
import  '..//Contacts/Contacts.css';
 import local from '..//..//image/local.png'

import MapAddress from './AddressMap';

const Contacts = () => {


  return (
    <div>
    <div className='block-contacts'>
      <div className='contact-text'>
        <p className='text-cont'>We are waiting for you in our stores! </p>
        <p className='text-cont top-text'> We will be happy to help you choose</p>
        </div>
        <div className='arrow'>
        <div className="arrow-down">
    <span></span>
    <span></span>
    <span></span>
    </div>
    </div> 

    <MapAddress/>
    </div>
    </div>
  );
}

export default Contacts;
