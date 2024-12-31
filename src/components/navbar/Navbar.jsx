import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Navbar.css";

const CustomNavbar = () => {
  return (
    <div>
      <Navbar expand="md">
        <Container className="navbar-custom">
          <Navbar.Brand href="/" className="navbar-brand-custom">
            SATYA
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className="nav-link-custom">
                Home
              </Nav.Link>
              <Nav.Link href="#about" className="nav-link-custom">
                About
              </Nav.Link>
              <Nav.Link href="#project" className="nav-link-custom">
                Project
              </Nav.Link>
              <Nav.Link href="#contact" className="nav-link-contact">
                Contact Me
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default CustomNavbar;