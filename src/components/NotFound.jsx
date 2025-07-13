import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div >
        <div >
        </div>
        <h1>404</h1>
        <p >Página no encontrada</p>
        <p>
          Lo sentimos, la página que buscás no existe o fue movida.
        </p>
        <button onClick={() => navigate("/")} >
          Volver al inicio
        </button>
      </div>
    </div>
  );
};

export default NotFound;
