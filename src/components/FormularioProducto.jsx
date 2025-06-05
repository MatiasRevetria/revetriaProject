import {useState} from 'react'

const FormularioProducto = ({onAgregar}) => {
    const [producto,setProducto] = useState({
        nombre:'',
        precio:'',
        descripcion:''
    });
    const [error,setError] = useState({})

    const handleChange = (event)=>{
        const {name, value} = event.target
        setProducto({...producto, [name]:value})
    }

    const validarFormulario = () => {
    const nuevoError = {};
        if (!producto.nombre.trim()) {
            nuevoError.nombre = 'El nombre es obligatorio.';
        }
        if (!producto.precio || producto.precio <= 0) {
            nuevoError.precio = 'El precio debe ser mayor a 0.';
        }
        if (!producto.descripcion.trim() || producto.descripcion.length < 10) {
            nuevoError.descripcion = 'La descripción debe tener al menos 10 caracteres.';
        }
        setError(nuevoError);
        return Object.keys(nuevoError).length === 0;
    };

    const handleSubmit = (event) =>{
        event.preventDefault()
        if (!validarFormulario()) {
            return;
        }
        onAgregar(producto)
        setProducto({
        nombre:'',
        precio:'',
        descripcion:''
    })
    }

  return (
    <form onSubmit={handleSubmit}>
        <h2>Agregar producto</h2>
        <div>
            <label>Nombre</label>
            <input type="text" name="nombre" value={producto.nombre} onChange={handleChange} required />
        </div>
        <div>
            <label>Precio:</label>
            <input type="number" name='precio' value={producto.precio} onChange={handleChange} required min="0"/> {error.precio && <p style={{ color: 'red' }}>{error.precio}</p>}
        </div>
        <div>
            <label>Descripción:</label>
            <textarea
                name="descripcion"
                value={producto.descripcion}
                onChange={handleChange}
                required
                />
            {error.descripcion && <p style={{ color: 'red' }}>{error.descripcion}</p>}
        </div>
        <button type="submit">Agregar Producto</button>
    </form>
  )
}

export default FormularioProducto
