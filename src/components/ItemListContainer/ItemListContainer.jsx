import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemList from "../ItemList";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const productos = [
            {"id":1, "nombre":"Cerveza Patagonia Amber Lager", "descripcion":"", "imagen":"https://http2.mlstatic.com/D_NQ_NP_816489-MLA48771879551_012022-W.webp", "precio":300},
            {"id":2, "nombre":"Cerveza Patagonia 24.7", "descripcion":"", "imagen":"https://http2.mlstatic.com/D_NQ_NP_698856-MLA48771253602_012022-W.webp", "precio":300},
            {"id":3, "nombre":"Cerveza Patagonia Bohemian Pilsener", "descripcion":"", "imagen":"https://http2.mlstatic.com/D_NQ_NP_929580-MLA48772859241_012022-W.webp", "precio":300},
            {"id":4, "nombre":"Cerveza Patagonia Weisse", "descripcion":"", "imagen":"https://http2.mlstatic.com/D_NQ_NP_675562-MLA51233532477_082022-W.webp", "precio":300},
            {"id":5, "nombre":"Cerveza Stella Artois Alcohol Free", "descripcion":"", "imagen":"https://http2.mlstatic.com/D_NQ_NP_738684-MLA48622059323_122021-W.webp", "precio":280},
            {"id":6, "nombre":"Cerveza Stella Artois Petite", "descripcion":"", "imagen":"https://http2.mlstatic.com/D_NQ_NP_712390-MLA50946763207_072022-W.webp", "precio":220}
        ];

        const getProductos = new Promise((resolve) => {
            setTimeout(() => {
                resolve(productos);
            }, 2000);
        });

        getProductos.then((respuesta) => {
            setItems(respuesta);
        });
    }, []);

    return (
        <div className="container">
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer;