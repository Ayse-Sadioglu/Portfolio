import React from "react";
import "../styles/Intro.css";
import AsciiArtPrinter from './AsciiArtPrinter ';
const Intro = () => {
  const myAsciiArt = ` `;
  const letters = myAsciiArt.split('');


return (
  <div className="intro-container">
    <div className="intro-content">
      <div className="intro-text">
        <h1 className="intro-header">Drem Yol Lok, Greetings</h1> 
      </div>
    </div>
  </div>
);
};

export default Intro;