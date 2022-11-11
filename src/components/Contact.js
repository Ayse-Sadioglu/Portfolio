import React from "react";
import "../styles/Contact.css";
import { FaGithub, FaLinkedin } from 'react-icons/fa';





class Contact extends React.Component {

    render(){


        return( 
          <div id="contact">  
            
          <a  href="https://github.com/Ayse-Sadioglu">
          <h3> <FaGithub /></h3></a>
          
          <a  href="https://www.linkedin.com/in/ayse-sadioglu-1720a11a1/">
          <h3> <FaLinkedin /></h3></a>
          
         
      
        </div>
        
        )





    }
}
export default Contact;

  