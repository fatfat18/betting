import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface PlayGameProps {
  // Add props as needed
}

const PlayGame: React.FC<PlayGameProps> = () => {
  const [gameState, setGameState] = useState("ready");
  const location = useLocation();
  const [gameName, setGameName] = useState("default-game");

  useEffect(() => {
    setGameName(location.state.gameName);
  }, [location]);

  useEffect(() => {
    // Initialize game or fetch game data here
    console.log(gameName);
  }, [gameName]);
  return (
    <div className="play-game">
      <iframe src={`https://localhost/game/${gameName}?api_exit=/`} className="w-screen h-screen" />
    </div>
  );
};

export default PlayGame;
