import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ countItem }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/home">MiTienda</Link>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarContenido"
        aria-controls="navbarContenido"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarContenido">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" to="/home">Inicio</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Acerca-de-mi/">Acerca de</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contacto">Contacto</Link>
          </li>
        </ul>
        <span className="navbar-text" style={{color: 'white'
        }}>
          🛒 {countItem}
        </span>
      </div>
    </nav>
  );
};

export default Nav;
