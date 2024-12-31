import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ReactImg from "../../assets/react 1.png";
import PythonImg from "../../assets/python 1.png";
import BootImg from "../../assets/Bootstrap 1.png";
import MySqlImg from "../../assets/mySql 1.png";
import JSImg from "../../assets/JS 1.png";

const Skill = () => {
  return (
    <Container id="skill">
      <div className="p-4 bg-white" data-aos="fade-up">
        <h1 className="text-center">SKILLS</h1>
        <Row className="mt-4 justify-content-center">
          <Col xs={4} md={2} className="d-flex justify-content-center mb-4">
            <img src={ReactImg} alt="React" style={{ width: "100%" }} />
          </Col>
          <Col xs={4} md={2} className="d-flex justify-content-center mb-4">
            <img src={PythonImg} alt="Python" style={{ width: "100%" }} />
          </Col>
          <Col xs={4} md={2} className="d-flex justify-content-center mb-4">
            <img src={BootImg} alt="Bootstrap" style={{ width: "100%" }} />
          </Col>
          <Col xs={4} md={2} className="d-flex justify-content-center mb-4">
            <img src={MySqlImg} alt="MySQL" style={{ width: "100%" }} />
          </Col>
          <Col xs={4} md={2} className="d-flex justify-content-center mb-4">
            <img src={JSImg} alt="JavaScript" style={{ width: "100%" }} />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Skill;