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
  <div style={{ padding: "2rem" }}>
    <h1>Casino Games Gallery</h1>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "2rem",
        marginTop: "2rem",
      }}
    >
      {games.map((game) => (
        <div
          key={game.name}
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            overflow: "hidden",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            background: "#fff",
            textAlign: "center",
          }}
        >
          <img src={game.image} alt={game.name} style={{ width: "100%", height: "180px", objectFit: "cover" }} />
          <div style={{ padding: "1rem" }}>
            <h2 style={{ margin: "0 0 0.5rem 0" }}>{game.name}</h2>
            <p style={{ color: "#555", fontSize: "0.95rem" }}>{game.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Games;
