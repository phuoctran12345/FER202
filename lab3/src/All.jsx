import React from 'react';
import { Navbar, Nav, Form, Button, Container, Row, Col, Card, Badge, Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

// Header Component
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

// Carousel Component
const MyCarousel = () => (
    <div style={{ width: "100%", maxWidth: "1200px", margin: "0 auto" }}>
        <Carousel>
            <Carousel.Item>
                <img
                    src="/images/pizza1.png"
                    alt="Pizza 1"
                    style={{
                        width: "100%",
                        maxHeight: "400px",
                        objectFit: "cover",
                        borderRadius: "10px"
                    }}
                />
                <Carousel.Caption>
                    <h2>Neapolitan Pizza</h2>
                    <p>If you are looking for traditional Italian pizza, the Neapolitan is the best option!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src="/images/pizza2.png"
                    alt="Pizza 2"
                    style={{
                        width: "100%",
                        maxHeight: "400px",
                        objectFit: "cover",
                        borderRadius: "10px"
                    }}
                />
                <Carousel.Caption>
                    <h2>Pepperoni Pizza</h2>
                    <p>Classic American favorite with lots of pepperoni!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src="/images/pizza3.png"
                    alt="Pizza 3"
                    style={{
                        width: "100%",
                        maxHeight: "400px",
                        objectFit: "cover",
                        borderRadius: "10px"
                    }}
                />
                <Carousel.Caption>
                    <h2>Veggie Pizza</h2>
                    <p>Fresh and healthy with a variety of vegetables!</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
);

// Menu Component
const pizzas = [
    {
        name: 'Margherita Pizza',
        price: 24,
        oldPrice: 40,
        img: 'images/menu1.png',
        tag: 'SALE',
    },
    {
        name: 'Mushroom Pizza',
        price: 25,
        img: 'images/menu2.png',
    },
    {
        name: 'Hawaiian Pizza',
        price: 30,
        img: 'images/menu3.png',
        tag: 'NEW',
    },
    {
        name: 'Pesto Pizza',
        price: 16,
        oldPrice: 50,
        img: 'images/menu4.png',
        tag: 'SALE',
    },
];

const Menu = () => (
    <Container className="my-5">
        <h2 className="text-white mb-4">Our Menu</h2>
        <Row>
            {pizzas.map((pizza, idx) => (
                <Col md={3} className="mb-4" key={idx}>
                    <Card className="h-100">
                        {pizza.tag && (
                            <Badge bg="warning" text="dark" className="position-absolute" style={{
                                top: 0,
                                left: 0,
                                borderTopLeftRadius: 6,
                                borderTopRightRadius: 0,
                                borderBottomRightRadius: 0,
                                borderBottomLeftRadius: 0
                            }}>{pizza.tag}</Badge>
                        )}

                        <Card.Img 
                            variant="top" 
                            src={pizza.img} 
                            alt={pizza.name}
                            style={{height: '61%', objectFit: 'cover'}}
                        />

                        <Card.Body>
                            <Card.Title>{pizza.name}</Card.Title>
                            <Card.Text>
                                {pizza.oldPrice && (
                                    <span className="text-decoration-line-through text-dark me-2">
                                        ${pizza.oldPrice}
                                    </span>
                                )}
                                <span
                                    className={
                                        pizza.price === 30
                                            ? "text-dark"
                                            : pizza.price === 25 && !pizza.oldPrice
                                                ? "text-dark"
                                                : "text-warning"
                                    }
                                >
                                    ${pizza.price}.00
                                </span>
                            </Card.Text>
                            <Button variant="dark" className="w-100">Buy</Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    </Container>
);

// BookTable Component
const BookTable = () => (
    <Container className="my-5">
        <h2 className="text-center text-white mb-4">Book Your Table</h2>
        <Form className="p-4 rounded">
            <Row className="mb-3">
                <Col md={4} className="mb-2">
                    <Form.Control type="text" placeholder="Your Name *" required />
                </Col>
                <Col md={4} className="mb-2">
                    <Form.Control type="email" placeholder="Your Email *" required />
                </Col>
                <Col md={4} className="mb-2">
                    <Form.Select required>
                        <option value="">Select a Service</option>
                        <option value="dinein">Dine In</option>
                        <option value="takeaway">Take Away</option>
                        <option value="delivery">Delivery</option>
                    </Form.Select>
                </Col>
            </Row>
            <Form.Group className="mb-3">
                <Form.Control as="textarea" rows={4} placeholder="Please write your comment" />
            </Form.Group>
            <Button type="submit" variant="warning" className="text-white">Send Message</Button>
        </Form>
    </Container>
);

// Main Component combining all components
const All = () => {
    return (
        <div>
            <Header />
            <MyCarousel />
            <Menu />
            <BookTable />
        </div>
    );
};

export default All;
