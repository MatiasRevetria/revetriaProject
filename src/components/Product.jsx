import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { FaPlus, FaMinus, FaShoppingCart } from "react-icons/fa"
import './styles/product.css'

const Product = ({product, addToCart, setDetalle}) => {
    const [cantidad, setCantidad] = useState(0)
    const [precio_total, setPrecio_total] = useState(0)

    const increase = () =>{
        if (cantidad < product.stock){
            const nuevaCantidad = cantidad + 1;
            setCantidad(nuevaCantidad);
            setPrecio_total(product.precio * nuevaCantidad)
        }
    }

    const decrease = () =>{
        if (cantidad > 0){
            const nuevaCantidad = cantidad - 1;
            setCantidad(nuevaCantidad);
            setPrecio_total(product.precio * nuevaCantidad)
        }
    }

    const handleAddToCart = () => {
        addToCart({...product, cantidad})
    }

    return(
        <div className="card h-100 shadow-sm">
            <img src={product.imagen} className="card-img-top" alt={product.nombre} />
            <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title">{product.nombre}</h5>
                <p className="card-text fw-bold text-primary">${product.precio}</p>
                <div className="d-felx align-items-center justify-content-center mb-2">
                    <button className="btn btn-outline-secondary" onClick={decrease}> <FaMinus /> </button>
                    <span className="mx-3">{cantidad}</span>
                    <button className="btn btn-outline-secondary" onClick={increase}><FaPlus/></button>
                </div>
                <button className="btn btn-success w-100 mb-2" onClick={handleAddToCart} disabled={cantidad === 0}><FaShoppingCart className="me-2"/>Agregar</button>
                <p className="text-muted">Total: ${precio_total}</p>
                {/* <Link to={`/productos/${product.id}`} className="btn btn-link p-0 mt-2">Ver más</Link> */}
                <button type="button" class="btn btn-outline-dark" onClick={()=>setDetalle(product)}>Ver Más</button>
            </div>
        </div>
    )
}

export default Product
