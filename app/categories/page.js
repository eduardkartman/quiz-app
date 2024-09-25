// app/categories/page.js
import Link from "next/link";

const categories = [
  { id: "general-knowledge", name: "General Knowledge" },
  { id: "science", name: "Science" },
  { id: "history", name: "History" },
];

export default function Categories() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">
        Choose a Category
      </h1>
      <ul className="space-y-4">
        {categories.map((category) => (
          <li key={category.id}>
            <Link
              href={`/quiz/${category.id}`}
              className="text-xl text-blue-500 hover:underline"
            >
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
