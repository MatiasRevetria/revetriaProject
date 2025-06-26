import React from 'react'
import Nav from '../components/Nav'
import yo from '../assets/yo.jpg'
import './pageStyles/AcercaDe.css'

const AcercaDe = () => {
  return (
    <>
    <Nav />
    <section id='first-section'>
      <div id='article-container'>
      <article id='first-article'>
      <div id="description">
        <h2>UN POCO DE MI</h2>
        <p>Soy Matias y soy un estudiante avanzado de ingeniería informatica, cursando las ultimas materias de la carrera. Hace 5 años me dedico a crear <strong>soluciones inteligentes</strong> a <strong>problemas complejos</strong>, implementando todos los conocimientos adquiridos estos años como estudiante y como desarrollador. Sigo continuamente aprendiendo y sumando experiencias para poder mejorar aun mas mi trabajo como ingeniero de software.</p>
      </div>
      <div>
        <img src={yo} alt="Mati" />
      </div>
      </article>
      <article id="second-article">
        
      </article>
      </div>
    </section>
    </>
  )
}

export default AcercaDe

