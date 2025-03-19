import React from "react";
import "../styles/global.css"; // Ensures global styles apply

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <img
          src="profpic.jpg"
          alt="Profile"
          className="about-image"
        />
        
        <div className="about-section" data-aos="fade-left">
  <h2>About Me</h2>
  <p>
            Hi! I'm a passionate developer specializing in MERN stack, AI/ML, and Big Data.  
            I love building real-time applications and working on innovative projects like self-driving cars and AI-based traffic systems.  
          </p>
          <p>
            My goal is to solve real-world problems using technology while continuously learning and growing as a developer.
          </p>
</div>

      </div>
    </div>
  );
}

export default About;
