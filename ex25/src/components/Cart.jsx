import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Table, Button } from 'react-bootstrap';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalCost = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <Container className="mt-5">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>Catalogs</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>{item.catalogs.join(', ')}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <h4>Total Cost: ${totalCost.toFixed(2)}</h4>
        </>
      )}
    </Container>
  );
};

export default Cart;