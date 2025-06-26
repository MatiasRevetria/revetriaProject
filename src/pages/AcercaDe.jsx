import React from 'react'

const AcercaDe = () => {
  return (
    <section id='first-section' style={{display:'flex', flexDirection:'column',justifyContent:'center'}}>
      <div id='AcercaDeMiTitle'>
        <h1>Matias Revetria</h1>
      </div>
      <div id='article-container'>
      <article id='first-article'>
      <span id="description">
        <h3>Mati</h3>
        <p>Soy Matias y soy un estudiante avanzado de ingeniería informatica, cursando las ultimas materias de la carrera. Hace 5 años me dedico a crear <strong>soluciones inteligentes</strong> a <strong>problemas complejos</strong>, implementando todos los conocimientos adquiridos estos años como estudiante y como desarrollador. Sigo continuamente aprendiendo y sumando experiencias para poder mejorar aun mas mi trabajo como ingeniero de software.</p>
      </span>
      <span>
        <img src="../assets/yo.jpg" alt="Mati" />
      </span>
      </article>
      <article id="second-article">
        
      </article>
      </div>
    </section>
    
  )
}

export default AcercaDe

