import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList";
/* import { productos } from "../Productos"; */
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'

const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    const {categoriaId} = useParams();

    useEffect(() => {
        
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'productos');
        if (categoriaId) {
            const queryFilter = query(queryCollection, where('categoria', '==', categoriaId))
            getDocs(queryFilter)
                .then(res => setItems(res.docs.map(producto => ({id: producto.id, ...producto.data()}))))
        } else {
            getDocs(queryCollection)
                .then(res => setItems(res.docs.map(producto => ({id: producto.id, ...producto.data()}))))
        }
    }, [categoriaId]);

    return (
        <div className="container">
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer;