import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-purple-600 animate-bounce">
          404
        </h1>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-2">
          Oops! Page Not Found
        </h2>

        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          The page you are looking for may have been deleted or you may have
          typed the wrong URL. Please check.
        </p>

        <Link
          href="/"
          className="btn bg-purple-600 hover:bg-purple-700 text-white border-none px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg"
        >
          Back to Home
        </Link>
      </div>

      <div className="mt-12 opacity-20">
        <svg
          width="200"
          height="100"
          viewBox="0 0 200 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 80C40 30 70 30 100 80C130 130 160 130 190 80"
            stroke="#9333ea"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default NotFoundPage;
