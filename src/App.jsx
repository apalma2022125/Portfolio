import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './Pages/home';
import Projects from './Pages/Projects';
import About from './Pages/abaout';
import Certification from './Pages/trayectoriaEducativa';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proyectos" element={<Projects />} />
        <Route path="/certificados" element={<Certification />} />
        <Route path="/sobre-mi" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
