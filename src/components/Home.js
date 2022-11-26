import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "./ParticlesBackground";
//import Type from "./Type";
import "../styles/Home.css"


function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> SOUMYAJIT BEHERA</strong>
              </h1>

             
            </Col>

          
          </Row>
        </Container>
      </Container>
     
    </section>
  );
}

export default Home;
