import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import WebImg from "../../assets/internet-website-click-icon-vector 1.png";
import AnalImg from "../../assets/1042771 1.png";
import TesImg from "../../assets/images 1.png";

const ServiceCard = ({ img, title, text }) => (
  <Col xs={12} md={4} className="d-flex justify-content-center mb-4">
    <div
      className="card border-0 text-center p-4 h-100"
      style={{
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)",
        transition: "transform 0.3s ease",
      }}
      onMouseOver={(e) =>
        (e.currentTarget.style.transform = "translateY(-10px)")
      }
      onMouseOut={(e) => (e.currentTarget.style.transform = "translateY(0)")}
    >
      <img
        className="card-img-top mx-auto"
        src={img}
        alt={title}
        style={{ width: "80px", height: "80px" }}
      />
      <div className="card-body">
        <h5 className="card-title fw-bold">{title}</h5>
        <p className="card-text">{text}</p>
      </div>
    </div>
  </Col>
);

const Service = () => {
  return (
    <Container id="service" className="py-5">
      <div data-aos="fade-up">
        <h1 className="section-title">SERVICES</h1>
        <Row className="mt-4 justify-content-center">
          <ServiceCard
            img={WebImg}
            title="Web Development"
            text="Enhance your business branding with a responsive website, from front-end to back-end."
          />
          <ServiceCard
            img={AnalImg}
            title="Data Analysis"
            text="Optimize and predict your data with machine learning to boost productivity."
          />
          <ServiceCard
            img={TesImg}
            title="Application Testing"
            text="Ensure your application is bug-free and performs optimally to minimize risks."
          />
        </Row>
      </div>
    </Container>
  );
};

export default Service;
