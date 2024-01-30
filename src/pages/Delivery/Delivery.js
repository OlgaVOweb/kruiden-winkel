import React from 'react';
import car from "..//..//image/car.png"
import "./Delivery.css"
import Address from './Address';
import AddressForm from './AddressForm';



const Delivery = () => {
    
  return (
    <div className='body-delivery'>
    <div className='body'>
     <img className='car' src={car} alt="Car" />

<div className='choose'>Choose delivery </div>
  <div className='form-delivery'>
  <Address/>
<AddressForm/>
  </div>
</div>
</div>
)
}
export default Delivery;