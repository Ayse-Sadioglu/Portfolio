import React from "react";
import "../styles/About.css";


class About extends React.Component {
  render() {
    const one = (
      <p>
        I am currently a third year <b>Computer Science</b> major at
        <a href="https://www.etu.edu.tr">
          {" "}
          TOBB University of Economics & Technology
        </a>
      </p>
    );    
      const two = (
        <p>
          Outside of work, I'm interested in listening to music and watch movies.
          You can find what i listen and what i watch from the links above!
        </p>
      );
    
      const desc_items = [one, two];
  
      const tech_stack = [
        "Java",
        "Python",
        "React.js",
        "React Native",
        "Javascript",
        "HTML & CSS",
        "C & C++",
        "Verilog"
      ];
      const links = [
       
        <a href="https://open.spotify.com/user/nwwjzryjj4xcg1sm0k3ozbiwu?si=510cc029957d4b02">
        Spotify </a>,
         <a href="https://letterboxd.com/otomatcayi/">
               

        LetterBoxd</a>,
        
      ];
  
      const tech_items = tech_stack.map(stack => <li>{stack}</li>);
      const link_items = links.map(stack => <li>{stack}</li>);

    return (
      <div id="about">
        <div className="about-content">
 

          <div className="about-description">
          {[one]}
            {"Here are some technologies I have been working with:"}
            <ul >
                {tech_stack.map(function (tech_item, i) {
           return(
            
            <li>{tech_item}</li>


           );
          })}
           </ul>
           {[two]}
           <ul >
                {links.map(function (link_items, i) {
           return(
            
            <li>{link_items}</li>


           );
          })}
           </ul>

           <img src={require("../assets/r2d2.gif")} alt="r2d2" />
           



          
          </div>
        </div>
      </div>
   );
  }
}

export default About;
