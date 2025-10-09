// src/pages/MeetTheFounder.tsx
import React from "react";
import { Link } from "react-router-dom";

const MeetTheFounder: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6 space-y-8">
      <h1 className="text-4xl md:text-5xl font-bold text-center">
        Noah Moses – Creator of Noah’s Art
      </h1>
      <p className="max-w-3xl text-center text-lg text-gray-300">
        Hello, my name is Noah Moses. I am a singer-songwriter and programmer,
        and I created Noah’s Art, a living universe of characters with unique
        musical styles and personalities. Feathers, a blues-wailing peacock, and
        Hoodlum, a husky-voiced rooster, are just the beginning.
      </p>

      <p className="max-w-3xl text-center text-lg text-gray-300">
        I am raising funds via Juicebox.money for early production rounds, and
        I invite collectors and creators to join the Noah’s Art DAO to help
        shape this ecosystem.
      </p>

      <div className="flex flex-wrap gap-4 mt-6 justify-center">
        {/* Return Home Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/15"
        >
          Return to Home
        </Link>

        {/* Visit Universe Button */}
        <Link
          to="/universe"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-secondary via-primary to-accent px-6 py-3 text-sm font-semibold text-background shadow-aurora transition-transform hover:-translate-y-0.5"
        >
          Explore the Arkfall Bazaar
        </Link>
      </div>

      <p className="max-w-3xl text-center text-gray-400 text-sm mt-8">
        Contact: <a href="mailto:noahmoses@proton.me" className="underline">noahmoses@proton.me</a>
      </p>
    </div>
  );
};

export default MeetTheFounder;
