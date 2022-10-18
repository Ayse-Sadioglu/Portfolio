import React from "react";
import "../styles/Intro.css";



class Intro extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
      visible: true,
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey,
    });
  }
  render() {
    return (
      <div id="intro">
        <div className="intro-image">
        {/*<img src={require("../assets/header1.jpg" )} alt="header image" />*/}
        </div>


        <div className="intro-subtitle">intro subtitle.</div>

        <div className="intro-desc">
          intro description
        
        </div>
      </div>
    );
  }
}

export default Intro;
