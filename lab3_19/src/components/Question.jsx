import React from 'react';
import { Card, Button, ListGroup, ProgressBar, Badge, Row, Col } from 'react-bootstrap';

const Question = ({
                      question, // dạng chuỗi
                      onAnswerSelected, // Hàm callback được gọi khi người dùng chọn một lựa chọn.
                      selectedAnswer, // Lựa chọn hiện tại mà người dùng đã chọn (dùng để đánh dấu lựa chọn đang được chọn).
                      onClickNext, // Hàm callback được gọi khi người dùng nhấn nút "Câu tiếp theo" hoặc "Hoàn thành Quiz".
                      activeQuestion, // Số thứ tự của câu hỏi hiện tại (bắt đầu từ 0).
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
                        <Badge bg="secondary" className="fs-6">{ /* Math.round -> làm tròn số */}
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
                        {question.question} {/*question.question: Nội dung câu hỏi (chuỗi).*/}
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
                    > {/*question.choices: Mảng các lựa chọn trả lời.*/}
                        <Badge
                            bg={selectedAnswer === choice ? 'primary' : 'secondary'}
                            className="me-3"
                        >
                            {String.fromCharCode(65 + index)}
                            { /*index = 0 + 65 -> A ; index = 1 + 65 -> A ; index = 2 + 65 -> C*/}
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
