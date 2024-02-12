import React from 'react';
import './cart.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
import { getCartItems, getTotalPrice } from '../../redux/cartSlice';

const Cart = () => {
  const cartItems = useSelector(getCartItems);
  const totalPrice = useSelector(getTotalPrice)

  return (
    <div className='main'> 
      <div className='cart__header'>
        <h2>Gratis bezorgd vanaf  € 50 </h2>
      </div>
      <div className='cart__container'>
        <div className='cart__yourProducts'>
          <h2>Jouw winkelmand</h2>
          {cartItems.map(cartItem => <CartItem cartItem={cartItem}/>)}
        </div>
      <div className='cart__total'>
        <div className='cart__total-adres'>
          <h2>Thuisbezorgd</h2>
        </div>
        <div className='cart__total-sum'>
          <h3>Besteloverzicht: € {totalPrice}</h3>
          <h3>Artikelen</h3>
        </div>
        <div className='cart__total-btnPay' >
          <button className='cart-btnPay'>Betalen</button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Cart;