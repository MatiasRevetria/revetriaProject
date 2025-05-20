import React, {useState} from "react"
import "./App.css"
import Home from "./layout/home"

function App() {
  
const [cart, setCart] = useState([]);

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

  return (
    <>
      <Home cart={cart} handlerAddToCart={handlerAddToCart} handlerRemoveFromCart={handlerRemoveFromCart} />
    </>
  )
}

export default App