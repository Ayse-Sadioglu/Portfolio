import React from "react";
import "../styles/About.css";
import charonImage from "../assets/charon.jpg";

//¯\_(ツ)_/¯
const technologies = [
  "Java",
  "Pyhton",
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
          <div className="technologies-list-container">
            <ul className="technologies-list custom-font">
              {technologies
                .slice(0, Math.ceil(technologies.length / 2))
                .map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
            </ul>
            <ul className="technologies-list custom-font">
              {technologies
                .slice(Math.ceil(technologies.length / 2))
                .map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
            </ul>
          </div>
          <p className="custom-font">
            Outside of my studies, I'm interested in music and play the violin
            and piano. I'm also an amateur figure skater.
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
