"use client"; // Marking this file as a Client Component

import { useParams, useRouter } from "next/navigation"; // Updated import for useRouter
import { useState } from "react"; // Import useState for state management
import Link from "next/link";

const questions = {
  "general-knowledge": [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
    },
    {
      question: 'Who wrote "To Kill a Mockingbird"?',
      options: ["Harper Lee", "George Orwell", "J.K. Rowling", "Mark Twain"],
      answer: "Harper Lee",
    },
    {
      question: "What is the boiling point of water?",
      options: ["100°C", "90°C", "80°C", "120°C"],
      answer: "100°C",
    },
  ],
  science: [
    {
      question: "What planet is known as the Red Planet?",
      options: ["Mars", "Earth", "Jupiter", "Venus"],
      answer: "Mars",
    },
    {
      question: "What is the chemical symbol for water?",
      options: ["H2O", "CO2", "O2", "NaCl"],
      answer: "H2O",
    },
  ],
};

export default function QuestionPage() {
  const params = useParams();
  const router = useRouter(); // Using router for navigation
  const { quizId, questionId } = params;

  const quizQuestions = questions[quizId];
  const questionIndex = parseInt(questionId) - 1;
  const question = quizQuestions[questionIndex];

  // State to keep track of selected answer and score
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedAnswer(option);
    setShowFeedback(true);
    if (option === question.answer) {
      setScore(score + 1); // Increment score if correct
    }
  };

  if (!question) return <p>Loading...</p>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold text-blue-600 mb-4">
        {question.question}
      </h1>
      <ul className="space-y-4">
        {question.options.map((option, index) => (
          <li key={index} className="text-lg">
            <button
              onClick={() => handleOptionClick(option)}
              className={`px-4 py-2 rounded ${
                selectedAnswer === option
                  ? option === question.answer
                    ? "bg-green-500"
                    : "bg-red-500"
                  : "bg-blue-500"
              } text-white hover:bg-blue-600`}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
      {showFeedback && (
        <div className="mt-4 text-lg" style={{ color: "#242424" }}>
          {selectedAnswer === question.answer
            ? "Correct! 🎉"
            : "Incorrect. Try again! ❌"}
        </div>
      )}
      {questionIndex + 1 < quizQuestions.length && (
        <Link
          href={`/quiz/${quizId}/question/${questionIndex + 2}`}
          className="mt-6 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Next Question
        </Link>
      )}
      {questionIndex + 1 === quizQuestions.length && (
        <div className="mt-6">
          <p className="text-xl font-bold">
            Your final score is: {score}/{quizQuestions.length}
          </p>
          <Link
            href={`/`}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Return Home
          </Link>
        </div>
      )}
    </div>
  );
}
