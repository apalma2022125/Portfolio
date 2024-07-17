import React from 'react';
import Skills from '../components/skills';

function About() {
  return (
    <section id="sobre-mi">
      <h2>Sobre mí</h2>
      <p>
        Soy un <span className="highlight">desarrollador jr</span> con experiencia en tecnologías como HTML, CSS, JavaScript y React. 
        Recientemente trabajé en proyectos con metodologia scrum, contribuyendo al desarrollo con habilidades en React y Node.js. 
        Soy proactivo, con una fuerte ética de trabajo y un gran interés por aprender continuamente. Actualmente estudio para ser 
        <span className="highlight"> Systems Engineer</span>. Estoy listo para contribuir a tu próximo proyecto.
      </p>
      <Skills />
    </section>
  );
}

export default About;
