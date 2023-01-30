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
      const two = (
        <p>
          Outside of work, I'm interested in listening to music and watch movies.
          You can find what i listen and what i watch from the links above!
        </p>
      );
    
      const desc_items = [one, two];
  
      const tech_stack = [
        "Java",
        "Python",
        "React.js",
        "React Native",
        "Javascript",
        "HTML & CSS",
        "C & C++",
        "Verilog"
      ];
  
      const tech_items = tech_stack.map(stack => <li>{stack}</li>);
    return (
      <div id="about">
        <div className="about-content">
 

          <div className="about-description">
          {[one]}
            {"Here are some technologies I have been working with:"}
            <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
           return(
            
            <li>{tech_item}</li>


           );
          })}
           </ul>
           {[two]}
          

          
          </div>
        </div>
      </div>
    );
  }
}

export default About;
