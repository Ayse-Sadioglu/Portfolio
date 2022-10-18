import React from "react";
import "../styles/About.css";


class About extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
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
       extra description
      </p>
    );
   
    const desc_items = [one, two];

    const tech_stack = [
      "Java",
      "Python",
      "React.js",
      "C",
      "React Native",
      "HTML & CSS",
      "Verilog",
      "C++",

    ];

    const tech_items = tech_stack.map(stack => <li>{stack}</li>);

    return (
      <div id="about">
    
          <div className="section-header ">
          <div className="about-image">
            </div>
            <span className="section-title">about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"Here are some technologies I have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                   
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
