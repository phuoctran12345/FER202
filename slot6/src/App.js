import React from 'react';
import './App.css';

const Card = ({ color, text, style }) => {
    return (
        <div className="card" style={{ borderColor: color, ...style }}>
            <img src="images/car.png" alt="Car" />
            <p>{text}</p>
        </div>
    );
};
function App() {
  return (
    <div>
      <h1>Cards Columns</h1>
      <div style={{ display: 'flex' }}>
        <Card color="blue" text="Some text inside the first card" style={{ backgroundColor: 'blue' }} />
        <Card color="gold" text="Some text inside the first card" style={{ backgroundColor: 'gold' }} />
        <Card color="red" text="Some text inside the first card" style={{ backgroundColor: 'red' }} />
      </div>
    </div>
  );
}

export default App;
