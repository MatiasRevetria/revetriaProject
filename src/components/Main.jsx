import React from 'react'
import './styles/mainComponent.css'
import programador from '../assets/programador.gif'

const Main = ({data}) => {

  console.log(data);
  return (
    <div className='main-container'>
      <div className='main-text'>
      <h2>PROYECTO FINAL REACT</h2>
      <p>Este proyecto final representa el cierre del curso de React de Talento Tech.
        A lo largo de un cuatrimestre intenso, con mucho esfuerzo, estudio y dedicación, logré desarrollar una aplicación completa que refleja todo lo aprendido en clase.
        Cada funcionalidad implementada está basada en los conceptos trabajados durante el curso, y ante cualquier duda, supe volver sobre los contenidos para consolidar mis conocimientos.
        Me siento orgulloso del resultado: un proyecto modesto, pero sólido y funcional.</p>
      </div>
      <div className="main-image">
        <img src={programador} alt="programador" />
      </div>
    </div>
  )
}

export default Main
