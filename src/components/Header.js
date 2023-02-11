import React from "react";
import "../styles/Header.css";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";


class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
      visible: true
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }

  render() {
    return (
      <div id="header">
        <Typist avgTypingDelay={120}>
        
            <span className="intro-name">{"Hello there!"}</span>
        
          
        </Typist>
        
          
       
         
       
      </div>
    );
  }
}

export default Header;