import React, { useState, useEffect, useContext } from "react";
import FormularioProducto from "../components/FormularioProducto";
import FormularioEdicion from "../components/FormularioEdicion";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Admin = () => {
    const {setIsAuth} = useContext(CartContext)
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [seleccionado, setSeleccionado] = useState(null)
    const [open, setOpen] = useState(false);
    const [openEditor, setOpenEditor] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        fetch("https://681d9331f74de1d219b03777.mockapi.io/productos")
            .then((response) => response.json())
            .then((data) => {
                setTimeout(() => {
                    setProductos(data);
                    setLoading(false);
                }, 2000);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setError(true);
                setLoading(false);
            });
    }, []);

    const cargarProductos = async () =>{
        try{
            const response = await fetch("https://681d9331f74de1d219b03777.mockapi.io/productos");
            const data = await response.json()
            setProductos(data);
        }catch(err){
            console.log('Error al cargar los productos',err);
        };
    };

    const agregarProducto = async (producto) =>{
        try{
            const respuesta = await fetch('https://681d9331f74de1d219b03777.mockapi.io/productos',{
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(producto)
        })
        if(!respuesta.ok){
            throw new Error('Error al agregar producto')
        }
        const data = await respuesta.json()
        alert('Producto agregado correctamente')
        cargarProductos()
        setOpen(false)
        }catch(error){
            console.log(error.message);
        }
    }

    const actualizarProducto = async (producto) => {
        try {
          const response = await fetch(`https://681d9331f74de1d219b03777.mockapi.io/productos/${producto.id}`, {
            method: "PUT",
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(producto)
            });
        if(!response.ok)throw Error ('Error al actualizar el producto');
          const data = await response.json() 
          alert('Producto actualizado correctamente');
          setOpenEditor(false)
          setSeleccionado(null)
          cargarProductos();
        } catch (error) {
            console.log('Error al querer actualizar el producto', error);
        };
    };

    const eliminarProducto = async (id) => {

        const confirmar = window.confirm('Estas seguro de eliminar este producto?');
        if (confirmar){
            try{
                const response = await fetch(`https://681d9331f74de1d219b03777.mockapi.io/productos/${id}`, {method: "DELETE",});
                if (!response.ok)throw Error('Error al eliminar el producto');
                alert('Producto eliminado correctamente');
                cargarProductos()
            }   
            catch(error){
                console.log('Error al querer eliminar el producto', error);
            };
        };
    };


    return (
        <div className="container">
            {loading ? (
                <p>Cargando...</p>
            ) : (
                <>
                    <nav>
                        <ul className="nav">
                            <li className="navItem">
                                <button className="navButton">
                                    <i className="fa-solid fa-right-from-bracket"></i>
                                </button>
                            </li>
                            <li className="navItem">
                                <a href="/admin">Admin</a>
                            </li>
                        </ul>
                    </nav>
                    <h1 className="title">Panel Administrativo</h1>

                    <ul className="list">
                        {productos.map((product) => (
                            <li key={product.id} className="listItem">
                                <img
                                    src={product.imagen}
                                    alt={product.nombre}
                                    className="listItemImage"
                                />
                                <span>{product.nombre}</span>
                                <span>${product.precio}</span>
                                <div>
                                    <button className="editButton" onClick={()=>{
                                        setOpenEditor(true)
                                        setSeleccionado(product)
                                    }}>Editar</button>

                                    <button className="deleteButton" onClick={()=> eliminarProducto(product.id)}>Eliminar</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </>
            )}
            <button onClick={()=> setOpen(true)}>Agregar producto nuevo</button>
                {open && (<FormularioProducto onAgregar={agregarProducto}/>)}
                {openEditor && (<FormularioEdicion productoSeleccionado={seleccionado} onActualizar={actualizarProducto}/>)}
        </div>
    );
};

export default Admin;
