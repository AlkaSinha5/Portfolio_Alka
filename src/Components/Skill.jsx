import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaWordpress, FaGitAlt, FaBootstrap, FaCloud, FaCode, FaServer, FaTools } from "react-icons/fa";

const skills = [
  { name: "HTML", icon: <FaHtml5 />, gradient: "linear-gradient(135deg, #ff512f, #dd2476)" },
  { name: "CSS", icon: <FaCss3Alt />, gradient: "linear-gradient(135deg, #00c6ff, #0072ff)" },
  { name: "JavaScript", icon: <FaJs />, gradient: "linear-gradient(135deg, #ffeb3b, #ff9800)" },
  { name: "React.js", icon: <FaReact />, gradient: "linear-gradient(135deg, #06beb6, #48b1bf)" },
  { name: "Node.js", icon: <FaNodeJs />, gradient: "linear-gradient(135deg, #2c3e50, #27ae60)" },
  { name: "Express.js", icon: <FaServer />, gradient: "linear-gradient(135deg, #000000, #434343)" }, // Used FaServer for Express.js
  { name: "MongoDB", icon: <FaDatabase />, gradient: "linear-gradient(135deg, #4db33d, #236026)" },
  { name: "Tailwind CSS", icon: <FaCss3Alt />, gradient: "linear-gradient(135deg, #06b6d4, #3b82f6)" }, // Using CSS icon for Tailwind
  { name: "Bootstrap", icon: <FaBootstrap />, gradient: "linear-gradient(135deg, #7952b3, #6f42c1)" },
  { name: "Postman", icon: <FaTools />, gradient: "linear-gradient(135deg, #ff6c37, #ff4500)" }, // Using Tools icon for Postman
  { name: "SQL", icon: <FaDatabase />, gradient: "linear-gradient(135deg, #b92b27, #1565c0)" },
  { name: "WordPress", icon: <FaWordpress />, gradient: "linear-gradient(135deg, #673ab7, #512da8)" },
  { name: "Git & GitHub", icon: <FaGitAlt />, gradient: "linear-gradient(135deg, #ff416c, #ff4b2b)" },
  { name: "DSA", icon: <FaCode />, gradient: "linear-gradient(135deg, #ffcc00, #ff9900)" },
  { name: "Netlify", icon: <FaCloud />, gradient: "linear-gradient(135deg, #00c7b7, #0077b5)" }, // Using Cloud icon for Netlify
  { name: "Render", icon: <FaServer />, gradient: "linear-gradient(135deg, #4353ff, #3d348b)" } // Using Server icon for Render
];


const SkillsSection = () => {
  return (
    <div
      className="container-fluid py-5"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1a1a2e, #16213e)",
        color: "white",
      }}
      id="skill"
    >
      <div className="container">
        <div className="position-relative d-flex align-items-center justify-content-center">
          <h1
            className="display-1 text-uppercase text-white"
            style={{ WebkitTextStroke: "1px #dee2e6" }}
          >
            Skills
          </h1>
          <h1 className="position-absolute text-uppercase text-primary">
            My Skills
          </h1>
        </div>
        <div className="row d-flex justify-content-center">
          {skills.map((skill, index) => (
            <div key={index} className="col-md-3 col-sm-6 mb-4">
              <div
                className="card text-center p-4 shadow-lg rounded-lg"
                style={{
                  background: skill.gradient,
                  borderRadius: "15px",
                  padding: "20px",
                  color: "white",
                  textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)",
                  boxShadow: "0 0 15px rgba(0, 255, 255, 0.5) !important",
                  border: "1px solid rgba(0, 255, 255, 0.5)",
                  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                  cursor: "pointer",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "scale(1.1)";
                  e.currentTarget.style.boxShadow = "0px 15px 30px rgba(0, 255, 255, 0.7)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0 0 15px rgba(0, 255, 255, 0.5)";
                }}
              >
                {/* Light Reflection Effect */}
                <div
                  style={{
                    position: "absolute",
                    top: "-50%",
                    left: "-50%",
                    width: "200%",
                    height: "200%",
                    background:
                      "radial-gradient(circle, rgba(255, 255, 255, 0.2) 10%, transparent 80%)",
                    transform: "rotate(30deg)",
                    animation: "shine 3s infinite linear",
                    pointerEvents: "none",
                  }}
                ></div>

                <div
                  style={{
                    fontSize: "50px",
                    marginBottom: "10px",
                    filter: "drop-shadow(2px 2px 6px rgba(0, 0, 0, 0.2))",
                  }}
                >
                  {skill.icon}
                </div>
                <h5
                  style={{
                    fontSize: "18px",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    color: "white",
                  }}
                >
                  {skill.name}
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
