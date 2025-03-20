import React from "react";
import "../styles/global.css";

function Navbar({ scrollToSection, refs }) {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="red-cali.png" alt="Logo" />
      </div>
      <ul className="nav-links">
        <li><button onClick={() => scrollToSection(refs.homeRef)}>Home</button></li>
        <li><button onClick={() => scrollToSection(refs.aboutRef)}>About</button></li>
        <li><button onClick={() => scrollToSection(refs.projectsRef)}>Projects</button></li>
        <li><button onClick={() => scrollToSection(refs.milestonesRef)}>Milestones</button></li>
        <li><button onClick={() => scrollToSection(refs.skillsRef)}>Skills</button></li>
        <li><button onClick={() => scrollToSection(refs.contactRef)}>Contact</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;
