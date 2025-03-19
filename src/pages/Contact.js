import React from "react";
import "../styles/global.css"; // Ensures global styles apply
import { FaLinkedin, FaGithub } from "react-icons/fa";


function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <p>Feel free to reach out for collaboration, projects, or just to say hi!</p>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/tarsha-ponakala"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link linkedin"
        >
          <FaLinkedin size={40} />
        </a>
        <a
          href="https://github.com/tarsha777"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link github"
        >
          <FaGithub size={40} />
        </a>
        <p>ptst2005@gmail.com</p>
      </div>
    </div>
  );
}

export default Contact;
