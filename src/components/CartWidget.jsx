import React from 'react'
import cart from '../assets/shoppingcart.png';

const CartWidget = () => {
  return (
    <div>
        <button type="button" className="btn btn-light"><img src={cart} width="40" alt="Carrito" /></button>
    </div>
  )
}

export default CartWidget;