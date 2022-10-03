import React from 'react'
import cart from '../assets/shoppingcart.png';
import { useContext } from 'react';
import {CartContext} from '../context/CartContext'
import { Link } from 'react-router-dom';

const CartWidget = () => {

  const {totalCart} = useContext(CartContext);

  return (
    <Link to='/Cart'>
    <div className='text-decoration-none fw-bold'>
        <button>
        <span><img src={cart} width="25" alt="Carrito" /></span>
        <span>{totalCart()}</span>
        </button>
    </div>
    </Link>
  )
}

export default CartWidget;