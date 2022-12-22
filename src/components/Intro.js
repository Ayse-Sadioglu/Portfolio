import React from "react";
import "../styles/Intro.css";

class Intro extends React.Component {
  render() {
    
    return (
      <div id="intro">
     
    
      <span className="intro-title">
       
        <span className="intro-name">{"Hello There"}</span>
      </span>
      <div className="intro-desc">
     This is my website built with React.js
      </div>
    
  
  </div>
    );
    
  }
}

export default Intro;
