import React from 'react';
import Product from './Product';
import './styles/productList.css';
import Nav from './Nav';

const ProductList = ({products,addToCart,removeFromCart, Agregado_en_carrito}) => {
  return (
    <>
    <div id='productList-container'>
        {products.map(product => (
          <Product product = {product} addToCart={addToCart} removeFromCart={removeFromCart} Agregado_en_carrito={Agregado_en_carrito}/>
        ))}
    </div>
        </>
  )
}

export default ProductList
