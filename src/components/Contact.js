import React from "react";
import "../styles/Contact.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import { Container, Row, Col } from "react-bootstrap";

class Contact extends React.Component {
  render() {
    return (
      <div id="contact">
        
        <a href="https://github.com/Ayse-Sadioglu">
          <h3>
            <FaGithub size={30} color="#26a641" />
          </h3>
        </a>

        <a href="https://www.linkedin.com/in/ayse-sadioglu-1720a11a1/">
          <h3>
            <FaLinkedin size={30} color="#0a66c2" />
          </h3>
        </a>

        <a href="mailto:1aysesadioglu@gmail.com">
          <h3>
            <AiFillMail size={30} color="#E85445" />
          </h3>
        </a>
      </div>
    );
  }
}
export default Contact;
