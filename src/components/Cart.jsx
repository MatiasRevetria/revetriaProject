import React from "react";

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <div>
      <h2>Carrito</h2>
      {cartItems.length === 0 && <p>El carrito está vacío</p>}
      {cartItems.map((item, index) => (
        <div key={index}>
          <span>{item.name} - ${item.price}</span>
          <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;