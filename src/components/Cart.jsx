import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

const Cart = () => {

    const {cart, removeProduct} = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <>
        <p>No hay productos en el carrito</p>
        <Link to="/">Ir a comprar</Link>
      </>
    );
  }else
  

  return (
    <div className='container'>
        {cart.map((producto) => (
    <div key={producto.id} className='container text'>
        <div className='row justify-content-md-center border border-dark'>
            <div className='col-md-4'>
                <img src={producto.imagen} className="img-thumbnail" alt={producto.nombre} />
            </div>
            <div className='col-md-4'>
                <p>Producto: {producto.nombre}</p>
                <p>Cantidad: {producto.cantidad}</p>
                <p>Precio u.: ${producto.precio}</p>
                <p>Subtotal: ${producto.cantidad * producto.precio}</p>
                <button onClick={() => removeProduct(producto.id)}>Eliminar</button>
            </div>
        </div>
                </div>
        ))}
    </div>
  )
}

export default Cart