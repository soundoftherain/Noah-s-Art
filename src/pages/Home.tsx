import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white p-6">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">
        Welcome to Noah’s Art
      </h1>
      <p className="text-lg md:text-xl text-center max-w-2xl mb-10">
        Explore the living universe of characters, music, and NFT episodes.
        Dive in to co-create, collect, and experience the story.
      </p>

      <div className="flex flex-wrap gap-4 justify-center">
        {/* Meet the Founder Button */}
        <a
          href="/founder"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-secondary via-primary to-accent px-6 py-3 text-sm font-semibold text-background shadow-aurora transition-transform hover:-translate-y-0.5"
        >
          Meet the Founder
        </a>

        {/* NFT Purchase Button */}
        <a
          href="/universe"
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/15"
        >
          Buy Episode NFTs
        </a>
      </div>
    </div>
  );
}
