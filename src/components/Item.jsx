import React from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { useState } from "react";

const Item = ({nombre, imagen, precio, id}) => {

  const [endPurchase, setEndPurchase] = useState(false);
  const onAdd = (cantidad) => {
    setEndPurchase(true);
    }

    return (
        <div className="card">
            <Link to={`/item/${id}`}>
            <div className="d-flex justify-content-center"><img src={imagen} className="card-img-top w-25" alt={nombre} /></div>
            </Link>
            <div className="card-body">
                <h5 className="card-title text-center"><b>{nombre}</b></h5>
                <p className="card-text text-center">${precio}</p>
            </div>
        {endPurchase
                  ? <Link to= '/cart'><input type="button" className="btn btn-success" value="Compraste!"></input> </Link>
                  : <ItemCount stock={Item.stock} inicial={1} onAdd={onAdd} />}
        </div>
    )
}

export default Item;