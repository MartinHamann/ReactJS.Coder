import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore'

const ItemDetailContainer = () => {
    
    const [item, setItem] = useState({})

    const {itemId} = useParams();

    useEffect(() =>{
        const querydb = getFirestore();
        const queryDoc = doc(querydb, 'productos', itemId);
        getDoc(queryDoc)
            .then(res => setItem({id: res.id, ...res.data()}))
    }, [itemId])
    return (
        <div>
            <ItemDetail item= {item}/>
        </div>
        
  )
}

export default ItemDetailContainer