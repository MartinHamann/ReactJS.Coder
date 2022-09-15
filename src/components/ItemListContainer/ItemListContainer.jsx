import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList";
import { productos } from "../Productos";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    const {categoriaId} = useParams();

    useEffect(() => {
        
        const getProductos = new Promise((resolve) => {
            setTimeout(() => {
                resolve(productos);
            }, 2000);
        });
        if (categoriaId) {
            getProductos.then(respuesta => setItems(respuesta.filter(productos => productos.categoria === categoriaId)));
        } else { 
            getProductos.then(respuesta => {
                setItems(respuesta);
            });
        }
    }, [categoriaId]);

    return (
        <div className="container">
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer;