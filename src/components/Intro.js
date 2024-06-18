import React, { useState, useEffect } from 'react';
import "../styles/Intro.css";
import AsciiArtPrinter from './AsciiArtPrinter ';

const Intro = ({ onLoaded }) => {
  const myAsciiArt = ` `;
  const letters = myAsciiArt.split('');
  useEffect(() => {
    if (onLoaded) {
      onLoaded();
    }
  }, [onLoaded]);

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