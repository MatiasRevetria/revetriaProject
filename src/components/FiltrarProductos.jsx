import React from "react";
import { FaSearch } from "react-icons/fa"; // si querés usar un ícono

const FiltrarProductos = ({ filtro, setFiltro }) => {
  const handleChange = (event) => {
    setFiltro(event.target.value);
  };

  return (
    <div className="container my-4">
      <div className="input-group">
        <span className="input-group-text bg-white">
          <FaSearch />
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Buscar productos por nombre..."
          value={filtro}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default FiltrarProductos;
