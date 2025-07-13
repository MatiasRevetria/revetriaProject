import React from 'react';
import Product from './Product';

const ProductList = ({products,addToCart,removeFromCart, Agregado_en_carrito}) => {
  return (
    <div className='container mt-4'>
      <div className='row g-4'>
        {products.map((product)=> (
          <div className='col-sm-6 col-md-4 col-lg-3' key={product.id}>
            <Product product={product} addToCart={addToCart} removeFromCart={removeFromCart} Agregado_en_carrito={Agregado_en_carrito}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductList
