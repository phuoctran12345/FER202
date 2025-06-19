import React from 'react';
import { Card, Button, ListGroup, ProgressBar, Badge, Row, Col } from 'react-bootstrap';

const Question = ({
                      question,
                      onAnswerSelected,
                      selectedAnswer,
                      onClickNext,
                      activeQuestion,
                      totalQuestions
                  }) => {
    const progress = ((activeQuestion + 1) / totalQuestions) * 100;

    return (
        <div>
            {/* Header với progress bar */}
            <Row className="mb-4">
                <Col>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <Badge bg="info" className="fs-6">
                            Câu hỏi {activeQuestion + 1} / {totalQuestions}
                        </Badge>
                        <Badge bg="secondary" className="fs-6">
                            {Math.round(progress)}% hoàn thành
                        </Badge>
                    </div>
                    <ProgressBar
                        now={progress}
                        variant="success"
                        animated
                        className="mb-3"
                        style={{ height: '8px' }}
                    />
                </Col>
            </Row>

            {/* Câu hỏi */}
            <Card className="mb-4 border-0 bg-light">
                <Card.Body>
                    <h3 className="text-center text-primary mb-0">
                        {question.question}
                    </h3>
                </Card.Body>
            </Card>

            {/* Các lựa chọn */}
            <ListGroup className="mb-4">
                {question.choices.map((choice, index) => (
                    <ListGroup.Item
                        key={index}
                        action
                        active={selectedAnswer === choice}
                        onClick={() => onAnswerSelected(choice)}
                        className={`d-flex align-items-center py-3 ${
                            selectedAnswer === choice ? 'border-primary' : ''
                        }`}
                        style={{ cursor: 'pointer' }}
                    >
                        <Badge
                            bg={selectedAnswer === choice ? 'primary' : 'secondary'}
                            className="me-3"
                        >
                            {String.fromCharCode(65 + index)}
                        </Badge>
                        <span className="fs-5">{choice}</span>
                    </ListGroup.Item>
                ))}
            </ListGroup>

            {/* Nút Next */}
            <div className="text-center">
                <Button
                    variant="success"
                    size="lg"
                    onClick={onClickNext}
                    disabled={!selectedAnswer}
                    className="px-5"
                >
                    {activeQuestion === totalQuestions - 1 ? (
                        <>🏁 Hoàn thành Quiz</>
                    ) : (
                        <>➡️ Câu tiếp theo</>
                    )}
                </Button>
            </div>
        </div>
    );
};

export default Question;
