import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions.jsx';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';

const ProductList = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  return (
    <Container className="mt-5">
      <h2>Products</h2>
      <Row>
        {products.map((product) => (
          <Col md={4} key={product.id} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                  <strong>ID:</strong> {product.id}<br />
                  <strong>Price:</strong> ${product.price.toFixed(2)}<br />
                  <strong>Description:</strong> {product.description}<br />
                  <strong>Catalogs:</strong> {product.catalogs.join(', ')}
                </Card.Text>
                <Button
                  variant="primary"
                  onClick={() => dispatch(addToCart(product))}
                >
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;