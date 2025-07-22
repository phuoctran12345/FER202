import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/actions/productActions.jsx';
import { Container, Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const ProductForm = () => {
  const [product, setProduct] = useState({
    id: '',
    name: '',
    price: '',
    description: '',
    catalogs: '',
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addProduct({
        ...product,
        id: uuidv4(),
        price: parseFloat(product.price),
        catalogs: product.catalogs.split(',').map((cat) => cat.trim()),
      })
    );
    setProduct({ id: '', name: '', price: '', description: '', catalogs: '' });
  };

  return (
    <Container className="mt-5">
      <h2>Add New Product</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            name="description"
            value={product.description}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Catalogs (comma-separated)</Form.Label>
          <Form.Control
            type="text"
            name="catalogs"
            value={product.catalogs}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button variant="success" type="submit">
          Add Product
        </Button>
      </Form>
    </Container>
  );
};

export default ProductForm;