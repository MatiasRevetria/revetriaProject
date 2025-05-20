import React from "react";

const Cart = ({ cartItems }) => {
  return (
    <div cart-styles>
      <h2>Carrito de compras</h2>
      {cartItems.length === 0 ? (<p>El carrito esta vacio</p>) : 
      (<ul>
        {cartItems.map((item,index)=>(<li key={index}>{item.nombre} x {item.cantidad} - ${item.precio * item.cantidad}</li>))}
      </ul>)}
    </div>
  );
};

export default Cart;