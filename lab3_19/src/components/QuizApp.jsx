import React, { useState } from 'react';
import { Container, Card } from 'react-bootstrap';
import Question from "./Question";
import quizData from "../data/quizData";
import Score from "./Score";


const QuizApp = () => {
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [result, setResult] = useState({
        score: 0,
        correctAnswers: 0,
        wrongAnswers: 0
    });
    const [showResult, setShowResult] = useState(false);

    // Dữ liệu câu hỏi mẫu
    const questions = [
        {
            question: "React là gì?",
            choices: ["Library", "Framework", "Language", "Database"],
            correctAnswer: "Library"
        },
        {
            question: "JSX viết tắt của gì?",
            choices: ["JavaScript XML", "Java Syntax", "JSON XML", "JavaScript Extension"],
            correctAnswer: "JavaScript XML"
        },
        {
            question: "Hook nào được sử dụng để quản lý state?",
            choices: ["useEffect", "useState", "useContext", "useReducer"],
            correctAnswer: "useState"
        }
    ];

    const onAnswerSelected = (answer) => {
        setSelectedAnswer(answer);
    };

    const onClickNext = () => {
        const isCorrect = selectedAnswer === questions[activeQuestion].correctAnswer;

        if (isCorrect) {
            setResult(prev => ({
                ...prev,
                score: prev.score + 1,
                correctAnswers: prev.correctAnswers + 1
            }));
        } else {
            setResult(prev => ({
                ...prev,
                wrongAnswers: prev.wrongAnswers + 1
            }));
        }

        if (activeQuestion !== questions.length - 1) {
            setActiveQuestion(prev => prev + 1);
        } else {
            setShowResult(true);
        }

        setSelectedAnswer('');
    };

    const resetQuiz = () => {
        setActiveQuestion(0);
        setSelectedAnswer('');
        setResult({
            score: 0,
            correctAnswers: 0,
            wrongAnswers: 0
        });
        setShowResult(false);
    };

    return (
        <Container className="py-5">
            <Card className="shadow-lg">
                <Card.Header className="bg-primary text-white text-center">
                    <h1 className="mb-0">🧠 Quiz App ReactJS</h1>
                </Card.Header>
                <Card.Body className="p-4">
                    {!showResult ? (
                        <Question
                            question={questions[activeQuestion]}
                            onAnswerSelected={onAnswerSelected}
                            selectedAnswer={selectedAnswer}
                            onClickNext={onClickNext}
                            activeQuestion={activeQuestion}
                            totalQuestions={questions.length}
                        />
                    ) : (
                        <Score
                            result={result}
                            totalQuestions={questions.length}
                            resetQuiz={resetQuiz}
                        />
                    )}
                </Card.Body>
            </Card>
        </Container>
    );
};

export default QuizApp;
