import React from "react";
import { Link } from "react-router-dom";

const Nav = ({countItem}) => {
    return (
        <nav style={{backgroundColor:"#333",color:"white", padding:"10px"}}>
            <ul>
                <Link to={'/Home/'}>Home</Link>
                <Link to={'/Acerca-de-mi/'}>Acerca de</Link>
                <li>Contacto</li>
                <li>Carrito: {countItem}</li>
            </ul>
        </nav>
    )
}

export default Nav