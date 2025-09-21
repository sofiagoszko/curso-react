import React from 'react';
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';

export default function NavBar() {
  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/">Inicio</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link href="#equipo">Equipo</Nav.Link>
            <Nav.Link href="#proyectos">Proyectos</Nav.Link>
          </Nav>
          <Form className="d-flex" role="search">
            <FormControl type="search" placeholder="Search" className="me-2" />
            <Button variant="light" style={{ color: '#0d6efd' }}>Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}