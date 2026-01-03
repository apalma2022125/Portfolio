import NavBar from "./Components/NavBar.jsx";
import Landscape from "./Components/Landscape.jsx";
import AboutMe from "./Components/AboutMe/AboutMe.jsx";
import Projects from "./Components/Portafolio/Projects.jsx";
import Contact from "./Components/Contact/Contact.jsx";
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
