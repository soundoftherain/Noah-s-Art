// src/pages/Universe.tsx
import React from "react";
import { Link } from "react-router-dom";

const Universe: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6 space-y-8">
      <h1 className="text-4xl md:text-5xl font-bold text-center">
        Arkfall Bazaar
      </h1>
      <p className="max-w-xl text-center text-lg text-gray-300">
        A floating marketplace over the Prism Sea where meme coins manifest as 
        living familiars. Trade, stake, and shape the story across the multiverse.
      </p>

      <div className="flex flex-wrap gap-4 mt-6 justify-center">
        {/* Buy Episode NFTs Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/15"
        >
          Return to Home
        </Link>

        <Link
          to="/universe"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-secondary via-primary to-accent px-6 py-3 text-sm font-semibold text-background shadow-aurora transition-transform hover:-translate-y-0.5"
        >
          Buy Episode NFTs
        </Link>
      </div>
    </div>
  );
};

export default Universe;
