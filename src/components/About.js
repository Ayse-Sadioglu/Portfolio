import React from 'react';
import "../styles/About.css";
import charonImage from '../assets/charon.jpg'; 

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-image">
          <img src={charonImage} alt="About" />
        </div>
        <div className="about-text">
          <h2 className="about-header">¯\_(ツ)_/¯ about me</h2>
          <p>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in pretium orci vestibulum eget.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
