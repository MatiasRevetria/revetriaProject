import React, {useState} from "react"
import "./App.css"
import Home from "./layout/home"

function App() {
const [cart, setCart] = useState([])
const handlerAddToCart = (product) => {
  setCart([...cart, product])
};
const handlerRemoveFromCart = (productToDelete) => {
  setCart(cart.filter((item) => item.id !== productToDelete))
};

  return (
    <>
      <Home cart={cart} handlerAddToCart={handlerAddToCart} handlerRemoveFromCart={handlerRemoveFromCart} />
    </>
  )
}

export default App