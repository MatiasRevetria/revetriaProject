import React, { useState } from "react";

export default function Formulario() {

    const [nombre, setNombre] = useState("");

    const manejarEnvio = (evento) => {
        evento.preventDefault();
        alert(`Formulario enviado por: ${nombre}`);
        setNombre(""); // Limpiar el campo de texto después de enviar
    }


    return(
        <form onSubmit={manejarEnvio}>
            <input type="text" value={nombre} onChange={(e)=> setNombre(e.target.value)} placeholder="Ingresa tu nombre" />
            <button type="submit">Enviar</button>
        </form>
    )
}