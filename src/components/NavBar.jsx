import React from "react";
import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <NavLink className="navbar-brand ps-5" to='/' >
                        <img
                            src="https://corporate.drinksandcommunity.com.ar/pub/media/logo/stores/6/logo_1.png"
                            height="50"
                            alt="Drinks and CO"
                            loading="lazy"
                        /></NavLink>
                        <div><b><NavLink to='/' className="text-reset text-decoration-none">Drinks & CO</NavLink></b></div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to='/categoria/Vinos' >Vinos</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to='/categoria/Cervezas' >Cervezas</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to='/categoria' >Contacto</NavLink>
                            </li>
                        </ul>
                    </div>
                    <CartWidget />
                </div>
            </nav>
        </div>
    )
}

export default NavBar;