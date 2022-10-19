import React from "react";
import "../styles/Intro.css";



class Intro extends React.Component {

  render() {
    return (
      <div id="intro">
       
        <img src={require("../assets/obiwan.gif" )} alt="obiwan"  class="responsive"/>
      
      </div>
      
      
    );
  }
}

export default Intro;
