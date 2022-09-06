import React from "react";
import { useState } from "react";

const ItemCount = ({stock, inicial, onAdd}) => {
    const [cantidad, setCantidad] = useState(inicial);
    const [itemStock, setItemStock] = useState(stock);
    const [itemAdd, setItemAdd] = useState(onAdd);

    const restarCantidad = (valor) => {
        if (valor > 0) {
            setCantidad(valor);
        }
    }

    const aumentarCantidad = (valor) => {
        if (valor <= itemStock) {
            setCantidad(valor);
        }
    }

    const agregarProductos = () => {
        if (cantidad <= itemStock) {
            setItemStock(itemStock - cantidad);
            setItemAdd(itemAdd + cantidad);
        }   
    }

    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-2">
                    <p className="text-center">Nombre y marca</p>
                    <div className="input-group">
                        <input type="button" className="btn btn-secondary" value="-" onClick={() => {restarCantidad(cantidad - 1)}} />
                        <input type="text" className="form-control" value={cantidad} onChange={() => {}} />
                        <input type="button" className="btn btn-secondary" value="+" onClick={() => {aumentarCantidad(cantidad + 1)}} />
                    </div>
                    <div className="d-grid gap-2 py-3">
                        <input type="button" className="btn btn-success" value="Agregar" onClick={() => {agregarProductos()}} />       
                    </div>
                    <p>Agregaste un total de {itemAdd} unidades al carrito</p>
                </div>
            </div>            
        </div>   
    )
};

export default ItemCount;