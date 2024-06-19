import React from "react";
import "../styles/About.css";
import charonImage from "../assets/charon.jpg";

//¯\_(ツ)_/¯
const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
       
        <div className="about-text">
          <h2 className="about-header">about me</h2>
          <p className="custom-font">Hello there, I'm Ayse.</p>
          <p className="custom-font">
         I'm in my final year studying Computer
        Engineering at TOBB University of Economics and Technology. I love
        working on my own projects and contributing to open-source
        communities to keep learning. I'm trying to explore
        different fields within computer engineering by getting hands-on
        with various projects.
      </p>
      <p className="custom-font">
        Outside of my studies, I'm interested in music and play the violin and piano.
        I'm also an amateur figure skater.
      </p>
        </div>
        <div className="about-image">
          <img src={charonImage} alt="About" />
        </div>
      </div>
    </div>
  );
};

export default About;
