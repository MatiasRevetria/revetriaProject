import React, { useState } from "react";
import "./styles/cart.css"

const Cart = ({ cartItems, handlerRemoveFromCart, countItem , handleComprar}) => {
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
      {close ? <button className="botonOpen" onClick={handleOpen}>🛒<p style={{color:'red'}}>{countItem}</p></button> :<div className="sidecart shadow">
      <div className="cart-container p-3 bg-light rounded">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4 className="m-0">🛒 Carrito</h4>
          <button className="btn-close" onClick={handleClose}></button>
        </div>

        {cartItems.length === 0 ? (
          <p className="text-muted">El carrito está vacío</p>
        ) : (
          <>
            <ul className="list-group mb-3">
              {cartItems.map((item, index) => (
                <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
                  <div>
                    <strong>{item.nombre}</strong> <span className="text-muted">x{item.cantidad}</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <span className="me-3">${item.precio * item.cantidad}</span>
                    <button className="btn btn-sm btn-outline-danger" onClick={() => handlerRemoveFromCart(item)}>🗑️</button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <strong>Total:</strong>
              <span className="text-success fw-bold">${total}</span>
            </div>
            <button className="btn btn-success w-100" onClick={handleComprar}>Finalizar compra</button>
          </>
        )}
      </div>
      </div>
    }

  </div>
  );
};

export default Cart;
