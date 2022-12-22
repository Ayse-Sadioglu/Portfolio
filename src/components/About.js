import React from "react";
import "../styles/About.css";

class About extends React.Component {
  render() {
    const one = (
      <p>
        I am currently a third year <b>Computer Science</b> major at
        <a href="https://www.etu.edu.tr">
          {" "}
          TOBB University of Economics & Technology
        </a>
      </p>
    );





    return (
      <div id="about">
        <div className="about-content">
 

          <div className="about-description">
            {"Here are some technologies I have been working with:"}
          
          </div>
        </div>
      </div>
    );
  }
}

export default About;
