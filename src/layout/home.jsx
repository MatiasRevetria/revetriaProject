import React, {useEffect,useState} from "react";
import Header from '../components/Header'
import Nav from '../components/Nav'
import Main from '../components/Main'
import Gallery from '../components/Gallery'
import Footer from '../components/Footer'
import Contador from '../components/Contador'
import Formulario from "../components/Formulario"
import { prodructList } from "../utils/data";
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";


const Home = ({cart,handlerAddToCart,handlerRemoveFromCart}) => {
    const countItem = cart.length;
    const [productos, setProductos] = useState([]);

    useEffect(()=>{
      fetch('https://681d9331f74de1d219b03777.mockapi.io/productos')
        .then((respuesta) => respuesta.json())
        .then((datos) => setProductos(datos))
        .catch((error) => console.error('Error:', error));

    },[]);

    return (
        <>
        <Header />
        <Nav countItem={countItem}/>
        <Main />
        <ProductList products={productos} addToCart={handlerAddToCart} removeFromCart={handlerRemoveFromCart}/>
        <Cart cartItems={cart}/>
        <Gallery />
        <Formulario />
        <Footer />
        <Contador />
        </>
      )

}

export default Home