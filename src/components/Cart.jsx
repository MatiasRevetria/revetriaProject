import React, { useState } from "react";
import "./styles/cart.css"

const Cart = ({ cartItems }) => {
  //acumulador es el valor anterior e item es el actual. Reduce devuelve
  const total = cartItems.reduce((acumulador, item) => acumulador + item.precio * item.cantidad, 0);
  const [close, setClose] = useState(true) 
  const [open, setOpen] = useState(false)


  const handleClose = () => {
    setClose(true);
    setOpen(false);
  }
  const handleOpen = () => {
    setClose(false);
    setOpen(true);
  }

  return (
    <div>
      {close ? <button className="botonOpen" onClick={handleOpen}>🛒</button> :<div className="sidecart">
      <div className="cart-container">
        <h2>Carrito de compras</h2>
        {cartItems.length === 0 ? (
          <p>El carrito está vacío</p>
        ) : (
          <>
            <ul className="cart-items">
              {cartItems.map((item, index) => (
                <li className="cart-item" key={index}>
                  <span className="item-name">{item.nombre}</span>
                  <span className="item-quantity">x {item.cantidad}</span>
                  <span className="item-price">${item.precio * item.cantidad}</span>
                </li>
              ))}
            </ul>
            <div className="cart-total">Total: ${total}</div>
          </>
        )}
        <button onClick={handleClose}>X</button>
      </div>
    </div>}

    </div>
  );
};

export default Cart;
