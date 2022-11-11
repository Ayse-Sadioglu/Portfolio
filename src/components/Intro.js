import React from "react";
import "../styles/Intro.css";

class Intro extends React.Component {
  render() {
    return (
      <div id="intro">

       {/* <div class="obiwan">
          <img src={require("../assets/obiwan.gif")} alt="obiwan" /> 
        </div>*/}

        <div className="intro-title">Hello there</div>
          <div className="intro-description">
            I'm Ayse and this is my website built with React.js 
          </div>
          
          <div class="obiwan">
          <img src={require("../assets/obiwan.gif")} alt="obiwan" /> 
        </div>

        
      </div>
    );
  }
}

export default Intro;
