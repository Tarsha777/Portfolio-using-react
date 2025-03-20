import React from "react";
import { FaGithub, FaGlobe } from "react-icons/fa"; // Import icons
import "../styles/global.css"; // Ensure styles are applied

const projects = [
  {
    id: 1,
    title: "ATM",
    description: "A simple ATM system built using Java with a MySQL database.",
    image: "atm-logo.webp",
    github: "https://github.com/your-github/atm-project",
    website: "https://yourwebsite.com/atm",
  },
  {
    id: 2,
    title: "Self-Driving Car",
    description: "A Raspberry Pi-based self-driving car with GPS, real-time navigation, and object detection.",
    image: "3790289.png",
   /* github: "https://github.com/your-github/self-driving-car",*/
    website: "https://www.linkedin.com/posts/tarsha-ponakala_we-have-developed-an-advanced-self-driving-activity-7307990279079215105-Fs53?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEgZ_I8BzICTCwPCkm4MacCwXmq1zo4GlFM",
  },
  {
    id: 3,
    title: "KR Oil Transport Website",
    description: "A website for a fictional oil transport company built using HTML, CSS, and JavaScript.",
    image: "green.jpg",
    github: "https://github.com/Tarsha777/KRoilTransport",
    website: "https://yourwebsite.com/kr-oil-transport",
  },
  {
    id: 4,
    title: "Shutterbug",
    description: "A photography portfolio website with interactive image galleries.",
    image: "logo1.png",
    github: "https://github.com/Tarsha777/ShutterBug-Portfolio",
    website: "https://yourwebsite.com/shutterbug",
  },
  {
    id: 5,
    title: "Portfolio",
    description: "The website you're currently viewing, built using React.",
    image: "tst-potfolio-logo.png",
    github: "https://github.com/Tarsha777/Portfolio-using-react/",
    website: "https://yourwebsite.com/shutterbug",
  },
];

function Projects() {
  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <FaGithub size={25} />
              </a>
              <a href={project.website} target="_blank" rel="noopener noreferrer">
                <FaGlobe size={25} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
