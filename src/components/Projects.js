import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Projects.css";
import wisehire from "../assets/wisehire.jpeg";
import Portfolio from "../assets/port.png";

const projects = [
  {
    name: "Portfolio",
    description: "Personal website built with React.js. Still working on it",
    image: Portfolio,
    link: "https://github.com/Ayse-Sadioglu/Portfolio",
  },
  {
    name: "Wisehire Assistant",
    description:
      "As a team, we collaboratively developed an AI-driven recruitment assistant within the framework of our graduation design project. Employing fine-tuning techniques on the ChatGPT API, we ensured consistency checks on resumes. The front end of our solution utilizes React, complemented by other technologies such as MongoDB, contributing to a comprehensive and effective implementation",
    image: wisehire,
    link: "https://github.com/Ayse-Sadioglu/wisehireassistant",
  },
];

const Projects = () => {
  return (
    <div className="container projects-container">
      <h2 className="text-center my-4">My Projects</h2>
      <div className="row">
        {projects.map((project, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4 mb-4">
            <Card className="h-100 project-card">
              <Card.Img variant="top" src={project.image} alt={project.name} />
              <Card.Body>
                <Card.Title className="project-title">
                  {project.name}
                </Card.Title>
                <Card.Text className="project-description">
                  {project.description}
                </Card.Text>
                <Button
                  variant="primary"
                  className="custom-button"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github Repo
                </Button>{" "}
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
