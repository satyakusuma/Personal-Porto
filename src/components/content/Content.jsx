import React from 'react';
import { Container, Row, Col, Image } from "react-bootstrap";
import SatyaImg from "../../assets/Sungai.jpg";
import './Content.css';

const Content = () => {
  return (
    <Container fluid className="bg-light vh-100 d-flex align-items-center animate-text">
      <Row className="w-100">
        <Col xs={12} md={6} className="d-flex flex-column justify-content-center text-center text-md-start">
          <h1 className="fw-bold animate-text text-margin">Hello,</h1>
          <h2 style={{ color: "#6A5ACD" }} className="fw-bold">
            I'm Satya Tegar Kusuma
          </h2>
          <p className="fs-5">Web Developer and Data Enthusiast</p>
          <div className="d-flex justify-content-center justify-content-md-start gap-3">
            <a href="https://www.instagram.com/satyakusuma01" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-instagram fs-3"></i>
            </a>
            <a href="#https://www.linkedin.com/in/satya-tegar-kusuma-978b30233/" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-linkedin fs-3"></i>
            </a>
            <a href="https://github.com/satyakusuma" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-github fs-3"></i>
            </a>
          </div>
        </Col>

        <Col xs={12} md={6} className="d-flex justify-content-center align-items-center">
          <div className="rounded overflow-hidden shadow-lg" style={{ width: "500px", height: "600px" }}>
            <Image
              src={SatyaImg}
              alt="Satya Tegar Kusuma"
              fluid
              style={{ objectFit: "cover", height: "100%" }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Content;
