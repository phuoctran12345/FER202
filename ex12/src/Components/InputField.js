import React, {useState} from 'react';

const InputField = () => {
    const [inputValue , setInputValue] = useState('');

  return (
      <div>
          <h1>Exercise 2</h1>
          <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type something..."
          />
          <p>Type Text: {inputValue}</p>
      </div>
  );
};

export default InputField;
