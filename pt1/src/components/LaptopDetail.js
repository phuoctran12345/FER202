import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Card, Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function LaptopDetail() {
    const { id } = useParams();
    const [laptop, setLaptop] = useState(null);
    const [notFound, setNotFound] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3002/Laptops/${id}`)
            .then(res => {
                if (res.data) {
                    setLaptop(res.data);
                } else {
                    setNotFound(true);
                }
            })
            .catch(() => setNotFound(true));
    }, [id]);

    if (notFound) {
        return <h3 className="text-center text-danger mt-5">404 Not Found: Laptop with id {id} does not exist.</h3>;
    }

    if (!laptop) {
        return null;
    }

    return (
        <Container className="d-flex justify-content-center align-items-center mt-5">
            <Card style={{ maxWidth: '350px', width: '100%' }} className="shadow rounded">
                <Card.Img
                    variant="top"
                    src={laptop.image}
                    alt={laptop.model}
                    style={{ objectFit: 'cover', height: '220px', width: '100%' }}
                />
                <Card.Body>
                    <Card.Title className="fs-4 mb-3">{laptop.brand} {laptop.model}</Card.Title>
                    <Card.Text>
                        <b>Year:</b> {laptop.year} <br />
                        <b>Price:</b> {laptop.price} <br />
                        <b>Description:</b>
                    </Card.Text>
                    <Button
                        variant="primary"
                        className="mt-3 w-100"
                        onClick={() => navigate('/laptops')}
                    >
                        Back to Laptop List
                    </Button>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default LaptopDetail;