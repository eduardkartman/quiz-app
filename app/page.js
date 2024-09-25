// app/page.js
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">
        Welcome to the Quiz App!
      </h1>
      <p className="mt-4 text-lg text-gray-700">
        Get ready to test your knowledge!
      </p>
      <Link
        href="/categories"
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Start Quiz
      </Link>
    </div>
  );
}
