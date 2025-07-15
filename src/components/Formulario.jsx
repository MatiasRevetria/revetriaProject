import React, { useState } from "react";
import Swal from "sweetalert2";

export default function Formulario() {

    const [nombre, setNombre] = useState("");

    const manejarEnvio = (evento) => {
        evento.preventDefault();
        Swal.fire({
            title: `Comentario enviado por: ${nombre}`,
            icon: "success",
            draggable: true
        });
        setNombre(""); // Limpiar el campo de texto después de enviar
    }


    return(
    <div>
        <h1>Algo que decir?</h1>
        <form onSubmit={manejarEnvio}>
        
        <div class="mb-3">
            <label for="nombre" class="form-label">Nombre</label>
            <input type="text"class="form-control" value={nombre} onChange={(e)=> setNombre(e.target.value)} id="nombre" placeholder="Ingresa tu nombre" required/>
        </div>
        
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Direccion de correo</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>
        <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Algun comentario?</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" required></textarea>
        </div>

        <button className="btn btn-outline-secondary" type="submit">Enviar</button>
    </form>
    </div>
    )
}