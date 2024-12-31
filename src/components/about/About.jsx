import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import AOS from "aos";

const About = () => {
  const location = useLocation();

  useEffect(() => {
    AOS.refresh();
  }, [location]);
  return (
    <Container id="about">
      <div className="bg-primary p-4 rounded" data-aos="fade-up">
        <h1 className="text-center text-white">ABOUT ME</h1>
        <p className="text-center text-white mr-5 ml-5 mx-5">
          I am a Web Developer and Data Enthusiast with a passion for creating
          efficient, user-friendly digital solutions. Known for my creativity,
          responsibility, and ability to work quickly without compromising
          quality, I thrive in dynamic environments where innovation meets
          functionality. I enjoy leveraging data insights to inform my work and
          continuously strive to deliver impactful results.
        </p>
        <Row>
          <Col className="text-center" xs={6} md={4}>
            <h1>20</h1>
            <h5 className="text-white">Projects Done</h5>
          </Col>
          <Col className="text-center" xs={6} md={4}>
            <h1>2</h1>
            <h5 className="text-white">Years of experience</h5>
          </Col>
          <Col className="text-center" xs={6} md={4}>
            <h1>100</h1>
            <h5 className="text-white">Clients Served</h5>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default About;