import React from "react";

const Live: React.FC = () => (
  <div className="font-host p-8 pt-32 w-screen min-h-screen h-full bg-gradient-to-br from-gray-900 via-gray-900 to-green-800 ">
    <div className="flex items-center justify-center gap-6">
      <div className="w-1/3 h-full bg-red-500">
        <div className="font-black text-7xl">BIG WINNER</div>
      </div>
      <div className="w-2/3 h-full bg-cyan-500">
        <div className="font-black text-3xl">COLUMNS OF WINNERS</div>
      </div>
    </div>
  </div>
);

export default Live;
