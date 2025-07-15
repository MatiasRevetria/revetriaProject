import React from "react";
import { Link } from "react-router-dom";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Card from 'react-bootstrap/Card';
import mail from '../assets/mail.png'
import github from'../assets/github.png'
import wpp from '../assets/wpp.png'

const Nav = ({ countItem }) => {

  const [show,setShow] = useState(false);
  const handleClose = ()=>setShow(false);
  const handleShow = ()=>setShow(true);


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
            <Button className="btn btn-dark" onClick={handleShow}>Contacto</Button>
            <Offcanvas show={show} onHide={handleClose}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Contacto</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Card border="danger" style={{ width: '18rem' }}>
                  <Card.Header><img src={mail} alt="mail" style={{
                    width:'30px',
                    height:'30px',
                  }} /></Card.Header>
                  <Card.Body>
                    <Card.Title>Correo electrónico</Card.Title>
                    <Card.Text>
                      revetriamatias03@gmail.com
                    </Card.Text>
                  </Card.Body>
                </Card>
                <br />

                <Card border="secondary" style={{ width: '18rem' }}>
                  <Card.Header><img src={github} alt="mail" style={{
                    width:'30px',
                    height:'30px',
                  }} /></Card.Header>
                  <Card.Body>
                    <Card.Title>GitHub</Card.Title>
                    <Card.Text>
                      <a href="https://github.com/MatiasRevetria">https://github.com/MatiasRevetria</a>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <br />

                <Card border="success" style={{ width: '18rem' }}>
                  <Card.Header><img src={wpp} alt="mail" style={{
                    width:'30px',
                    height:'30px',
                  }} /></Card.Header>
                  <Card.Body>
                    <Card.Title>WhatsApp</Card.Title>
                    <Card.Text>
                      +541138677999
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Offcanvas.Body>
            </Offcanvas>
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
