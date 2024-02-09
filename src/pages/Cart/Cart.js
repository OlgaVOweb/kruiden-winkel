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
      <h2>Your Cart</h2>
      <h3>TOTAL: € {totalPrice}</h3>
      {cartItems.map(cartItem => <CartItem cartItem={cartItem}/>)}
    </div>
  )
}

export default Cart;