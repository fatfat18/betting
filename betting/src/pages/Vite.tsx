import React, { useState } from "react";
import { Link } from "react-router-dom";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";

const Vite: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="w-screen h-screen bg-gradient-to-t from-cyan-400 via-cyan-50 to cyan-50">
      <div className="flex items-center justify-center h-1/2">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="h-40 w-40" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="h-40 w-40 react" alt="React logo" />
        </a>
      </div>
      <div className="flex flex-col items-center justify-center text-center">
        <div className="text-7xl font-host">Vite + React</div>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
          <p>
            Edit <code>src/App.tsx</code> and save to test!
          </p>
        </div>
        <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
        <Link to="/about" className="mt-4 underline text-blue-600">
          Go to About
        </Link>
      </div>
    </div>
  );
};

export default Vite;
