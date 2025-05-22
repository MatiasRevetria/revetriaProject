import React, { use, useState } from "react";
import './styles/product.css'

const Product = ({product, addToCart, removeFromCart}) => {
    const [cantidad, setCantidad] = useState(0)
    const [precio_total, setPrecio_total] = useState(0)


    const handleAddToCart = () => {
        addToCart({...product,cantidad});
        setAgregado(true)
    }

    const increase = () => setCantidad(prod_selec => (prod_selec < product.stock ? prod_selec + 1 : prod_selec));
    const decrease = () => setCantidad(prod_delete => (prod_delete > 0 ? prod_delete - 1 : 0));

    const handlePrecioMas = () => {
        increase();
        if(cantidad == 0){
            setPrecio_total( product.precio)
        }else if(cantidad >= 1){
            setPrecio_total( product.precio * (cantidad + 1) )
        }
    }

    const handlePrecioMenos = () => {
        decrease();
        if(cantidad == 0){
            setPrecio_total( 0 )
        }else if(cantidad >= 1){
            setPrecio_total( product.precio * (cantidad - 1) )
        }
    }
    

    return(
        <div className="product-container">
            <div id="product_image">
                <img src={product.imagen} alt={product.nombre} />
            </div>
            <div className="product-name">{product.nombre}</div>
            <div id="product_price">${product.precio}</div>
            <div className="quantity-controls">
                <button onClick={handlePrecioMenos}>-{console.log(precio_total)}</button>
                <span>{cantidad}</span>
                <button onClick={handlePrecioMas}>+{console.log(precio_total)}</button>
            </div>
            <div className="product-cart">
                <button onClick={handleAddToCart} disabled = { cantidad === 0}>
                    Agregar
                </button>
            </div>
            <span>
                <h3>Precio Total: ${precio_total}</h3>
            </span>
        </div>
    )
}

export default Product