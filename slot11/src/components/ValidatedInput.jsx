import React, { useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from "react-bootstrap"; // ĐẢM BẢO CÓ DÒNG NÀY
const validatedInput = (value) => {
  return value.length >= 5;
};

function ValidatedInput() {
    const [value, setValue] = useState("");
    const [isValid , setIsValid] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const [touched , setTouched] = useState(false);

    // userEffect để thực hiện xác thực mỗi khi gía trị đầu vào thay đổi
    useEffect(() => {

        if (touched) {
            const isValidInput = validatedInput(value);
            setIsValid(isValidInput);
            if (!isValidInput) {
                setErrorMessage("Giá trị phải có ít nhất 5 ký tự");
            } else  {
                setErrorMessage("");
            }
        }
    }, [value , touched]);


    const handleBlur = () => {
        setTouched(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isValid && value.length >= 5) {
            alert("Form submitted successfully!");
        } else {
            alert("Please correct the errors before submitting.");
        }
    }
    return (
         <Form onSubmit={handleSubmit}>
            <Form.Group controlId="validatedInput">
                <Form.Label>Nhập một giá trị</Form.Label>
                <Form.Control
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onBlur={handleBlur}
                isValid={touched && isValid && value.length >= 5}
                isInvalid={touched && !isValid}
                />
                <Form.Control.Feedback type="invalid">
                {errorMessage}
                </Form.Control.Feedback>
            </Form.Group>

            <Button 
                variant="primary" 
                type="submit" 
                disabled={!isValid || value.length < 5}
                className="mt-3"
            >
                Gửi
            </Button>
    </Form>
    )
}

export default ValidatedInput;
