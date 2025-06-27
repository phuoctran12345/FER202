import React, { useReducer, useState } from "react";
import { Button, Form, Container, Alert } from "react-bootstrap";
import PropTypes from "prop-types";

// Trạng thái ban đầu
const initialState = {
    name: "",
    age: "",
    email: "",
    phone: "",
    gender: "",
    agreed: false,
    isSubmitted: false,
};

// Reducer
const formReducer = (state, action) => {
    switch (action.type) {
        case "SET_FIELD":
            return { ...state, [action.field]: action.value };
        case "TOGGLE_AGREE":
            return { ...state, agreed: !state.agreed };
        case "SUBMIT":
            return { ...state, isSubmitted: true };
        default:
            return state;
    }
};

const MyFormExample4 = ({ title, onSubmit }) => {
    const [state, dispatch] = useReducer(formReducer, initialState);
    const [errors, setErrors] = useState({});
    const [showAlert, setShowAlert] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const fieldValue = type === "checkbox" ? checked : value;
        dispatch({ type: "SET_FIELD", field: name, value: fieldValue });
    };

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validatePhone = (phone) => /^\d{10,15}$/.test(phone);

    const handleValidation = () => {
        const newErrors = {};

        if (!state.name.trim()) {
            newErrors.name = "Tên không được để trống!";
        } else if (state.name.length < 3 || state.name.length > 50) {
            newErrors.name = "Tên phải có từ 3 đến 50 ký tự!";
        }

        const age = parseInt(state.age);
        if (!state.age) {
            newErrors.age = "Tuổi không được để trống!";
        } else if (isNaN(age) || age < 18 || age > 100) {
            newErrors.age = "Tuổi phải nằm trong khoảng từ 18 đến 100!";
        }

        if (!state.email.trim()) {
            newErrors.email = "Email không được để trống!";
        } else if (!validateEmail(state.email)) {
            newErrors.email = "Email không đúng định dạng!";
        }

        if (!state.phone) {
            newErrors.phone = "Số điện thoại không được để trống!";
        } else if (!validatePhone(state.phone)) {
            newErrors.phone = "Số điện thoại phải từ 10 đến 15 chữ số!";
        }

        if (!state.agreed) {
            newErrors.agreed = "Bạn phải đồng ý với điều khoản!";
        }

        setErrors(newErrors);
        setShowAlert(Object.keys(newErrors).length > 0);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (handleValidation()) {
            dispatch({ type: "SUBMIT" });
            onSubmit(state);
        }
    };

    return (
        <Container>
            <h4 className="mb-3">{title}</h4>

            {showAlert && (
                <Alert variant="danger">
                    <strong>Lỗi:</strong> Vui lòng kiểm tra các trường hợp lỗi.
                </Alert>
            )}

            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Tên</Form.Label>
                    <Form.Control
                        name="name"
                        value={state.name}
                        onChange={handleChange}
                        isInvalid={!!errors.name}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.name}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Tuổi</Form.Label>
                    <Form.Control
                        name="age"
                        type="number"
                        value={state.age}
                        onChange={handleChange}
                        isInvalid={!!errors.age}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.age}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        name="email"
                        type="email"
                        value={state.email}
                        onChange={handleChange}
                        isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.email}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Số điện thoại</Form.Label>
                    <Form.Control
                        name="phone"
                        value={state.phone}
                        onChange={handleChange}
                        isInvalid={!!errors.phone}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.phone}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Giới tính</Form.Label>
                    <Form.Control
                        as="select"
                        name="gender"
                        value={state.gender}
                        onChange={handleChange}
                    >
                        <option value="">-- Chọn giới tính --</option>
                        <option value="Nam">Nam</option>
                        <option value="Nữ">Nữ</option>
                        <option value="Khác">Khác</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group className="mt-2">
                    <Form.Check
                        type="checkbox"
                        label="Đồng ý với điều khoản"
                        name="agreed"
                        checked={state.agreed}
                        onChange={() => dispatch({ type: "TOGGLE_AGREE" })}
                        isInvalid={!!errors.agreed}
                    />
                    {errors.agreed && (
                        <div className="text-danger" style={{ fontSize: "0.875em" }}>
                            {errors.agreed}
                        </div>
                    )}
                </Form.Group>

                <Button type="submit" variant="primary" className="mt-3">
                    Gửi
                </Button>
            </Form>
        </Container>
    );
};

MyFormExample4.propTypes = {
    title: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default MyFormExample4;
