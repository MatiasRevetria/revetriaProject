import React, {useState} from "react"
import "./App.css"
import Home from "./layout/home"

function App() {
const [cart, setCart] = useState([])
const handlerAddToCart = (product) => {
  setCart([...cart, product])
}
  return (
    <>
      <Home cart={cart} handlerAddToCart={handlerAddToCart} />
    </>
  )
}

export default App