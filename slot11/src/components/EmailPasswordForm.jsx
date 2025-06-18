import React, { useState, useEffect } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

// Hàm xác thực email
const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Hàm xác thực password
const validatePassword = (password) => {
  return password.length >= 8;
};

function EmailPasswordForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // useEffect cho email validation
  useEffect(() => {
    if (emailTouched) {
      const isValid = validateEmail(email);
      setEmailValid(isValid);
      if (!isValid && email.length > 0) {
        setEmailError("Vui lòng nhập một địa chỉ email hợp lệ!");
      } else if (email.length === 0) {
        setEmailError("Email không được để trống!");
      } else {
        setEmailError("");
      }
    }
  }, [email, emailTouched]);

  // useEffect cho password validation
  useEffect(() => {
    if (passwordTouched) {
      const isValid = validatePassword(password);
      setPasswordValid(isValid);
      if (!isValid && password.length > 0) {
        setPasswordError("Mật khẩu phải có ít nhất 8 ký tự!");
      } else if (password.length === 0) {
        setPasswordError("Mật khẩu không được để trống!");
      } else {
        setPasswordError("");
      }
    }
  }, [password, passwordTouched]);

  const handleEmailBlur = () => {
    setEmailTouched(true);
  };

  const handlePasswordBlur = () => {
    setPasswordTouched(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailValid && passwordValid && email && password) {
      alert("Đăng nhập thành công!");
      console.log("Email:", email);
      console.log("Password:", password);
    }
  };

  const isFormValid = emailValid && passwordValid && email && password;

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <h2 className="text-center mb-4">Đăng nhập</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="email" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={handleEmailBlur}
                isValid={emailTouched && emailValid && email}
                isInvalid={emailTouched && (!emailValid || !email)}
                placeholder="Nhập email của bạn"
              />
              <Form.Control.Feedback type="invalid">
                {emailError}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="password" className="mb-3">
              <Form.Label>Mật khẩu</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={handlePasswordBlur}
                isValid={passwordTouched && passwordValid && password}
                isInvalid={passwordTouched && (!passwordValid || !password)}
                placeholder="Nhập mật khẩu của bạn"
              />
              <Form.Control.Feedback type="invalid">
                {passwordError}
              </Form.Control.Feedback>
            </Form.Group>

            <Button 
              variant="primary" 
              type="submit" 
              disabled={!isFormValid}
              className="w-100"
            >
              Đăng nhập
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default EmailPasswordForm;
