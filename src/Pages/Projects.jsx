import React from 'react';

function Projects() {
  const projects = [
    {
      nombre: 'Tonny´s Kinal',
      tiempo: '4 Meses',
      tecnologias: ['Java','JavaFx','MySQL'],
      imagen: '/src/assets/img/TonnysKinal.png', 
      enlace: 'https://example.com/proyecto1'
    },
    {
      nombre: 'Vanguar',
      tiempo: '4 Meses',
      tecnologias: ['HTML', 'CSS', 'Sass', 'JavaScript', 'Vue', 'Node.js'],
      imagen: 'https://via.placeholder.com/300x200',
      enlace: 'https://example.com/proyecto2'
    },
    {
      nombre: 'Kinalgo',
      tiempo: '3 Meses',
      tecnologias: ['HTML', 'CSS', 'JavaScript', 'Vue', 'Node.js', 'Sass'],
      imagen: 'https://via.placeholder.com/300x200', 
      enlace: 'https://example.com/proyecto3'
    }
  ];

  return (
    <section id="proyectos">
      <h2>Proyectos y Experiencia</h2>
      <p>( Todo lo que puedas imaginar, lo puedes programar )</p>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <img src={project.imagen} alt={project.nombre} />
            <h3>{project.nombre} <span>({project.tiempo})</span></h3>
            <div className="tech-list">
              {project.tecnologias.map((tech, idx) => (
                <span key={idx}>{tech}</span>
              ))}
            </div>
            <a href={project.enlace} className="project-link" target="_blank" rel="noopener noreferrer">Ver Proyecto</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
