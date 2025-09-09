import React from "react";
import {Container} from "react-bootstrap"

const Footer = () => {
    return (
        <footer className="bg-dark text-white text-center py-3 mt-5"> 
            <Container>
                <p className="mb-0">2025 - Derechos reservados</p>
                <p className="mb-0">Version: 1.0.0</p>
            </Container>
        </footer>
    );
};

export default Footer;