import React from "react";
import "../styles/global.css";
import { FaExternalLinkAlt } from "react-icons/fa"; // Import link icon

function Milestones() {
  return (
    <div className="milestones-container">
      <h1>My Milestones</h1>

      <div className="milestones-content">
        {/* Achievements Section */}
        <div className="achievements">
          <h2>Achievements</h2>
          <ul>
            <li>
              <a href="https://www.linkedin.com/posts/lbrce_activity-7238768975252201473-Pp2d?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEgZ_I8BzICTCwPCkm4MacCwXmq1zo4GlFM"
                target="_blank" rel="noopener noreferrer" className="achievement-link">
                <FaExternalLinkAlt className="link-icon" /> Won a 24-hour national-level hackathon
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/posts/tarsha-ponakala_we-have-developed-an-advanced-self-driving-activity-7307990279079215105-Fs53?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEgZ_I8BzICTCwPCkm4MacCwXmq1zo4GlFM"
                target="_blank" rel="noopener noreferrer" className="achievement-link">
                <FaExternalLinkAlt className="link-icon" /> Built a self-driving car prototype
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/posts/tarsha-ponakala_im-happy-to-share-that-ive-obtained-a-new-activity-7307340092908412928-n17j?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEgZ_I8BzICTCwPCkm4MacCwXmq1zo4GlFM"
                target="_blank" rel="noopener noreferrer" className="achievement-link">
                <FaExternalLinkAlt className="link-icon" /> Achieved the SmartCoder title at Smart Interviews
              </a>
            </li>
            <li> Secured 3rd place in the Challenging ChatGPT competition</li>
          </ul>
        </div>

        {/* Certifications Section */}
        <div className="certifications">
          <h2>Certifications</h2>
          <ul>
            <li>📜 Certified Cloud Practitioner - AWS Cloud</li>
            <li>🤖 Certified AI Associate - Salesforce</li>
            <li>💻 Cybersecurity Essentials - CISCO</li>
            <li>💻 Java, JavaScript, TypeScript - Infosys Spring Board</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Milestones;
