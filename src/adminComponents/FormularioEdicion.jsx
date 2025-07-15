import React, { useEffect, useState } from "react";

const FormularioEdicion = ({ productoSeleccionado, onActualizar }) => {
  const [producto, setProducto] = useState(productoSeleccionado);

  useEffect(() => {
    setProducto(productoSeleccionado);
  }, [productoSeleccionado]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProducto({ ...producto, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onActualizar(producto);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded bg-light mt-4">
      <h3 className="mb-4">Editar Producto</h3>

      <div className="mb-3">
        <label className="form-label">ID:</label>
        <input
          type="number"
          name="id"
          value={producto.id || ""}
          className="form-control"
          readOnly
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Nombre:</label>
        <input
          type="text"
          name="nombre"
          value={producto.nombre || ""}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Precio:</label>
        <input
          type="number"
          name="precio"
          value={producto.precio || ""}
          onChange={handleChange}
          className="form-control"
          required
          min="0"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Stock:</label>
        <input
          type="number"
          name="stock"
          value={producto.stock || ""}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Imagen URL:</label>
        <input
          type="text"
          name="imagen"
          value={producto.imagen || ""}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Categoría:</label>
        <input
          type="text"
          name="categoria"
          value={producto.categoria || ""}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>

      <button type="submit" className="btn btn-primary w-100">
        Actualizar Producto
      </button>
    </form>
  );
};

export default FormularioEdicion;
