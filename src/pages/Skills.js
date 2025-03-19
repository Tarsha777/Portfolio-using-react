import React from "react";
import "../styles/global.css";
import { SiLeetcode, SiCodechef, SiCodeforces } from "react-icons/si"; // Importing available platform icons

function Skills() {
  return (
    <div className="skills-container">
      <h1>Tech Stack & Expertise</h1>

      <section className="skills-grid">
        <div className="skill">
          <h2>Languages</h2>
          <p>C, Java, Python, JavaScript, HTML, CSS</p>
        </div>

        <div className="skill">
          <h2>Web Development</h2>
          <p>React.js, Node.js, Express.js, MongoDB</p>
        </div>

        <div className="skill">
          <h2>Data Science & AI</h2>
          <p>Machine Learning, Deep Learning, TensorFlow, Pandas, OpenCV </p>
        </div>

        <div className="skill">
          <h2>Big Data & Cloud</h2>
          <p>Hadoop, Spark, Cloud Services, Cloud Computing, Network Security </p>
        </div>

        <div className="skill">
          <h2>Other Skills</h2>
          <p>Git, GitHub, Linux, Agile, Problem Solving</p>
        </div>
      </section>

      {/* Coding Profiles Section */}
      <section className="coding-profiles">
        <h2>Coding Profiles</h2>
        <div className="profile-grid">
          <a href="https://leetcode.com/u/tarsha_7/" target="_blank" rel="noopener noreferrer" className="profile-card">
            <SiLeetcode className="profile-icon leetcode" />
            <span className="profile-name">LeetCode</span>
          </a>
          <a href="https://www.codechef.com/users/tarsha_7" target="_blank" rel="noopener noreferrer" className="profile-card">
            <SiCodechef className="profile-icon codechef" />
            <span className="profile-name">CodeChef</span>
          </a>
          <a href="https://codeforces.com/profile/tarsha" target="_blank" rel="noopener noreferrer" className="profile-card">
            <SiCodeforces className="profile-icon codeforces" />
            <span className="profile-name">CodeForces</span>
          </a>
          <a href="https://smartinterviews.in/profile/tarsha" target="_blank" rel="noopener noreferrer" className="profile-card">
            <img src="smartinter-logo.png" alt="Smart Interviews" className="profile-icon smartinterviews" />
            <span className="profile-name">Smart Interviews</span>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Skills;
