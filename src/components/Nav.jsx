import React from "react";

const Nav = ({countItem}) => {
    return (
        <nav style={{backgroundColor:"#333",color:"white", padding:"10px"}}>
            <ul>
                <li>Inicio</li>
                <li>Acerca de</li>
                <li>Contacto</li>
                <li>Carrito: {countItem}</li>
            </ul>
        </nav>
    )
}

export default Nav