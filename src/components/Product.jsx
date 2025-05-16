import React from "react";

const Product = ({product, addToCart,removeFromCart})=>{
    return(
        <div>
            <span>{product.nombre} - {product.precio}</span>
            <button onClick={() => addToCart(product)}>Agregar</button>
            <button onClick={() => removeFromCart(product)}>Eliminar</button>
        </div>
    )


}

export default Product