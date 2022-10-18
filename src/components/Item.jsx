import React from "react";
import { Link } from "react-router-dom";

const Item = ({nombre, imagen, precio, id}) => {


    return (
        <div className="card">
            <Link to={`/item/${id}`}>
            <div className="d-flex justify-content-center"><img src={imagen} className="card-img-top w-25" alt={nombre} /></div>
            </Link>
            <div className="card-body">
                <h5 className="card-title text-center"><b>{nombre}</b></h5>
                <p className="card-text text-center">${precio}</p>
            </div>
            <button className="btn btn-success">
                <Link to={`/item/${id}`} className= "text-decoration-none text-reset">Ver detalles</Link>
            </button>
        </div>
    )
}

export default Item;