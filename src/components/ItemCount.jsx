import React from "react";
import { useState, useEffect } from "react";

export const ItemCount = ({inicial, stock , onAdd}) => {
    const [count, setCount] = useState(parseInt(inicial));

    const disminuir = () => {
        setCount(count -1 );
    }

    const aumentar = () => {
        setCount(count +1 );
    }

    useEffect(() => {
        setCount(parseInt(inicial));
    }, [inicial]) 

    return (
        <div className="container py-5">
            <div className="row">
                <div className="col">
                    <div className="input-group">
                        <input type="button" disabled={count <= 1} className="btn btn-secondary" value="-" onClick={disminuir} />
                        <input type="text" className="form-control" value={count} onChange={() => {}} />
                        <input type="button" disabled={count >= stock} className="btn btn-secondary" value="+" onClick={aumentar} />
                    </div>
                    <div className="d-grid gap-2 py-3">
                        <input type="button" className="btn btn-success" value="Agregar" onClick={() => onAdd(count)} />       
                    </div>
                    {/* <p>Agregaste un total de {count} unidades al carrito</p> */}
                </div>
            </div>            
        </div>   
    )
};

export default ItemCount;