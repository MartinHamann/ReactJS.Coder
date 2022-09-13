import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({item}) => {
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
                <ItemCount stock={10} inicial={1} onAdd={0}/>
            </div>

        </div>
    </div>
  )
}

export default ItemDetail