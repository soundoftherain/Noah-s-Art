import React from "react";
import { Link } from "react-router-dom";

const Universe: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6 space-y-8">
      <h1 className="text-4xl md:text-5xl font-bold text-center">
        Noah’s Art Universe
      </h1>
      <p className="max-w-xl text-center text-lg text-gray-300">
        Explore all NFT episodes and the multiverse of characters.
        Collect, participate, and help expand the story.
      </p>

      <div className="flex flex-wrap gap-4 mt-6 justify-center">
        <Link
          to="/founder"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-secondary via-primary to-accent px-6 py-3 text-sm font-semibold text-background shadow-aurora transition-transform hover:-translate-y-0.5"
        >
          Meet the Founder
        </Link>

        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/15"
        >
          Home
        </Link>
      </div>
    </div>
  );
};

export default Universe;
