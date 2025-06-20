import React, { useReducer, useState } from "react";
import { Button, Container, Card, Row, Col } from "react-bootstrap";
import { FaTimesCircle } from "react-icons/fa";

const initialState = {
    questions: [
        {
            id: 1,
            question: "What is the capital of Australia?",
            options: ["Sydney", "Canberra", "Melbourne", "Perth"],
            answer: "Canberra",
        },
        {
            id: 2,
            question: "Which planet is known as the Red Planet?",
            options: ["Venus", "Mars", "Jupiter", "Saturn"],
            answer: "Mars",
        },
        {
            id: 3,
            question: "What is the largest ocean on Earth?",
            options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
            answer: "Pacific Ocean",
        },
    ],
    currentQuestion: 0,
    selectedOption: "",
    score: 0,
    showScore: false,
    feedback: null,
};

function quizReducer(state, action) {
    switch (action.type) {
        case "SELECT_OPTION":
            const isCorrect = action.payload === state.questions[state.currentQuestion].answer;
            return {
                ...state,
                selectedOption: action.payload,
                feedback: isCorrect
                    ? { correct: true, message: "Correct! 🎉" }
                    : { correct: false, message: `Incorrect! The correct answer is: ${state.questions[state.currentQuestion].answer}` },
            };
        case "NEXT_QUESTION":
            return {
                ...state,
                currentQuestion: state.currentQuestion + 1,
                selectedOption: "",
                feedback: null,
                showScore: state.currentQuestion + 1 === state.questions.length,
            };
        case "RESTART_QUIZ":
            return { ...initialState };
        default:
            return state;
    }
}

function QuestionBankAdvanced() {
    const [state, dispatch] = useReducer(quizReducer, initialState);
    const { questions, currentQuestion, selectedOption, showScore, feedback } = state;

    const handleOptionSelect = (option) => {
        dispatch({ type: "SELECT_OPTION", payload: option });
    };

    const handleNextQuestion = () => {
        dispatch({ type: "NEXT_QUESTION" });
    };

    const handleRestartQuiz = () => {
        dispatch({ type: "RESTART_QUIZ" });
    };

    return (
        <Container className="mt-4">
            <Row>
                <Col xs={12} md={8} lg={6} className="mx-auto">
                    <Card className="p-4">
                        {showScore ? (
                            <div className="text-center">
                                <h2>Your Score: 0 / {questions.length}</h2>
                                <Button variant="primary" onClick={handleRestartQuiz}>
                                    Restart Quiz
                                </Button>
                            </div>
                        ) : (
                            <div>
                                <h2 className="mb-3">Question {questions[currentQuestion].id}:</h2>
                                <h4 className="mb-4">{questions[currentQuestion].question}</h4>
                                <div className="d-flex flex-wrap justify-content-center mb-4">
                                    {questions[currentQuestion].options.map((option, index) => (
                                        <Button
                                            key={index}
                                            variant={selectedOption === option ? "success" : "outline-secondary"}
                                            className="m-2"
                                            style={{
                                                padding: "10px 20px",
                                                borderRadius: "5px",
                                                minWidth: "120px",
                                            }}
                                            onClick={() => handleOptionSelect(option)}
                                        >
                                            {option}
                                        </Button>
                                    ))}
                                </div>
                                {feedback && (
                                    <p className="text-danger d-flex align-items-center mb-3">
                                        <FaTimesCircle className="me-2" />
                                        {feedback.message}
                                    </p>
                                )}
                                <Button
                                    variant="primary"
                                    className="mt-3"
                                    disabled={!selectedOption}
                                    onClick={handleNextQuestion}
                                    style={{ backgroundColor: "#007bff", borderColor: "#007bff", padding: "10px 20px", borderRadius: "5px" }}
                                >
                                    {currentQuestion === questions.length - 1 ? "Finish Quiz" : "Next Question"}
                                </Button>
                            </div>
                        )}
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default QuestionBankAdvanced;