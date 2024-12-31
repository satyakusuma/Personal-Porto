import { Button, Col, Container, Row } from "react-bootstrap";
import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_z0yonuy",
        "template_0u7mj8k",
        e.target,
        "F_mGSMrySOvwFyVD7"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          console.log(result.text);
        },
        (error) => {
          alert("Message sending failed!");
          console.log(error.text);
        }
      );
  };
  return (
    <Container id="contact" data-aos="fade-up">
      <div className="p-4 bg-light">
        <h1 className="text-center">CONTACT ME</h1>
        <p className="text-center">
          Have aquestion or a project in mind? i'd love to hear you. Let's chat
          and make something amazing together
        </p>
        <Row>
          <Col xs={6}>
            <Row xs="auto">
              <Col>
                <i className="bi bi-telephone-outbound"></i>
              </Col>
              <Col className="align-items-center">+6282241065326</Col>
            </Row>
            <Row xs="auto">
              <Col>
                <i className="bi bi-envelope"></i>
              </Col>
              <Col className="align-items-center">satyategar25@gmail.com</Col>
            </Row>
            <Row xs="auto">
              <Col>
                <i className="bi bi-geo-alt"></i>
              </Col>
              <Col className="align-items-center">Purworejo, Central Java</Col>
            </Row>
            <Row xs="auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.0905974497941!2d109.8930131681055!3d-7.742046469717013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7ac3cc3a931875%3A0x910d21458016480e!2sSuren%2C%20Kec.%20Kutoarjo%2C%20Kabupaten%20Purworejo%2C%20Jawa%20Tengah!5e0!3m2!1sid!2sid!4v1735621670278!5m2!1sid!2sid"
                width="400"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Row>
          </Col>
          <Col xs={6}>
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-4">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group mb-4">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group mb-4">
                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group mb-4">
                <textarea
                  className="form-control"
                  name="message"
                  rows="3"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <Button variant="primary" type="submit">
                Send
              </Button>
            </form>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Contact;