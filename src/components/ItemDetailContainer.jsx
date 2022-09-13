import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import {productos} from './Productos';

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})

    useEffect(() =>{
        const getProduct = new Promise((resolve) => {
            setTimeout(() => {
                const producto = productos.find((producto) => producto.id === 1)
                resolve(producto);
            }, 2000);
        })

        getProduct.then((respuesta) => {
            setItem(respuesta);
        });
    }, []);
    return (
        <div>
            <ItemDetail item= {item}/>
        </div>
        
  )
}

export default ItemDetailContainer