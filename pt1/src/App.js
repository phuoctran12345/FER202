import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import LoginForm from './components/LoginForm';
import LaptopList from './components/LaptopList.js';
import LaptopDetail from './components/LaptopDetail';
import NotFound from './components/NotFound';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Container className="my-4">
        <Routes>
          <Route path="/" element={<LoginForm setUser={setUser} />} />
          <Route path="/laptops" element={<LaptopList user={user} />} />
          <Route path="/laptops/:id" element={<LaptopDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;