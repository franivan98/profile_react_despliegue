import React from "react";
import {Navbar,Nav} from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import {Container} from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";

function Header(){
    return(
        <Navbar bg="light" expand="lg">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>MI PERFIL</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to="/">
                            <Nav.Link>Inicio</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/about">
                            <Nav.Link>Acerca De</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/hobbies">
                            <Nav.Link>Hobbies</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/contact">
                            <Nav.Link>Contacto</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;