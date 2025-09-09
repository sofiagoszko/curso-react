import React from "react";
import {Navbar, Nav, Container} from "react-bootstrap";

const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand>Talento Tech 2025 </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav className="ns-auto">
                        <Nav.Link href="#">Inicio</Nav.Link>
                        <Nav.Link href="#">Galería</Nav.Link>
                        <Nav.Link href="#">Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;