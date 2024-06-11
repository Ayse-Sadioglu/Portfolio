import React from "react";
import "../styles/Intro.css";
import { MovingComponent } from "react-moving-text";
import AsciiArtPrinter from './AsciiArtPrinter ';
const Intro = () => {
  const myAsciiArt = ` 
  /\\_/\\
 ( o.o )
  > ^ <`;

//change the art
  return (
    <div className="intro-container">
     
     <AsciiArtPrinter art={myAsciiArt} color="white" />
          <MovingComponent
            type="swing"
            duration="2000ms"
            delay="0s"
            direction="normal"
            timing="ease"
            iteration="1"
            fillMode="none"
            className="text"
            
          >
            Hello There
          </MovingComponent>
        


       
       
     
    </div>
  );
};

export default Intro;
