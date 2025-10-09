import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-center text-gray-300">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="mb-8">The page you’re looking for drifts beyond the mapped Noah’s Art universe.</p>
      <Link to="/" className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-full text-white font-semibold">
        Return Home
      </Link>
    </div>
  );
};

export default NotFound;
