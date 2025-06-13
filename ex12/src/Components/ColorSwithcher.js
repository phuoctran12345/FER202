import React, { useState } from 'react';

function ColorSwitcher() {
    const [selectedColor, setSelectedColor] = useState('white');

    return (
        <div>
            <h1>Exercise 6</h1>
            <select
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value)}
            >
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
                <option value="yellow">Yellow</option>
            </select>
            <div
                style={{
                    width: '100px',
                    height: '100px',
                    backgroundColor: selectedColor,
                    marginTop: '10px',
                }}
            ></div>
        </div>
    );
}

export default ColorSwitcher;
