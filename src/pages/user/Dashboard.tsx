import React from "react";
import { HiOutlineCash } from "react-icons/hi";
import { BarChart } from "@mui/x-charts";

const Dashboard: React.FC = () => {
  // Function to determine color based on value
  const getColor = (value: string) => {
    return parseFloat(value) < 0 ? "red" : "#016630"; // Red for negative values, green for positive
  };
  const games = [
    { id: 1, name: "Poker", result: "Win", amount: 100 },
    { id: 2, name: "Blackjack", result: "Loss", amount: -50 },
    { id: 3, name: "Baccarat", result: "Win", amount: 200 },
    { id: 4, name: "Solitaire", result: "Win", amount: 150 },
    { id: 5, name: "Rummy", result: "Loss", amount: -30 },
    { id: 6, name: "Bridge", result: "Win", amount: 120 },
    { id: 7, name: "Hearts", result: "Loss", amount: -20 },
    { id: 8, name: "Spades", result: "Win", amount: 180 },
    { id: 9, name: "Euchre", result: "Win", amount: 90 },
    { id: 10, name: "Go Fish", result: "Loss", amount: -10 },
    { id: 11, name: "Crazy Eights", result: "Win", amount: 75 },
    { id: 12, name: "War", result: "Loss", amount: -25 },
  ];

  return (
    <div className="text-white font-host bg-gradient-to-br from-gray-900 via-gray-900 to-green-800 h-full w-full p-10 ">
      <div className="flex w-full h-full">
        <div className="flex flex-col h-full w-3/4">
          <div className="flex gap-4 p-2  items-center justify-center h-1/3 w-full ">
            <div className="w-2/4 h-full rounded-3xl p-10 bg-gradient-to-tl from-gray-950 via-gray-950 to-green-800">
              <p className="text-zinc-300 font-bold text-2xl ">Total Balance</p>
              <p className="text-zinc-50 text-6xl font-black mt-2 ">$412,300.20</p>
              <p className="text-zinc-500 text-bold text-sm mt-2">as of December 19,2025 at 11:48 PM</p>
              <div className="w-full mt-6 flex items-center justify-end">
                <button className="w-max py-3 px-6 border-2 border-green-800 text-green-800 hover:bg-green-700 cursor-pointer font-black hover:border-green-700 hover:text-white rounded-3xl">
                  {" "}
                  <HiOutlineCash className="inline-block" size={20} /> Withdraw
                </button>
              </div>
            </div>
            <div className="w-1/4 h-full rounded-3xl  p-10 bg-white">
              <p className="text-zinc-300 font-bold text-base ">Today's Total Result</p>
              <p className="text-gray-950 text-2xl font-black mt-2 ">$212,300.20</p>
            </div>
            <div className="w-1/4 h-full rounded-3xl  p-10 bg-white"></div>
          </div>
          <div className="flex  p-2  items-center justify-center h-2/3 w-full ">
            <div className="w-full h-full flex flex-col items-center justify-center rounded-3xl p-6 bg-zinc-100 border-2 border-zinc-300">
              <div className="w-full h-full pt-10">
                <BarChart
                  xAxis={[
                    {
                      data: Array.from({ length: 31 }, (_, i) => (i + 1).toString()), // Automatically generate days 1-31
                      label: "Day of the Month",
                    },
                  ]}
                  series={[
                    {
                      // data: [
                      //   9312, 5412, 7231, 8123, 6543, 7890, 6123, 8456, 7321, 5912, 8120, 6789, 9541, 8234, 7123, 6345, 7891, 8123, 5412, 9312, 7231, 6543, 8456, 5912, 7890, 6789, 9541, 8234, 7123,
                      //   6345, 7891,
                      // ],

                      data: [9312, 5412, 7231, 8123, 6543, 7890, 6123, 8456, 7321, 5912, 8120, 6789, 9541, 8234, 7123, 6345, 7891, 8123, 5412, 6789, 9541, 8234, 7123, 6345, 7891],
                      color: "#016630", // Use a constant color for the series
                      valueFormatter: (value) => `$ ${value}`,
                    },
                  ]}
                  height={400}
                />
              </div>
              <div className="text-center w-full text-5xl font-bold text-zinc-950">Monthly Statistics</div>
            </div>
          </div>
        </div>
        <div className="w-1/4 p-2">
          <div className="bg-white text-zinc-950 p-8 py-4 w-full h-full rounded-3xl">
            <p className="font-bold text-xl mb-4">Recent Games Played</p>

            <div>
              {games.map((game) => (
                <div key={game.id} className="flex justify-between py-4 border-b border-zinc-200">
                  <span className="text-zinc-700 font-semibold">{game.name}</span>
                  <span className={`font-black ${game.result === "Win" ? "text-green-600" : "text-red-600"}`}>
                    {game.result} (${game.amount})
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
