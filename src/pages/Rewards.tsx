import React, { useState } from "react";

const tasks = [
  {
    name: "Verify Email",
    description: "Verify your email address to earn 10 credits.",
    credits: 10,
  },
  {
    name: "Complete Profile",
    description: "Fill out your profile to earn 15 credits.",
    credits: 15,
  },
  {
    name: "First Deposit",
    description: "Make your first deposit to earn 25 credits.",
    credits: 25,
  },
  {
    name: "Invite a Friend",
    description: "Invite a friend and earn 20 credits when they join.",
    credits: 20,
  },
];

const Rewards: React.FC = () => {
  const [completed, setCompleted] = useState<boolean[]>(Array(tasks.length).fill(false));
  const credits = completed.reduce((sum, done, i) => sum + (done ? tasks[i].credits : 0), 0);

  const handleComplete = (idx: number) => {
    setCompleted((prev) => prev.map((done, i) => (i === idx ? true : done)));
  };

  return (
    <div className="p-8 mt-20">
      <h1 className="text-3xl font-bold mb-8 text-center">Rewards</h1>
      <div className="mb-6 text-center text-lg font-medium">
        Total Credits: <span className="text-green-600">{credits}</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {tasks.map((task, idx) => (
          <div key={task.name} className="border border-gray-200 rounded-lg overflow-hidden shadow bg-white text-center p-4 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-semibold mb-2">{task.name}</h2>
              <p className="text-gray-600 text-base mb-4">{task.description}</p>
              <div className="text-blue-600 font-bold mb-2">+{task.credits} credits</div>
            </div>
            <button
              className={`mt-2 px-4 py-2 rounded ${completed[idx] ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-green-500 text-white hover:bg-green-600"}`}
              disabled={completed[idx]}
              onClick={() => handleComplete(idx)}
            >
              {completed[idx] ? "Completed" : "Complete Task"}
            </button>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <h2 className="text-2xl font-semibold mb-4">Use Credits to Play Live Games!</h2>
        <p className="text-gray-700 mb-6">Earn credits by completing tasks above, then use them to play live betting games.</p>
        {/* You can add a button or link to the live games page here */}
      </div>
    </div>
  );
};

export default Rewards;
