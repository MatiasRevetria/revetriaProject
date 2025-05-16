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
import loading from "../assets/Loading_icon.gif"

const Home = ({cart,handlerAddToCart,handlerRemoveFromCart}) => {
    const countItem = cart.length;
    const [productos, setProductos] = useState([]);
    const [carga, setCarga] = useState(true);

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
        <>
        <Header />
        <Nav countItem={countItem}/>
        <Main />
        {
          carga ? <img src={loading} alt="loading" /> :  <ProductList products={productos} addToCart={handlerAddToCart} removeFromCart={handlerRemoveFromCart}/>
        }
      
        <Cart cartItems={cart}/>
        <Gallery />
        <Formulario />
        <Footer />
        <Contador />
        </>
      )

}

export default Home