
import React, {useState} from 'react';
import {Button} from "react-bootstrap";

const Counter = () => {
    const [count , setCount] =useState(0);
    return (
    <div>
        <h1>Exercise 1</h1>
        <p>Current Count: {count}</p>
        <Button onMouseUp={() => setCount(count + 1)}>
            Click me
        </Button>

        <Button onMouseDown={() => {
            if (count > 0) {
                setCount(count - 1);
            }
        }}>
            Click me
        </Button>
    </div>
  );
};

export default Counter;
