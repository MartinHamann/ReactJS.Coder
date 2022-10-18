import React, { useState } from 'react';
import Form from './Form';
import { Link } from 'react-router-dom';

const Checkout = () => {
    const [orderId, setOrderId] = useState('');

    const handleId = (numeroDeOrden) => {
        setOrderId(numeroDeOrden);
    };

    if (orderId) {
        return (
            <h1>
                Gracias por tu compra, el número de seguimiento es:{' '}
                {orderId}
            </h1>
        );
    }

    return (
        <div>
            <Form handleId={handleId} />
            <Link to="/"><button>Seguir comprando</button></Link>
        </div>
    );
};

export default Checkout;