import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import All from './All';
import BookTable     from "./components/BookTable";
import Carousel from "./components/Carousel";
import Menu from "./components/Menu";
import Header from "./components/Header";

function App() {
  return (
    <div className="App" style={{ backgroundColor: '#212529', minHeight: '100vh' }}>
        <Header />
        <Carousel />
        <Menu />
        <BookTable />
    </div>
  );
}

export default App;
