import React from 'react'
import { HiH2 } from 'react-icons/hi2';
import { useParams } from 'react-router-dom'

const detallesProducto = ({productos}) => {

    const {id} = useParams();

    const product = productos.find(producto=>producto.id == id)

    console.log(product)

  return (
    <div>
      <h1>Detalle del producto: {id}</h1>
      {product ? (<h2>{product.nombre}</h2>) : (<p>Producto no encontrado</p>)}
    </div>
  )
}

export default detallesProducto
