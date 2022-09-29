import React, {useState} from 'react'
import ItemCount from './ItemCount'
import { Link } from "react-router-dom";
import { useCartContext } from '../context/CartContext';

const ItemDetail = ({item}) => {
  
  const [endPurchase, setEndPurchase] = useState(false);
  
  const {addToCart} = useCartContext();

  const onAdd = (cantidad) => {
    setEndPurchase(cantidad);
    addToCart(item, cantidad);
  }
  return (
    <div className='container text'>
        <div className='row justify-content-md-center'>
            <div className='col-md-4'>
                <img src={item.imagen} alt={item.nombre} />
            </div>
            <div className='col-md-4'>
                <h2>{item.nombre}</h2>
                <p>{item.descripcion}</p>
                <br />
                <h5>${item.precio}</h5>
                {endPurchase
                  ? <Link to= '/cart'><input type="button" className="btn btn-success" value="Compraste!"></input> </Link>
                  : <ItemCount stock={item.stock} inicial={1} onAdd={onAdd} />}
            </div>
        </div>
    </div>
  )
}

export default ItemDetail