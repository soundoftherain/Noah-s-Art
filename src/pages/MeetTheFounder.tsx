import React from "react";
import { Link } from "react-router-dom";

const MeetTheFounder: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6 space-y-8">
      <h1 className="text-4xl md:text-5xl font-bold text-center">
        Meet Noah Moses
      </h1>
      <p className="max-w-xl text-center text-lg text-gray-300">
        Noah Moses is the creator of Noah’s Art and founder of Noah’s Protocol.
        Explore his vision for a decentralized creative universe.
      </p>

      <div className="flex flex-wrap gap-4 mt-6 justify-center">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/15"
        >
          Home
        </Link>

        <Link
          to="/universe"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-secondary via-primary to-accent px-6 py-3 text-sm font-semibold text-background shadow-aurora transition-transform hover:-translate-y-0.5"
        >
          Explore Universe
        </Link>
      </div>
    </div>
  );
};

export default MeetTheFounder;
