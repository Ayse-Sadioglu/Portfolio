import React, { useState, useEffect } from 'react';
import "../styles/Intro.css";
import AsciiArtPrinter from './AsciiArtPrinter ';
import dovahzul from '../assets/dovahzul.png'
import skatercat from '../assets/skatecat.gif'
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
      <img src={skatercat} alt="Intro GIF" className="intro-image" />

        <h1 className="intro-header">Drem Yol Lok, Greetings</h1>

        {/* <img src={dovahzul} alt="Intro Image" className="intro-image" /> */}

        <p className="intro-subtext">
          *Drem Yol Lok, which translates to 'Peace, Fire, Sky'  in{" "}
          <a
            href="https://www.thuum.org/learn/practice/phrases.php"
            className="intro-link"
          >
            Dovahzul,
          </a>{" "}
          is used to mean 'greetings'
        </p>
      </div>
    </div>
  </div>
);
};

export default Intro;
