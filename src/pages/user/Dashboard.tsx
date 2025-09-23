import React from "react";
import { HiOutlineCash } from "react-icons/hi";

const Dashboard: React.FC = () => {
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
            <div className="w-1/4 h-full rounded-3xl  p-10 bg-white"></div>
            <div className="w-1/4 h-full rounded-3xl  p-10 bg-white"></div>
          </div>
          <div className="flex  p-2  items-center justify-center h-2/3 w-full ">
            <div className="w-full h-full flex items-center justify-center rounded-3xl p-6 bg-white">
              <p className="text-gray-950 font-bold text-7xl ">GRAPH</p>
            </div>
          </div>
        </div>
        <div className="w-1/4 bg-cyan-500 h-full p-4">
          <div className="bg-white w-full h-full rounded-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
