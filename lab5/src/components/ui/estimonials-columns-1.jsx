import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";

export const TestimonialsColumn = ({ testimonials, duration, className }) => {
    return (
        <Row className={className}>
            {testimonials.map((item, index) => (
                <Col key={index} md={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={item.image} />
                        <Card.Body>
                            <Card.Text>"{item.text}"</Card.Text>
                            <Card.Subtitle className="mt-2 text-muted">
                                — {item.name}, {item.role}
                            </Card.Subtitle>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};

TestimonialsColumn.propTypes = {
    testimonials: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string,
            image: PropTypes.string,
            name: PropTypes.string,
            role: PropTypes.string,
        })
    ).isRequired,
    duration: PropTypes.number,
    className: PropTypes.string,
};
