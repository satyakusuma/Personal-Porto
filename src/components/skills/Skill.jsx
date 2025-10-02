import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ReactImg from "../../assets/react 1.png";
import PythonImg from "../../assets/python 1.png";
import BootImg from "../../assets/Bootstrap 1.png";
import MySqlImg from "../../assets/mysql 1.png";
import JSImg from "../../assets/JS 1.png";

const SkillIcon = ({ img, alt }) => (
  <Col xs={4} md={2} className="d-flex justify-content-center mb-4">
    <div className="skill-icon-wrapper" data-aos="zoom-in">
      <img src={img} alt={alt} style={{ width: "100%", maxWidth: "80px" }} />
    </div>
  </Col>
);

const Skill = () => {
  return (
    <Container id="skill" className="py-5">
      <style>{`
          .skill-icon-wrapper {
            transition: transform 0.3s ease, filter 0.3s ease;
            filter: grayscale(80%);
          }
          .skill-icon-wrapper:hover {
            transform: scale(1.1);
            filter: grayscale(0%);
          }
        `}</style>
      <div data-aos="fade-up">
        <h1 className="section-title">SKILLS</h1>
        <Row className="mt-5 justify-content-center align-items-center">
          <SkillIcon img={ReactImg} alt="React" />
          <SkillIcon img={JSImg} alt="JavaScript" />
          <SkillIcon img={PythonImg} alt="Python" />
          <SkillIcon img={BootImg} alt="Bootstrap" />
          <SkillIcon img={MySqlImg} alt="MySQL" />
        </Row>
      </div>
    </Container>
  );
};

export default Skill;
