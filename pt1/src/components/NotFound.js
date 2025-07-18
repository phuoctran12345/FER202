import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="text-center my-5">
      <h2>404 - Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <Button variant="primary" onClick={() => navigate('/laptops')}>
        Back to Laptops
      </Button>
    </div>
  );
}

export default NotFound;