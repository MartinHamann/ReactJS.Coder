import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import {productos} from './Productos';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    
    const [item, setItem] = useState({})

    const {itemId} = useParams();

    useEffect(() =>{
        const getProduct = new Promise((resolve) => {
            setTimeout(() => {
                /* const producto = productos.find((producto) => producto.id === 1) */
                resolve(productos);
            }, 2000);
        });
        
        getProduct.then(respuesta => setItem(respuesta.find(productos => productos.id === itemId)));
    }, []);
    return (
        <div>
            <ItemDetail item= {item}/>
        </div>
        
  )
}

export default ItemDetailContainer