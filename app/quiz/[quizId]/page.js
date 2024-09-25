// app/quiz/[quizId]/page.js
"use client"; // Adaugă această linie pentru a marca acest fișier ca un Client Component

import Link from "next/link";
import { useParams } from "next/navigation";

const quizzes = {
  "general-knowledge": {
    title: "General Knowledge Quiz",
    questions: [1, 2, 3],
  },
  science: {
    title: "Science Quiz",
    questions: [1, 2, 3],
  },
  history: {
    title: "History Quiz",
    questions: [1, 2, 3],
  },
};

export default function Quiz() {
  const params = useParams();
  const { quizId } = params;
  const quiz = quizzes[quizId];

  if (!quiz) return <p>Loading...</p>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">{quiz.title}</h1>
      <Link
        href={`/quiz/${quizId}/question/1`}
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Start Quiz
      </Link>
    </div>
  );
}
