import React from 'react';
import { Navbar, Nav, Form, Button, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Header = () => (
    <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
            <Navbar.Brand href="#" style={{paddingLeft: '120px'}}>Pizza House</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarNav" />
            <Navbar.Collapse id="navbarNav">
                <Nav className="me-auto mb-2 mb-lg-0">
                    <Nav.Link href="#" active>Home</Nav.Link>
                    <Nav.Link href="#">About Us</Nav.Link>
                    <Nav.Link href="#">Contact</Nav.Link>
                </Nav>
                <Form className="d-flex" style={{paddingRight: '120px'}}>
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="danger" type="submit" style={{paddingRight: '22px'}}>
                        <FontAwesomeIcon icon={faSearch}/>
                    </Button>
                </Form>
            </Navbar.Collapse>
        </Container>
    </Navbar>
);

export default Header;

//https://react-bootstrap.netlify.app/docs/components/navbar