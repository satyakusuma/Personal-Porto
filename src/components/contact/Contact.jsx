import React, { useState } from "react";
import { Button, Col, Container, Row, Form } from "react-bootstrap";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ganti dengan service ID, template ID, dan user ID Anda dari EmailJS
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
      .then(
        (result) => {
          alert("Message sent successfully!");
        },
        (error) => {
          alert("Failed to send message, please try again.");
        }
      );
  };

  return (
    <Container id="contact" className="py-5 bg-light">
      <div data-aos="fade-up">
        <h1 className="section-title">CONTACT ME</h1>
        <p className="text-center lead mx-auto" style={{ maxWidth: "600px" }}>
          Have a question or a project in mind? I'd love to hear from you. Let's
          chat and make something amazing together.
        </p>
        <Row className="mt-5">
          <Col xs={12} md={5} className="mb-4 mb-md-0">
            <div className="contact-info">
              <p>
                <i className="bi bi-telephone-fill me-3"></i>+62 822-4106-5326
              </p>
              <p>
                <i className="bi bi-envelope-fill me-3"></i>
                satyategar25@gmail.com
              </p>
              <p>
                <i className="bi bi-geo-alt-fill me-3"></i>Purworejo, Central
                Java
              </p>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126529.3332402123!2d109.93290364335938!3d-7.712069299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7ae2a4661a3555%3A0x3027a76e352bab0!2sPurworejo%2C%20Purworejo%20Regency%2C%20Central%20Java!5e0!3m2!1sen!2sid!4v1678886666666"
              width="100%"
              height="250"
              style={{ border: 0, borderRadius: "15px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Col>
          <Col xs={12} md={7}>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  name="message"
                  rows={5}
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                style={{
                  backgroundColor: "#6A5ACD",
                  border: "none",
                  padding: "10px 30px",
                  borderRadius: "50px",
                }}
              >
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Contact;
