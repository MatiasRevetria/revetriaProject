import { Children } from "react";
import { createContext, useState, useEffect, useNavigate, useContext  } from "react";
import { CartContext } from "./CartContext";

export const AdminContext = createContext();

export const AdminProvider = ({children}) => {
    const {setIsAuth} = useContext(CartContext)
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [seleccionado, setSeleccionado] = useState(null)
    const [open, setOpen] = useState(false);
    const [openEditor, setOpenEditor] = useState(false)
    const navigate = useNavigate

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
            <AdminContext.Provider value={{productos,loading,open,setOpen,seleccionado,setSeleccionado,agregarProducto,eliminarProducto,actualizarProducto}}>
                {children}
            </AdminContext.Provider>
    )
}

