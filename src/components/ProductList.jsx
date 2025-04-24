import React from 'react'

const ProductList = ({products,addToCart}) => {
  return (
    <div>
        {products.map((product,index) => (
            <div key={index}>
                <span>{product.name} - ${product.price}</span>
                <button onClick={() => addToCart(product)}>Agregar</button>
            </div>
        ))}
    </div>
  )
}

export default ProductList
