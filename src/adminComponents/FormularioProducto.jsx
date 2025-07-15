import { useState } from "react";

const FormularioProducto = ({ onAgregar }) => {
  const [producto, setProducto] = useState({
    nombre: "",
    precio: "",
    descripcion: "",
  });

  const [error, setError] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProducto({ ...producto, [name]: value });
  };

  const validarFormulario = () => {
    const nuevoError = {};
    if (!producto.nombre.trim()) {
      nuevoError.nombre = "El nombre es obligatorio.";
    }
    if (!producto.precio || producto.precio <= 0) {
      nuevoError.precio = "El precio debe ser mayor a 0.";
    }
    if (!producto.descripcion.trim() || producto.descripcion.length < 10) {
      nuevoError.descripcion =
        "La descripción debe tener al menos 10 caracteres.";
    }
    setError(nuevoError);
    return Object.keys(nuevoError).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validarFormulario()) {
      return;
    }
    onAgregar(producto);
    setProducto({
      nombre: "",
      precio: "",
      descripcion: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded bg-light mt-4">
      <h3 className="mb-4">Agregar Producto</h3>

      <div className="mb-3">
        <label className="form-label">Nombre</label>
        <input
          type="text"
          name="nombre"
          value={producto.nombre}
          onChange={handleChange}
          className="form-control"
          required
        />
        {error.nombre && <small className="text-danger">{error.nombre}</small>}
      </div>

      <div className="mb-3">
        <label className="form-label">Precio</label>
        <input
          type="number"
          name="precio"
          value={producto.precio}
          onChange={handleChange}
          className="form-control"
          required
          min="0"
        />
        {error.precio && <small className="text-danger">{error.precio}</small>}
      </div>

      <div className="mb-3">
        <label className="form-label">Descripción</label>
        <textarea
          name="descripcion"
          value={producto.descripcion}
          onChange={handleChange}
          className="form-control"
          required
        />
        {error.descripcion && (
          <small className="text-danger">{error.descripcion}</small>
        )}
      </div>

      <button type="submit" className="btn btn-success w-100">
        Agregar Producto
      </button>
    </form>
  );
};

export default FormularioProducto;
