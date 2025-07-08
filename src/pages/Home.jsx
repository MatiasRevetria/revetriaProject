import React, {useEffect,useState} from "react";
import Header from '../components/Header'
import Nav from '../components/Nav'
import Main from '../components/Main'
import Footer from '../components/Footer'
import Formulario from "../components/Formulario"
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";
import loading from "../assets/Loading_icon.gif"
import "../components/styles/home.css"
import WhatsAppButton from "../components/WhatsAppButton";
import FiltrarProductos from "../components/FiltrarProductos";

const Home = ({cart,handlerAddToCart,handlerRemoveFromCart}) => {
    const countItem = cart.length;
    const [productos, setProductos] = useState([]);
    const [carga, setCarga] = useState(true);
    const [filtro, setFiltro] = useState('')


    useEffect(()=>{
      fetch('https://681d9331f74de1d219b03777.mockapi.io/productos')
        .then((respuesta) => respuesta.json())
        .then((datos) => {setProductos(datos) 
                          setCarga(false)})
        .catch((error) => {console.error('Error:', error)
                           setCarga(false)
        });

    },[]);

    const productosFiltrados = productos.filter((producto)=> producto.nombre.toLowerCase().includes(filtro.toLowerCase()))

    return (
        <>
        <Nav countItem={countItem}/>
        <Main />
        <FiltrarProductos filtro={filtro} setFiltro={setFiltro}/>
        {
          carga ? <img src={loading} alt="loading" /> :  <ProductList products={productosFiltrados} addToCart={handlerAddToCart} removeFromCart={handlerRemoveFromCart}/>
        }
        <Cart cartItems={cart} handlerRemoveFromCart={handlerRemoveFromCart}/>
        <WhatsAppButton/>
        <Formulario />
        <Footer />
        </>
      )

}

export default Home