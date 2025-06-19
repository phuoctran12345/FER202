// src/data/quizData.js
import React from "react";
const quizData = [
    {
        id: 1,
        question: "React là gì?",
        options: ["Library", "Framework", "Language", "Database"],
        correctAnswer: "Library"
    },
    {
        id: 2,
        question: "JSX viết tắt của gì?",
        options: ["JavaScript XML", "Java Syntax", "JSON XML", "JavaScript Extension"],
        correctAnswer: "JavaScript XML"
    },
    {
        id: 3,
        question: "Hook nào được sử dụng để quản lý state?",
        options: ["useEffect", "useState", "useContext", "useReducer"],
        correctAnswer: "useState"
    }
];

export default quizData;
