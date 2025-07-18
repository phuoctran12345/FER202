import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function LaptopList() {
  const [laptops, setLaptops] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredLaptops, setFilteredLaptops] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3002/Laptops')
      .then(res => {
        setLaptops(res.data);
        setFilteredLaptops(res.data);
      })
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    // Filter mỗi khi searchTerm thay đổi
    const filtered = laptops.filter(
      (laptop) =>
        laptop.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        laptop.model.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredLaptops(filtered);
  }, [searchTerm, laptops]);

  return (
    <div>
      <h2 className="text-center">Laptop List</h2>
      <Form className="mb-4">
        <Form.Group controlId="searchLaptop">
          <Form.Label>Search by Name</Form.Label>
          <Form.Control
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Enter brand or model"
          />
        </Form.Group>
      </Form>
      <Row>
        {filteredLaptops.map(laptop => (
          <Col key={laptop.id} md={3} className="mb-4 d-flex">
            <Card className="h-100 d-flex flex-column w-100">
              <Card.Img
                variant="top"
                src={laptop.image}
                style={{ width: '100%', height: '180px', objectFit: 'cover', objectPosition: 'center' }}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{laptop.brand} {laptop.model}</Card.Title>
                <Card.Text>
                  <b>Year:</b> {laptop.year} <br />
                  <b>Price:</b> {laptop.price}
                </Card.Text>
                <Button
                  variant="primary"
                  className="mt-auto"
                  onClick={() => navigate(`/laptops/${laptop.id}`)}
                >
                  View Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default LaptopList;