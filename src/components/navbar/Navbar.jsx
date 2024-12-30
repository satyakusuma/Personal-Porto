import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Navbar.css';

const CustomNavbar = () => {
  return (
    <div>
      <Navbar className="navbar-custom" expand="lg">
        <Container>
          <Navbar.Brand href="/" className="navbar-brand-custom">
            SATYA
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/" className="nav-link-custom">
                Home
              </Nav.Link>
              <Nav.Link href="#" className="nav-link-custom">
                About
              </Nav.Link>
              <Nav.Link href="#" className="nav-link-custom">
                Project
              </Nav.Link>
              <Nav.Link href="#" className="nav-link-contact">
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
