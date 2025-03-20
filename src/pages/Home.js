import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "../styles/global.css";

function Home() {
  return (
    <div className="hero">
      {/* Hero Content */}
      <div className="hero-content" data-aos="fade-right">
        <h1>Welcome to My Portfolio</h1>
        <p>Innovating with Code, Creating with Passion.</p>
        <a href="#projects" className="cta-button">
          View My Work
        </a>
      </div>

      {/* Hero Image + Contact Section */}
      <div className="hero-image-container" data-aos="zoom-in">
        <img src="t-moms.jpg" alt="" className="hero-image" />

        {/* Contact Icons Directly Below the Image */}
        <div className="hero-contact">
          
          <div className="hero-icons">
            <a href="https://linkedin.com/in/tarsha-ponakala" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="icon" />
            </a>
            <a href="https://github.com/tarsha777" target="_blank" rel="noopener noreferrer">
              <FaGithub className="icon" />
            </a>
            <a href="mailto:ptst2005@gmail.com">
              <FaEnvelope className="icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
