import { addDoc, collection, getFirestore, serverTimestamp } from 'firebase/firestore';
import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';

const Form = ({ handleId }) => {
    const db = getFirestore();
    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');
    const { totalPrice, cart } = useContext(CartContext);
    const total = totalPrice();

    const handleSubmit = (e) => {
        e.preventDefault();
        const orden = {
            buyer: { nombre, telefono },
            date: serverTimestamp(),
            cart,
            total,
        };
        const refOrden = collection(db, 'orders');
        addDoc(refOrden, orden).then((res) => {
            handleId(res.id);
        });
    };

    const handleNombre = (e) => setNombre(e.target.value);

    const handleTelefono = (e) => setTelefono(e.target.value);

    return (
        <form action="" onSubmit={handleSubmit}>
            <input
                type="text"
                name="nombre"
                placeholder="Nombre Completo"
                value={nombre}
                onChange={handleNombre}
                required
            />
            <input
                type="number"
                name="telefono"
                placeholder="Telefono"
                value={telefono}
                onChange={handleTelefono}
            />
            <button>Enviar</button>
        </form>
    );
};

export default Form;