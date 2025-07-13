import React from 'react'
import './styles/mainComponent.css'
import programador from '../assets/programador.gif'

const Main = ({data}) => {

  console.log(data);
  return (
    <div className='main-container'>
      <div className='main-text'>
      <h2>PROYECTO FINAL REACT</h2>
      <p>Este es mi proyecto final para el curso de react de talento tech. A pesar de tener un muy duro cuatrimestre con mucho estudio y laburo; creo que pude hacer un excelente trabajo modesto pero completo. Donde aplique cada uno de los conocimientos vistos en las clases y si algo no me quedaba claro, era tan simple como reveer la clase.</p>
      </div>
      <div className="main-image">
        <img src={programador} alt="programador" />
      </div>
    </div>
  )
}

export default Main
