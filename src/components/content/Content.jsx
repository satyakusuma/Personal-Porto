import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import SatyaImg from "../../assets/Sungai.jpg";
import "./Content.css";

const Content = () => {
  return (
    <Container
      fluid
      className="content-section d-flex align-items-center"
      id="home"
    >
      <Container>
        <Row className="align-items-center">
          <Col
            xs={12}
            md={6}
            className="text-center text-md-start"
            data-aos="fade-right"
          >
            <h1 className="display-3 fw-bold">Hello, I'm</h1>
            <h2 className="display-2 fw-bold primary-color">
              Satya Tegar Kusuma
            </h2>
            <p className="lead mt-3">
              A passionate Web Developer and Data Enthusiast.
            </p>
            <div className="social-icons mt-4 d-flex justify-content-center justify-content-md-start gap-4">
              <a
                href="https://www.instagram.com/satyakusuma01"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/satya-tegar-kusuma-978b30233/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a
                href="https://github.com/satyakusuma"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-github"></i>
              </a>
            </div>
          </Col>

          <Col
            xs={12}
            md={6}
            className="d-flex justify-content-center align-items-center mt-5 mt-md-0"
            data-aos="fade-left"
          >
            <div className="image-container">
              <Image src={SatyaImg} alt="Satya Tegar Kusuma" fluid />
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Content;
