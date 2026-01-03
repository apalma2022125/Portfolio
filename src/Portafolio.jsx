import NavBar from "./components/Shared/navbar";
import Landscape from "./components/Shared/Landscape";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Portafolio/Projects";
import Contact from "./components/Contact/Contact";
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
