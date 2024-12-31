import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import WebImg from "../../assets/internet-website-click-icon-vector 1.png";
import AnalImg from "../../assets/1042771 1.png";
import TesImg from "../../assets/images 1.png";

const Service = () => {
  return (
    <Container>
      <div className="p-4" data-aos="fade-up">
        <h1 className="text-center">SERVICES</h1>
        <Row className="mt-4 justify-content-center">
          <Col xs={12} md={4} className="d-flex justify-content-center mb-4">
            <div className="card border-0" style={{ width: "13rem" }}>
              <img
                className="card-img-top"
                src={WebImg}
                alt="Web Development"
              />
              <div className="card-body">
                <p className="card-text text-center">
                  Enhance your business branding with a responsive website,
                  whether it's front-end or back-end development
                </p>
              </div>
            </div>
          </Col>
          <Col xs={12} md={4} className="d-flex justify-content-center mb-4">
            <div className="card border-0" style={{ width: "13rem" }}>
              <img className="card-img-top" src={AnalImg} alt="Data Analysis" />
              <div className="card-body">
                <p className="card-text text-center">
                  Optimize and predict your data with machine learning to boost
                  productivity
                </p>
              </div>
            </div>
          </Col>
          <Col xs={12} md={4} className="d-flex justify-content-center mb-4">
            <div className="card border-0" style={{ width: "13rem" }}>
              <img
                className="card-img-top"
                src={TesImg}
                alt="Testing Services"
              />
              <div className="card-body">
                <p className="card-text text-center">
                  Test your application to minimize the risk of errors
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Service;