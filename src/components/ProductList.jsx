import React from 'react';
import Product from './Product';

const ProductList = ({products,addToCart,removeFromCart}) => {
  return (
    <div>
        {products.map(product => (
          <Product product = {product} addToCart={addToCart} removeFromCart={removeFromCart}/>
        ))}
    </div>
  )
}

export default ProductList
