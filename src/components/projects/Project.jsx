import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SIMSImg from "../../assets/sims 2.png";

const Project = () => {
  return (
    <Container id="project">
      <div className="p-4 bg-light" data-aos="fade-up">
        <h1 className="text-center">PROJECTS</h1>
        <Row className="mt-4 justify-content-center">
          <Col xs={12} md={4} className="d-flex justify-content-center mb-4">
            <div className="card p-2 bg-grey" style={{ width: "13rem" }}>
              <img
                className="card-img-top"
                src={SIMSImg}
                alt="Web Development"
              />
              <div className="card-body">
                <p className="card-text text-center">
                  Develop a website using React.js, Bootstrap, and Redux state
                  management, fully integrated with a RESTful API.
                </p>
              </div>
            </div>
          </Col>
          <Col xs={12} md={4} className="d-flex justify-content-center mb-4">
            <div className="card p-2" style={{ width: "13rem" }}>
              <img className="card-img-top" src={SIMSImg} alt="Data Analysis" />
              <div className="card-body">
                <p className="card-text text-center">
                  Develop a website using React.js, Bootstrap, and Redux state
                  management, fully integrated with a RESTful API.
                </p>
              </div>
            </div>
          </Col>
          <Col xs={12} md={4} className="d-flex justify-content-center mb-4">
            <div className="card p-2" style={{ width: "13rem" }}>
              <img
                className="card-img-top"
                src={SIMSImg}
                alt="Testing Services"
              />
              <div className="card-body">
                <p className="card-text text-center">
                  Develop a website using React.js, Bootstrap, and Redux state
                  management, fully integrated with a RESTful API.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Project;