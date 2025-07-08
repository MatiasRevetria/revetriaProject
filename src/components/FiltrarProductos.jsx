import React  from "react";


const FiltrarProductos = ({ filtro, setFiltro}) => {

    const handleChange = (event)=>{
    setFiltro(event.target.value)
    }

  return (
    <input type="text" placeholder="Buscar productos..." value={filtro} onChange={handleChange} className="input-buiscador">
    </input>
  )
}

export default FiltrarProductos