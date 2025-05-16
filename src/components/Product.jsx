import React, { useState } from "react";
import './styles/product.css'

const Product = ({product, addToCart,removeFromCart})=>{

    const [cantidad, setCantidad] = useState(0)

    const increase = () => setCantidad(prod_selec => (prod_selec < product.stock ? prod_selec + 1 : prod_selec));

    const decrease = () => setCantidad(prod_delete => (prod_delete > 0 ? prod_delete - 1 : 0));

    return(
        <div>
            <div id="product_image">
                <img src={product.imagen} alt="imagen" />
            </div>
            <div>{product.nombre} </div>
            <div id="product_price">{product.precio}</div>
            {/* <button onClick={() => addToCart(product)}>+</button> */}
            <button onClick={()=>{increase()}}>+</button>
            <span>{cantidad}</span>
            <button onClick={()=>{decrease()}}>-</button>
            {/* <button onClick={() => removeFromCart(product)}>-</button> */}
        </div>
    )


}

export default Product