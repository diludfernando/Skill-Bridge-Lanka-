import React, { useState } from 'react';
import './SkillAssessment.css';
import { CheckCircle, XCircle, AlertCircle, RotateCcw } from 'lucide-react';

const questions = [
    {
        id: 1,
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Tech Modern Language",
            "Hyper Transfer Mode Link",
            "Home Tool Meta Language"
        ],
        correctAnswer: 0
    },
    {
        id: 2,
        question: "Which CSS property is used to change the text color of an element?",
        options: [
            "text-style",
            "font-color",
            "color",
            "text-color"
        ],
        correctAnswer: 2
    },
    {
        id: 3,
        question: "Which hook is used to manage state in a functional component?",
        options: [
            "useEffect",
            "useState",
            "useContext",
            "useReducer"
        ],
        correctAnswer: 1
    },
    {
        id: 4,
        question: "What is the purpose of the 'alt' attribute in an <img> tag?",
        options: [
            "To specify the image source",
            "To set the image title",
            "To provide alternative text for screen readers",
            "To define image dimensions"
        ],
        correctAnswer: 2
    },
    {
        id: 5,
        question: "Which method is used to add an element to the end of an array in JavaScript?",
        options: [
            "unshift()",
            "push()",
            "pop()",
            "shift()"
        ],
        correctAnswer: 1
    }
];

const SkillAssessment = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isAnswerChecked, setIsAnswerChecked] = useState(false);

    const handleOptionClick = (index) => {
        if (!isAnswerChecked) {
            setSelectedOption(index);
        }
    };

    const handleNextQuestion = () => {
        if (selectedOption !== null) {
            if (selectedOption === questions[currentQuestion].correctAnswer) {
                setScore(score + 1);
            }

            const nextQuestion = currentQuestion + 1;
            if (nextQuestion < questions.length) {
                setCurrentQuestion(nextQuestion);
                setSelectedOption(null);
                setIsAnswerChecked(false);
            } else {
                setShowScore(true);
            }
        }
    };

    const resetQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowScore(false);
        setSelectedOption(null);
        setIsAnswerChecked(false);
    };

    return (
        <div className="skill-assessment-container">
            <div className="assessment-card">
                {showScore ? (
                    <div className="score-section">
                        <div className="score-header">
                            {score >= questions.length / 2 ? (
                                <CheckCircle size={64} className="score-icon success" />
                            ) : (
                                <AlertCircle size={64} className="score-icon warning" />
                            )}
                            <h2>Assessment Complete!</h2>
                        </div>
                        <p className="score-text">
                            You scored <span className="highlight">{score}</span> out of <span className="total">{questions.length}</span>
                        </p>
                        <button className="btn btn-primary restart-btn" onClick={resetQuiz}>
                            <RotateCcw size={18} />
                            Retake Assessment
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="question-header">
                            <span className="question-count">
                                Question {currentQuestion + 1}/{questions.length}
                            </span>
                            <div className="progress-bar">
                                <div
                                    className="progress-fill"
                                    style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                                ></div>
                            </div>
                        </div>

                        <div className="question-content">
                            <h3 className="question-text">{questions[currentQuestion].question}</h3>

                            <div className="options-grid">
                                {questions[currentQuestion].options.map((option, index) => (
                                    <button
                                        key={index}
                                        className={`option-btn ${selectedOption === index ? 'selected' : ''}`}
                                        onClick={() => handleOptionClick(index)}
                                    >
                                        <span className="option-letter">{String.fromCharCode(65 + index)}</span>
                                        <span className="option-text">{option}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="question-footer">
                            <button
                                className="btn btn-primary next-btn"
                                onClick={handleNextQuestion}
                                disabled={selectedOption === null}
                            >
                                {currentQuestion === questions.length - 1 ? 'Finish' : 'Next Question'}
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default SkillAssessment;
