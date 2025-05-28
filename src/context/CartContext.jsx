import { createContext, useState, useEffect } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    const [productos, setProductos] = useState([]);
    const [carga, setCarga] = useState(true);
    const [isAuthenticated, setIsAuthtenticated] = useState(false);

    const handlerAddToCart = (product) => {
    const existe = cart.find( item => item.id === product.id );
    if (existe){
        const actualizarCarrito = cart.map(item => item.id === product.id ? {...item, cantidad: item.cantidad + product.cantidad , item}: item);
        setCart(actualizarCarrito)
    }else{
        setCart([...cart, product])
    }
    };

    const handlerRemoveFromCart = (productToDelete) => {
    setCart(cart.filter((item) => item.id !== productToDelete.id))

    };

        useEffect(()=>{
        fetch('https://681d9331f74de1d219b03777.mockapi.io/productos')
            .then((respuesta) => respuesta.json())
            .then((datos) => {setProductos(datos) 
                            setCarga(false)})
            .catch((error) => {console.error('Error:', error)
                            setCarga(false)
            });

        },[]);


    return (
        <CartContext.Provider value={{cart,productos, carga, handlerAddToCart, handlerRemoveFromCart,isAuthenticated, setIsAuthtenticated}}>
            {children}

        </CartContext.Provider>
    )
}