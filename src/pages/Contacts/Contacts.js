import React from 'react';
import  '..//Contacts/Contacts.css';
import '..//Home/Home.css'

import MapAddress from './AddressMap';

const Contacts = () => {


  return (
    <div className='body-contact'>
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
