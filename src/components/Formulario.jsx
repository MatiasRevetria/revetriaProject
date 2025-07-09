import React, { useState } from "react";
import Swal from "sweetalert2";

export default function Formulario() {

    const [nombre, setNombre] = useState("");

    const manejarEnvio = (evento) => {
        evento.preventDefault();
        Swal.fire({
            title: `Formulario enviado por: ${nombre}`,
            icon: "success",
            draggable: true
        });
        setNombre(""); // Limpiar el campo de texto después de enviar
    }


    return(
        <form onSubmit={manejarEnvio}>
            <input type="text" value={nombre} onChange={(e)=> setNombre(e.target.value)} placeholder="Ingresa tu nombre" />
            <button type="submit">Enviar</button>
        </form>
    )
}