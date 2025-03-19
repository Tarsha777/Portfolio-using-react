import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Milestones from "./pages/Milestones";
import Skills from "./pages/Skills";
import "./styles/global.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

AOS.init();


function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const milestonesRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);
  

  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <Navbar scrollToSection={scrollToSection} refs={{ homeRef, aboutRef, projectsRef, milestonesRef, skillsRef, contactRef }} />
      
      <section ref={homeRef} id="home"><Home /></section>
      <section ref={aboutRef} id="about"><About /></section>
      <section ref={projectsRef} id="projects"><Projects /></section>
      <section ref={milestonesRef} id="milestones"><Milestones /></section>
      <section ref={skillsRef} id="skills"><Skills /></section>
      <section ref={contactRef} id="contact"><Contact /></section>

      <Footer />
    </div>
  );
}

export default App;
