import React from "react";
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


const Home = ({cart,handlerAddToCart}) => {
    const countItem = cart.length
    return (
        <>
        <Header />
        <Nav countItem={countItem}/>
        <Main />
        <ProductList products={prodructList} addToCart={handlerAddToCart}/>
        <Cart cartItems={cart}/>
        <Gallery />
        <Formulario />
        <Footer />
        <Contador />
        </>
      )

}

export default Home