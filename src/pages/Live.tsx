import React from "react";

const liveGames = [
  {
    name: "Live Blackjack",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=400&q=80",
    description: "Play Blackjack with live dealers!",
  },
  {
    name: "Live Roulette",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    description: "Experience real-time Roulette action.",
  },
  {
    name: "Live Poker",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    description: "Join live Poker tables and compete.",
  },
  {
    name: "Live Baccarat",
    image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
    description: "Enjoy Baccarat with live hosts.",
  },
];

const Live: React.FC = () => (
  <div className="p-8 mt-20">
    <h1 className="text-3xl font-bold mb-8 text-center">Live Betting Games</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {liveGames.map((game) => (
        <div key={game.name} className="border border-gray-200 rounded-lg overflow-hidden shadow bg-white text-center">
          <img src={game.image} alt={game.name} className="w-full h-44 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">{game.name}</h2>
            <p className="text-gray-600 text-base">{game.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Live;
