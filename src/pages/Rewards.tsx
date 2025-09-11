import React from "react";

const tasks = [
  {
    name: "Verify Email",
    description: "Verify your email address to earn 500 credits.",
    credits: 500,
  },
  {
    name: "Complete Profile",
    description: "Fill out your profile to earn 800 credits.",
    credits: 800,
  },
  {
    name: "First Deposit",
    description: "Make your first deposit to earn 1700 credits.",
    credits: 1700,
  },
  {
    name: "Invite a Friend",
    description: "Invite a friend and earn 1000 credits when they join.",
    credits: 1000,
  },
];

const Rewards: React.FC = () => {
  return (
    <div className="p-8 pt-20 bg-gradient-to-br from-gray-900 via-gray-900 to-green-800 h-screen w-screen ">
      <div className="flex items-center justify-center h-full">
        <div className="w-1/2 px-10 flex flex-col items-center justify-center h-full ">
          <div className="mt-10 text-center">
            <h2 className="text-4xl font-bold mb-4 text-white">Use Credits to Play Live Games!</h2>
            <p className="text-gray-300 mb-6">Earn credits by completing tasks above, then use them to play live betting games.</p>
            {/* You can add a button or link to the live games page here */}
          </div>
          <div className="flex w-full gap-4 flex-col ">
            {tasks.map((task) => (
              <div key={task.name} className="bg-gray-800 rounded-xl shadow-md w-full p-6 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-green-400">{task.name}</h3>
                  <p className="text-gray-300">{task.description}</p>
                </div>
                <span className="bg-green-700 text-white px-4 py-2 w-44 text-center rounded-lg font-bold text-lg hover:scale-110 transition duration-300 cursor-pointer">
                  + ${task.credits.toLocaleString()} credits
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="w-1/2 h-full flex items-center justify-center">
          <img src="/src/assets/rewards/rewards-1.webp" alt="Rewards" className="w-[38rem] h-[30rem]" />
        </div>
      </div>
    </div>
  );
};

export default Rewards;
