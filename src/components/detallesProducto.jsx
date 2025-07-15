import React from 'react'
import { useParams } from 'react-router-dom'

const DetallesProducto = ({  producto, onClose }) => {
  const { id } = useParams()
  if (!producto) return null; 

  return (
    <div className='container-details'>
      <div className="card text-center p-5">
        <div className="card-header">
          <ul className="nav nav-pills card-header-pills">
            <li className="nav-item">
              <a className="nav-link active" href="/">Sos Admin?</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://mockapi.io/projects/681d9331f74de1d219b03778/">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">Disabled</a>
            </li>
          </ul>
        </div>
        <div className="card-body d-flex flex-column align-items-center gap-2">
          <h5 className="card-title"><h2>{producto.nombre}</h2></h5>
          {producto ? (
            <>
              <h3>{producto.descripcion}</h3>
              <img src={producto.imagen} alt={producto.nombre} style={{ maxWidth: '300px' }} />
            </>
          ) : (
            <p>Producto no encontrado</p>
          )}
          <a href="#products-section" className="btn btn-primary" onClick={onClose}>Volver</a>
        </div>
      </div>
    </div>
  )
}

export default DetallesProducto
