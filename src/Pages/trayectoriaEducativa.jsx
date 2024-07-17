import React from 'react';

function Certification() {
  return (
    <section id="certificados">
      <h2>Trayectoria Educativa</h2>
      <div className="education-container">
        <div className="education-image">
          <img src="/src/assets/img/tEdu.webp" alt="Educational background" />
        </div>
        <div className="education-details">
          <h3>Instituciones y grados</h3>
          <ul>
            <li><strong>Educación primaria</strong> (2011-2016) - Centro Educativo Bilingue La Vid</li>
            <li><strong>Educación básica</strong> (2017-2021) - Colegio Fuente de Vida</li>
            <li><strong>Diversificado: Perito en Computación</strong> (2022-2024) - Centro Educativo Técnico Laboral KINAL</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Certification;
