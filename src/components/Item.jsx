import React from "react";
import ItemCount from "./ItemCount";

const Item = ({nombre, imagen, precio}) => {
    return (
        <div className="card">
            <div className="d-flex justify-content-center"><img src={imagen} className="card-img-top w-25" alt={nombre} /></div>
            <div className="card-body">
                <h5 className="card-title text-center"><b>{nombre}</b></h5>
                <p className="card-text text-center">${precio}</p>
            </div>
        <ItemCount />
        </div>
    )
}

export default Item;