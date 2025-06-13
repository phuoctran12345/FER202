import React, {useState} from 'react';
import {Button} from "react-bootstrap";

const ToggleVisibility = () => {
    const [isVisible , setIsVisible] = useState(false);

  return (
      <div>
          <h1>Exercise 3</h1>
          <Button onClick={() => setIsVisible(!isVisible)}>
              {isVisible ? 'Hide' : 'Show'}
          </Button>
          {isVisible && <p>This text can be toggled!</p>}
      </div>
  );
};

export default ToggleVisibility;
//Giải thích: Ban đầu isVisible là false, nên văn bản bị ẩn. Khi nhấn nút, trạng thái được đảo ngược, và văn bản sẽ hiển thị hoặc ẩn tương ứng .