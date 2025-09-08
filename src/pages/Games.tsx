import React from "react";

const games = [
  {
    name: "Blackjack",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=400&q=80",
    description: "Try your luck at classic Blackjack!",
  },
  {
    name: "Roulette",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    description: "Spin the wheel and win big!",
  },
  {
    name: "Poker",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    description: "Show your skills at Poker tables.",
  },
  {
    name: "Slots",
    image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
    description: "Pull the lever and hit the jackpot!",
  },
];

const Games: React.FC = () => (
  <div className="p-8 mt-20">
    <h1 className="text-3xl font-bold mb-8 text-center">Casino Games Gallery</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {games.map((game) => (
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

export default Games;
