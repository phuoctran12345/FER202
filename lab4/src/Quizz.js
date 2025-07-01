import React, { useState, useEffect, createContext, useContext } from 'react';
import { Container, Form, Button, Card, ListGroup, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const QuizContext = createContext();

export const quizData = [
    {
        question: 'What is ReactJS?',
        answers: ['A JavaScript library for building user interfaces', 'A programming language', 'A database management system'],
        correctAnswer: 'A JavaScript library for building user interfaces'
    },
    {
        question: 'What is JSX?',
        answers: ['A programming language', 'A file format', 'A syntax extension for JavaScript'],
        correctAnswer: 'A syntax extension for JavaScript'
    }
];


function Quizz() {
    const [questions, setQuestions] = useState(quizData);             // questions: Lưu danh sách câu hỏi, khởi tạo từ quizData (sử dụng useEffect để thiết lập khi component được gắn kết).
    const [userAnswers, setUserAnswers] = useState({});               // ds câu key: chỉ số câu hỏi, value: đáp án được chọn
    const [results, setResults] = useState({});                       // ds kết quả  key: chỉ số câu hỏi, value: 'Đúng' hoặc 'Sai'

                                                                      // Lưu dữ liệu tạm thời khi người dùng nhập câu hỏi mới và đáp án.
    const [newQuestion, setNewQuestion] = useState('');               // State lưu câu hỏi mới từ ô nhập liệu
    const [newAnswers, setNewAnswers] = useState(['', '', '']);       // State lưu các đáp án mới (mảng 3 đáp án)
    const [newCorrectAnswer, setNewCorrectAnswer] = useState('');     // State lưu đáp án đúng mới từ ô nhập liệu

    const [score, setScore] = useState(null);                         // State lưu điểm số của người dùng (số câu trả lời đúng)
    const [quizCompleted, setQuizCompleted] = useState(false);        // State theo dõi trạng thái hoàn thành quiz

    // useEffect để khởi tạo danh sách câu hỏi với quizData khi thành phần được gắn kết
    useEffect(() => {
        setQuestions(quizData);
    }, []); // khởi tạo vs mảng ban đầu là mảng rỗng


    // check ô câu hỏi -> k rỗng ; có 3 đáp án  ; có đúng nội dung hay không
    const handleAddQuestion = () => {
        if (newQuestion && newAnswers.every(ans => ans) && newCorrectAnswer) {
            setQuestions([...questions, {
                question: newQuestion,
                answers: newAnswers,
                correctAnswer: newCorrectAnswer
            }]);
            setNewQuestion('');                                                // thêm câu hỏi mới -> ngừi dùng có thể vào ô nhập liệu mới mà không cần xoá đi nội dung cũ
            setNewAnswers(['', '', '']);
            setNewCorrectAnswer('');
        }
    };

    const checkAnswers = () => {
        const newResults = {};                                                 // khởi tạo một hàm rỗng để lưu key-value (Đ; Sai)
        let correctCount = 0;
        questions.forEach((q, index) => {
            const isCorrect = userAnswers[index] === q.correctAnswer;
            newResults[index] = isCorrect ? 'Đúng' : 'Sai';                    // Toán tử 3 ngôi -> duyệt mảng -> trùng với correctAnswer -> true ; k trùng flase
            if (isCorrect) correctCount++;
        });
        setResults(newResults);
        setScore(correctCount);
        setQuizCompleted(true);
    };

    // trả về mảng rỗng
    const resetQuiz = () => {                                                  // trả UserAnswers || Results ||  Score || QuizCompleted về trạng thái ban đầu 
        setUserAnswers({});
        setResults({});
        setScore(null);
        setQuizCompleted(false);
    };

    return (
        
        <QuizContext.Provider value={{ userAnswers, setUserAnswers }}>
            <Container className="mt-4" style={{ maxWidth: '600px' }}>
                <h2 className="text-center mb-4">Thêm câu hỏi mới</h2>
                <Form>                                                        {/* Thành phần Form (có thể từ react-bootstrap) để chứa các trường nhập liệu */} 
                    <Form.Group className="mb-3"> 
                        <Form.Control
                            type="text"
                            value={newQuestion}
                            onChange={(e) => setNewQuestion(e.target.value)}    //cập nhật state newQuestion khi người dùng nhập 
                            placeholder="Nhập câu hỏi"
                        />
                    </Form.Group>
                    

                    {/* nối chuỗi mảng  newAnswers để list ra các ô nhập  đáp án -> nhập đáp án mới -> sẽ lưu các đáp án mới vào state */}
                    {newAnswers.map((answer, index) => (
                        <Form.Group className="mb-3" key={index}>                {/* xét key cho mỗi đáp án mới  */}
                            <Form.Control
                                type="text"
                                value={answer}
                                onChange={(e) => {
                                    const updatedAnswers = [...newAnswers];       // bản sao của mảng newAnswers bằng cách sử dụng toán tử spread (...).
                                    updatedAnswers[index] = e.target.value;
                                    setNewAnswers(updatedAnswers);
                                }}
                                placeholder={`Đáp án ${index + 1}`}
                            />
                        </Form.Group>
                    ))}


                    <Form.Group className="mb-3">
                        <Form.Control
                            type="text"
                            value={newCorrectAnswer}
                            onChange={(e) => setNewCorrectAnswer(e.target.value)} // khởi tạo một đáp correctAnswer mới 
                            placeholder="Đáp án đúng"
                        />
                    </Form.Group>


                    <Button variant="primary" onClick={handleAddQuestion} className="w-100">
                        Thêm câu hỏi
                    </Button>
                </Form>

                {/* ==================================================================== */}
                <h2 className="text-center mt-5 mb-4">Danh sách câu hỏi</h2>
                {questions.map((q, index) => (
                    <Question key={index} index={index} question={q} />
                ))}

                {/* ==================================================================== */}

                <Button variant="success" onClick={checkAnswers} className="w-100 mt-3">
                    Kiểm tra đáp án
                </Button>


                {quizCompleted && (
                    <Alert variant="danger" className="mt-3 text-center">
                        <h2>Quiz Completed!</h2>
                        <p>Your score: {score} / {questions.length}</p>
                        <Button variant="danger" onClick={resetQuiz}>New</Button>
                    </Alert>
                )}

                {Object.keys(results).map((index) => (
                    <p
                        key={index}
                        className={`mt-3 text-center ${results[index] === 'Đúng' ? 'text-success' : 'text-danger'}`}
                    >
                        Câu {parseInt(index) + 1}: {results[index]}
                    </p>
                ))}
            </Container>
        </QuizContext.Provider>
    );
}

// Component con để hiển thị câu hỏi và đáp án
function Question({ index, question }) {
    const { userAnswers, setUserAnswers } = useContext(QuizContext);                      // sd useContext lấy userAnswers và setUserAnswers từ QuizContext 

    return (
        <Card className="mb-3">
            <Card.Body>
                <Card.Title>{index + 1}. {question.question}</Card.Title>                 {/*số câu hỏi + 1 */}
                <ListGroup>                                                               {/*Duyệt qua mảng answers của câu hỏi để tạo radio button cho mỗi đáp án */}
                    {question.answers.map((answer, ansIndex) => (                       
                        <ListGroup.Item key={ansIndex}>
                            <Form.Check
                                type="radio"
                                name={`question-${index}`}
                                value={answer}
                                label={answer}
                                onChange={() => {
                                    setUserAnswers({ ...userAnswers, [index]: answer });   {/* hover event khi user click vào đáp án -> cập nhật userAnswers*/}
                                }}
                                checked={userAnswers[index] === answer}                    //Đánh dấu radio button nếu đáp án này đã được chọn 
                            />
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Card.Body>
        </Card>
    );
}

export default Quizz;