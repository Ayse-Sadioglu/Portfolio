import React from "react";


import "../styles/Header.css";
import Typist from "react-typist";


class Header extends React.Component {

  render() {
    return (
      <div id="intro">
        <Typist avgTypingDelay={120}>
        
            <span className="intro-name">{"Hi "}</span>
        
          
        </Typist>
        
          <div className="intro-desc">
            I'm a software engineer.
          </div>
       
         
       
      </div>
    );
  }
}

export default Header;