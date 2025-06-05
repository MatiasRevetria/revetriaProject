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
import RutaProtegidas from "./auth/rutasProtegidas.jsx";
import { CartContext } from "./context/CartContext.jsx";

function App() {

  const {cart,productos, carga, handlerAddToCart, handlerRemoveFromCart,isAuthenticated, setIsAuthenticated} = useContext(CartContext);

  return (
    <>
    <Router>
    <Routes>

      <Route path="/" element={ <Home cart={cart} handlerAddToCart={handlerAddToCart} handlerRemoveFromCart={handlerRemoveFromCart} />}/>

      <Route path="/productos" element={carga ? <img src={loading} alt="loading" /> :  <ProductList products={productos} addToCart={handlerAddToCart} removeFromCart={handlerRemoveFromCart}/>} />

      {/* <Route path="/productos/:id/usuarios/:idUSer" element={<DetallesProducto />} /> */}
      <Route path="/productos/:id/" element={<DetallesProducto productos = {productos} />} />

      <Route path="*" element={<NotFound />}/>

      <Route path="/admin" element={<RutaProtegidas isAuthenticated={isAuthenticated}>  <Admin/> </RutaProtegidas>}/>

      <Route path="/login" element={ <Login/>}/>

    </Routes>

    </Router>
    </>
  )
}

export default App