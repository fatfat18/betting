import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface PlayGameProps {
  // Add props as needed
}

const PlayGameDemo: React.FC<PlayGameProps> = () => {
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
    <div className="play-game w-screen h-screen flex items-center justify-center">
      <iframe src={`https://localhost/game/${gameName}/prego?api_exit=/`} className="w-[80rem] h-[40rem]" />
    </div>
  );
};

export default PlayGameDemo;
