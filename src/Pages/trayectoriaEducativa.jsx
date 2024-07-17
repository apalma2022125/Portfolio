import React from 'react';

function EducationalPath() {
  return (
    <section id="educational-path">
      <h2 className="title">Trayectoria Educativa</h2>
      <div className="container">
        <div className="info">
          <div className="education-item">
            <h3>Educación Primaria</h3>
            <p>(2009-2014) - Centro Educativo Preceptos</p>
          </div>
          <div className="education-item">
            <h3>Educación Básica</h3>
            <p>(2015-2017) - Centro Educativo Técnico Laboral KINAL</p>
          </div>
          <div className="education-item">
            <h3>Diversificado: Perito en Computación</h3>
            <p>(2018-2020) - Centro Educativo Técnico Laboral KINAL</p>
          </div>
        </div>
        <div className="image"></div>
      </div>
      <div className="container">
        <div className="image-diversificado"></div>
        <div className="info">
          <h3>4to. Diversificado</h3>
          <p>
            Durante este grado principalmente desarrollé conceptos básicos de <strong>IT Essentials</strong>,
            configuración de redes a través de los cursos <strong>CCNA 1 y 2</strong> de Cisco, así como también
            aprendí principios básicos de programación y a desarrollar en el lenguaje <strong>Java</strong> ejecutado
            desde la CLI.
          </p>
          <p>
            Mis prácticas de grado las realicé en el área de tecnología en la <strong>Municipalidad</strong> de Villa
            Nueva, trabajando principalmente en el área de soporte técnico y mantenimiento de equipo.
          </p>
        </div>
      </div>
    </section>
  );
}

export default EducationalPath;
