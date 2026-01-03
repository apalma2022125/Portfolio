// Agregamos .jsx al final de todos los archivos
import NavBar from "./components/Shared/navbar.jsx";
import Landscape from "./components/Shared/Landscape.jsx";
import AboutMe from "./components/AboutMe/AboutMe.jsx";
import Projects from "./components/Portafolio/Projects.jsx";
import Contact from "./components/Contact/Contact.jsx";
function Portafolio() {
  return (
    <>
      <Landscape />
      <div style={{ height: "calc(100svh - 60px)" }} />
      <NavBar />
      <AboutMe />
      <section className="shapedividers_com-2143"></section>
      <Projects />
      <div style={{ top: "-80px", position: "relative" }}>
        <section className="shapedividers_com-3482"></section>
        <Contact />
      </div>
    </>
  );
}

export default Portafolio;
