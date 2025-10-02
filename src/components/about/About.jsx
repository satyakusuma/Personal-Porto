import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const About = () => {
  return (
    <Container id="about" className="py-5">
      <div
        className="p-5 rounded-3"
        style={{
          background: "linear-gradient(45deg, #6A5ACD, #8A2BE2)",
          color: "white",
        }}
        data-aos="fade-up"
      >
        <h1 className="text-center section-title text-white">ABOUT ME</h1>
        <p className="text-center lead mx-auto" style={{ maxWidth: "800px" }}>
          I am a Web Developer and Data Enthusiast with a passion for creating
          efficient, user-friendly digital solutions. Known for my creativity,
          responsibility, and ability to work quickly without compromising
          quality, I thrive in dynamic environments where innovation meets
          functionality.
        </p>
        <Row className="mt-5 text-center">
          <Col xs={12} md={4} className="mb-4 mb-md-0">
            <h2 className="display-4 fw-bold">20+</h2>
            <h5>Projects Done</h5>
          </Col>
          <Col xs={12} md={4} className="mb-4 mb-md-0">
            <h2 className="display-4 fw-bold">2</h2>
            <h5>Years of Experience</h5>
          </Col>
          <Col xs={12} md={4}>
            <h2 className="display-4 fw-bold">100+</h2>
            <h5>Happy Clients</h5>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default About;
