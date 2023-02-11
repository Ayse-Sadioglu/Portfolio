import React from "react";
import "../styles/Intro.css";

class Intro extends React.Component {
  render() {
    return (
      <div id="intro">
-
         <div class="obiwan">
        <img src={require("../assets/starwars.gif")} alt="sw" />
      </div>
      
      </div>
      
    );
  }
}

export default Intro;
