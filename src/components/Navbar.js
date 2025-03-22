import React, { useState, useEffect } from "react";
import "../styles/global.css";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons for menu

function Navbar({ scrollToSection, refs }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <img src="red-cali.png" alt="Logo" />
      </div>

      {/* Hamburger Menu Icon for Mobile */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><button onClick={() => { scrollToSection(refs.homeRef); setMenuOpen(false); }}>Home</button></li>
        <li><button onClick={() => { scrollToSection(refs.aboutRef); setMenuOpen(false); }}>About</button></li>
        <li><button onClick={() => { scrollToSection(refs.projectsRef); setMenuOpen(false); }}>Projects</button></li>
        <li><button onClick={() => { scrollToSection(refs.milestonesRef); setMenuOpen(false); }}>Milestones</button></li>
        <li><button onClick={() => { scrollToSection(refs.skillsRef); setMenuOpen(false); }}>Skills</button></li>
        <li><button onClick={() => { scrollToSection(refs.contactRef); setMenuOpen(false); }}>Contact</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;
