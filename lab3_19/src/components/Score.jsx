import React from 'react';
import { Card, Button, Row, Col, Badge, Alert } from 'react-bootstrap';

const Score = ({ result, totalQuestions, resetQuiz }) => {
    const percentage = Math.round((result.score / totalQuestions) * 100);

    // Xác định màu sắc và thông điệp dựa trên điểm số
    const getResultVariant = () => {
        if (percentage >= 80) return 'success';
        if (percentage >= 60) return 'warning';
        return 'danger';
    };

    const getResultMessage = () => {
        if (percentage >= 80) return 'Xuất sắc! 🎉';
        if (percentage >= 60) return 'Khá tốt! 👍';
        return 'Cần cố gắng thêm! 💪';
    };

    return (
        <div className="text-center">
            <Card className="border-0">
                <Card.Body>
                    <h2 className="mb-4 text-primary">🏆 Kết quả Quiz</h2>

                    {/* Alert thông báo */}
                    <Alert variant={getResultVariant()} className="mb-4">
                        <h4 className="mb-0">{getResultMessage()}</h4>
                    </Alert>

                    {/* Điểm số chính */}
                    <div className="mb-4">
                        <h1 className="display-1 text-primary mb-2">
                            {result.score}/{totalQuestions}
                        </h1>
                        <Badge
                            bg={getResultVariant()}
                            className="fs-3 px-4 py-2"
                        >
                            {percentage}%
                        </Badge>
                    </div>

                    {/* Chi tiết kết quả */}
                    <Row className="mb-4">
                        <Col md={4}>
                            <Card className="h-100 border-success">
                                <Card.Body className="text-center">
                                    <div className="text-success mb-2">
                                        <i className="fas fa-check-circle fa-2x"></i>
                                    </div>
                                    <h5 className="text-success">Đúng</h5>
                                    <h3 className="text-success">{result.correctAnswers}</h3>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className="h-100 border-danger">
                                <Card.Body className="text-center">
                                    <div className="text-danger mb-2">
                                        <i className="fas fa-times-circle fa-2x"></i>
                                    </div>
                                    <h5 className="text-danger">Sai</h5>
                                    <h3 className="text-danger">{result.wrongAnswers}</h3>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className="h-100 border-info">
                                <Card.Body className="text-center">
                                    <div className="text-info mb-2">
                                        <i className="fas fa-question-circle fa-2x"></i>
                                    </div>
                                    <h5 className="text-info">Tổng câu</h5>
                                    <h3 className="text-info">{totalQuestions}</h3>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    {/* Nút làm lại */}
                    <Button
                        variant="primary"
                        size="lg"
                        onClick={resetQuiz}
                        className="px-5"
                    >
                        🔄 Làm lại Quiz
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Score;
