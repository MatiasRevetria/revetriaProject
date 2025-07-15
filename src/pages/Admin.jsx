import React, { useState, useContext } from "react";
import FormularioProducto from "../adminComponents/FormularioProducto";
import FormularioEdicion from "../adminComponents/FormularioEdicion";
import { AdminContext } from "../context/AdminContext";
import Nav from "../components/Nav";
import { Button, Card, Container, Row, Col, Spinner } from "react-bootstrap";

const Admin = () => {
  const {
    productos,
    open,
    setOpen,
    seleccionado,
    setSeleccionado,
    agregarProducto,
    actualizarProducto,
    eliminarProducto,
  } = useContext(AdminContext);

  const [openEditor, setOpenEditor] = useState(false);
  const [loading, setLoading] = useState(false); // Este loading es solo ilustrativo

  return (
    <>
      <Nav />
      <Container className="my-4 mt-5">
        <h1 className="text-center mb-4">Panel Administrativo</h1>

        {loading ? (
          <div className="text-center my-5">
            <Spinner animation="border" role="status" />
            <p className="mt-3">Cargando...</p>
          </div>
        ) : (
          <>
            <div className="d-flex justify-content-end mb-3">
              <Button variant="primary" onClick={() => setOpen(true)}>
                <a href="#formularios" style={{color:'white'}}>Agregar producto nuevo</a>
              </Button>
            </div>

            <Row xs={1} sm={2} md={3} lg={4} className="g-4">
              {productos.map((product) => (
                <Col key={product.id}>
                  <Card className="h-100">
                    <Card.Img
                      variant="top"
                      src={product.imagen}
                      alt={product.nombre}
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <Card.Body className="d-flex flex-column justify-content-between">
                      <div>
                        <Card.Title>{product.nombre}</Card.Title>
                        <Card.Text className="fw-bold text-primary">
                          ${product.precio}
                        </Card.Text>
                      </div>
                      <div className="mt-3 d-flex justify-content-between">
                        <Button
                          variant="warning"
                          onClick={() => {
                            setOpenEditor(true);
                            setSeleccionado(product);
                          }}
                        >
                          <a href="#formularios">Editar</a>
                        </Button>
                        <Button
                          variant="danger"
                          onClick={() => eliminarProducto(product.id)}
                        >
                          Eliminar
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>

            {/* Modales de formularios */}
            <div id='formularios' style={{
                display:'flex',
                justifyContent:'center',
                gap:'2%'
            }}>
                {open && (
                <FormularioProducto
                    onAgregar={agregarProducto}
                    onClose={() => setOpen(false)}
                />
                )}
                {openEditor && (
                <FormularioEdicion
                    productoSeleccionado={seleccionado}
                    onActualizar={actualizarProducto}
                    onClose={() => setOpenEditor(false)}
                />
                )}
            </div>
          </>
        )}
      </Container>
    </>
  );
};

export default Admin;
