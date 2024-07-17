import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/proyectos">Proyectos</Link></li>
          <li><Link to="/certificados">Educacion</Link></li>
          <li><Link to="/sobre-mi">Sobre mí</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
