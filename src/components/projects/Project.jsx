import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SIMSImg from "../../assets/SIMS 2.png";

const ProjectCard = ({ img, title, text }) => (
  <Col xs={12} md={4} className="d-flex justify-content-center mb-4">
    <div
      className="card h-100 border-0 shadow-sm"
      style={{ transition: "transform 0.3s" }}
      onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <img className="card-img-top" src={img} alt={title} />
      <div className="card-body text-center">
        <h5 className="card-title fw-bold">{title}</h5>
        <p className="card-text">{text}</p>
      </div>
    </div>
  </Col>
);

const Project = () => {
  return (
    <Container id="project" className="py-5 bg-light">
      <div data-aos="fade-up">
        <h1 className="section-title">PROJECTS</h1>
        <Row className="mt-4 justify-content-center">
          <ProjectCard
            img={SIMSImg}
            title="SIMS PPOB"
            text="A web application for selling digital products, built with React.js and Redux."
          />
          <ProjectCard
            img={SIMSImg}
            title="E-commerce Platform"
            text="A full-featured e-commerce site with RESTful API integration."
          />
          <ProjectCard
            img={SIMSImg}
            title="Portfolio Website"
            text="A personal portfolio to showcase skills and projects, built with React and Bootstrap."
          />
        </Row>
      </div>
    </Container>
  );
};

export default Project;
