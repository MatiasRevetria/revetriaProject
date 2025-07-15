import React, {useContext} from "react"
import "./App.css"
import Home from "./pages/Home.jsx"
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList.jsx";
import NotFound from "./components/NotFound.jsx";
import loading from "./assets/Loading_icon.gif"
import DetallesProducto from "./components/detallesProducto.jsx"
import Login from "./pages/Login.jsx";
import Admin from "./pages/Admin.jsx";
import RutaProtegidas from "./auth/RutasProtegidas.jsx";
import { CartContext } from "./context/CartContext.jsx";
import AcercaDe from "./pages/AcercaDe.jsx";

function App() {

  const {cart,productos, carga, handlerAddToCart, handlerRemoveFromCart,isAuthenticated, setIsAuthenticated, handleComprar} = useContext(CartContext);

  return (
    <>
    <Router>
    <Routes>

      <Route path="/home" element={ <Home cart={cart} handlerAddToCart={handlerAddToCart} handlerRemoveFromCart={handlerRemoveFromCart} handleComprar={handleComprar} />}/>
      <Route path="/acerca-de-mi" element={<AcercaDe />}/>

      <Route path="/productos" element={carga ? <img src={loading} alt="loading" /> :  <ProductList products={productos} addToCart={handlerAddToCart} removeFromCart={handlerRemoveFromCart}/>} />

      <Route path="/productos/:id/" element={<DetallesProducto productos = {productos} />} />

      <Route path="/admin" element={<RutaProtegidas isAuthenticated={isAuthenticated}>  <Admin/> </RutaProtegidas>}/>

      <Route path="/" element={ <Login/>}/>

      <Route path="*" element={<NotFound />}/>
    </Routes>

    </Router>
    </>
  )
}

export default App