import React from "react";
import "../styles/global.css";


function Navbar({ scrollToSection, refs }) {
  return (
    <nav className="navbar">
      <div className="logo" ><img src="red-cali.png"></img></div>
      <ul className="nav-links">
        <li><a onClick={() => scrollToSection(refs.homeRef)}>Home</a></li>
        <li><a onClick={() => scrollToSection(refs.aboutRef)}>About</a></li>
        <li><a onClick={() => scrollToSection(refs.projectsRef)}>Projects</a></li>
        <li><a onClick={() => scrollToSection(refs.milestonesRef)}>Milestones</a></li>
        
        <li><a onClick={() => scrollToSection(refs.skillsRef)}>Skills</a></li>
        <li><a onClick={() => scrollToSection(refs.contactRef)}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
