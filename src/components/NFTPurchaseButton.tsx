import React from "react";

interface NFTPurchaseButtonProps {
  episodeId?: string; // optional prop if you want to track which episode
}

const NFTPurchaseButton: React.FC<NFTPurchaseButtonProps> = ({ episodeId }) => {
  const handleClick = () => {
    // You can replace this with your NFT purchase link or modal
    alert(`Purchase NFT for episode: ${episodeId ?? "unknown"}`);
  };

  return (
    <button
      onClick={handleClick}
      className="inline-block rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl"
    >
      Buy Episode NFT
    </button>
  );
};

export default NFTPurchaseButton;
