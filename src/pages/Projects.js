import React from "react";
import { FaGithub, FaGlobe } from "react-icons/fa"; // Import icons
import "../styles/global.css"; // Ensure styles are applied

const projects = [
  {
    id: 1,
    title: "ATM",
    description: "A simple ATM system built using C which simulates the working of an ATM machine.",
    image: "atm-logo.webp",
    
  },
  {
    id: 2,
    title: "Autonomous Car Prototype",
    description: "A Raspberry Pi-based self-driving car with GPS, real-time navigation, and object detection.  This is a functional self-driving vehicle prototype capable of autonomous navigation, obstacle detection, and lane tracking using real-time computer vision and IoT integration. Integrated a web dashboard for monitoring the car's operations.",
    image: "3790289.png",
    github: "https://github.com/Tarsha777/Autonomous_Car_Prototype",
    website: "https://www.linkedin.com/posts/tarsha-ponakala_we-have-developed-an-advanced-self-driving-activity-7307990279079215105-Fs53?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEgZ_I8BzICTCwPCkm4MacCwXmq1zo4GlFM",
  },
  {
    id: 3,
    title: "KR Oil Transport Website",
    description: "Developed a web-based logistics platform for real-time tanker booking and transport management. The system simplifies tanker scheduling and automates pricing based on distance and tanker type.  ",
    image: "green.jpg",
    github: "https://github.com/Tarsha777/KRoilTransport",
    website: "https://kr-oil-transport.vercel.app/",
  },
  {
    id: 4,
    title: "Shutterbug",
    description: "Designed and developed a responsive, visually engaging website to showcase photography work and projects.",
    image: "logo1.png",
    github: "https://github.com/Tarsha777/ShutterBug-Portfolio",
    website: "https://tarsha777.github.io/ShutterBug-Portfolio/",
  },
  {
    id: 5,
    title: "Portfolio",
    description: "The website you're currently viewing, built using React.",
    image: "tst-potfolio-logo.png",
    github: "https://github.com/Tarsha777/Portfolio-using-react/",
    website: "https://tarsha-portfolio.vercel.app/",
  },
  {
    id: 6,
    title: "Habit Tracker (In Progress)",
    description: "A habit tracker app built using MERN Stack. This app helps you to track your habits and maintain a streak. It is under development.",
    image: "Habit Tracker.jpg",
    github: "https://github.com/Tarsha777/Habit-tracker-MERN",
   /* website: "",*/
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
