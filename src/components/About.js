import React from "react";
import "../styles/About.css";
import charonImage from "../assets/charon.jpg";
import { Link } from "react-router-dom";


//¯\_(ツ)_/¯
const tech_stack  = [
  "Java",
  "Python",
  "React.js",
  "Verilog",
  "JavaScript",
  "C",
];

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-text">
          <h2 className="about-header">about me</h2>
          <p className="custom-font">Hey there, I'm Ayse.</p>
          <p className="custom-font">
            I'm a senior Computer Engineering student at TOBB University of
            Economics and Technology. I love working on my own projects and trying
            to explore different fields within computer engineering by getting
            hands-on with various projects. Here are some technologies I have
            been working with:
          </p>
          <div className="tech-stack-grid">
            <ul className="tech-stack">
              {tech_stack.slice(0, 3).map((tech_item, i) => (
                <li key={i}>{tech_item}</li>
              ))}
            </ul>
            <ul className="tech-stack">
              {tech_stack.slice(3).map((tech_item, i) => (
                <li key={i}>{tech_item}</li>
              ))}
            </ul>
          </div>
          <p className="custom-font">
            Outside of my studies, I'm interested in music and figure skating.
            {/* You can find more about my music taste and hobbies. TODO: New page and its routing will be added*/}
          </p>
        </div>
        {/* <div className="about-image">
          <img src={charonImage} alt="About" />
        </div> */}
      </div>
    </div>
  );
};

export default About;
