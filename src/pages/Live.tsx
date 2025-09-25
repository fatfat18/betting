import React, { useState, useEffect } from "react";

function useIncrementingValue(id: number, initial: number = 0.0089, minInterval: number = 1000, maxInterval: number = 2000, maxIncrement: number = 0.0003) {
  const getInitial = () => {
    const stored = localStorage.getItem(`userValue_${id}`);
    return stored ? parseFloat(stored) : initial;
  };

  const [value, setValue] = useState(getInitial);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    const scheduleNext = () => {
      const interval = Math.floor(Math.random() * (maxInterval - minInterval + 1)) + minInterval;
      timer = setTimeout(() => {
        setValue((v) => {
          const increment = Math.random() * maxIncrement;
          const newValue = parseFloat((v + increment).toFixed(8));
          localStorage.setItem(`userValue_${id}`, newValue.toString());
          return newValue;
        });
        scheduleNext();
      }, interval);
    };

    scheduleNext();
    return () => clearTimeout(timer);
  }, [minInterval, maxInterval, maxIncrement, id]);

  return value;
}

function useIncrementingInt(id: number, initial: number = 0, minInterval: number = 1000, maxInterval: number = 5000, maxIncrement: number = 3) {
  const getInitial = () => {
    const stored = localStorage.getItem(`userBets_${id}`);
    return stored ? parseInt(stored) : initial;
  };

  const [value, setValue] = useState(getInitial);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    const scheduleNext = () => {
      const interval = Math.floor(Math.random() * (maxInterval - minInterval + 1)) + minInterval;
      timer = setTimeout(() => {
        setValue((v) => {
          const increment = Math.floor(Math.random() * maxIncrement) + 1;
          const newValue = v + increment;
          localStorage.setItem(`userBets_${id}`, newValue.toString());
          return newValue;
        });
        scheduleNext();
      }, interval);
    };

    scheduleNext();
    return () => clearTimeout(timer);
  }, [minInterval, maxInterval, maxIncrement, id]);

  return value;
}

const users = [
  { id: 1, name: "EIAN13DAS", img: "/assets/live/1st.webp", country: "USA", initialBalance: 0.0089, betsPlaced: 120 },
  { id: 2, name: "D1WDACCZ", img: "/assets/live/2nd.webp", country: "UK", initialBalance: 0.005, betsPlaced: 98 },
  { id: 3, name: "45ASDAC", img: "/assets/live/3rd.png", country: "Canada", initialBalance: 0.003, betsPlaced: 85 },
  { id: 4, name: "ASCAS33AFG", img: "/assets/live/4th.webp", country: "Germany", initialBalance: 0.002, betsPlaced: 76 },
  { id: 5, name: "IEYUT3WEQ", img: "/assets/live/5th.webp", country: "Australia", initialBalance: 0.001, betsPlaced: 65 },
];

const Live: React.FC = () => {
  // Pass user id and initialBalance to the hook
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const userValues: number[] = users.map((user, idx) => useIncrementingValue(user.id, user.initialBalance, 1000 + idx * 500));
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const userBets: number[] = users.map((user, idx) => useIncrementingInt(user.id, user.betsPlaced, 1000 + idx * 500));

  return (
    <>
      {(() => {
        // Combine user info with current values and bets
        const rankedUsers = users
          .map((user, idx) => ({
            ...user,
            currentValue: userValues[idx],
            currentBets: userBets[idx],
          }))
          // Sort by currentValue descending
          .sort((a, b) => b.currentValue - a.currentValue);

        return (
          <div className="font-host p-8 pt-32 w-screen min-h-screen h-full bg-gradient-to-br from-gray-900 via-gray-900 to-green-800 ">
            <div className="h-full w-full flex gap-6">
              <div className="w-1/3 h-full flex items-center flex-col font-host ">
                <div className="font-black text-[8rem] text-amber-400">#1</div>
                <div>
                  <img src={rankedUsers[0].img} alt="Live Winner" className="p-10 rounded-xl w-[30rem] h-[30rem] bg-gradient-to-tl from-white via-green-800 to-green-800" />
                </div>
                <div className="text-5xl text-center font-black mt-4">
                  Total Winnings in ETH <br />
                  <div className="text-green-500 font-black mt-4"> {rankedUsers[0].currentValue}</div>
                </div>
                <div className="mt-4 text-4xl font-bold text-white"> {rankedUsers[0].name}</div>
                <div className="text-xl text-gray-300">Country: {rankedUsers[0].country}</div>
                <div className="text-xl text-gray-300">Bets Placed: {rankedUsers[0].currentBets}</div>
              </div>

              <div className="w-2/3 flex justify-center h-screen">
                <div className="h-1/2 w-full flex items-end font-host ">
                  {rankedUsers.slice(1).map((user, idx) => (
                    <div key={user.id} className="w-1/3 flex flex-col items-center">
                      <div className={`font-black text-4xl text-white`}>#{idx + 2}</div>
                      <img src={user.img} alt="Live Winner" className="p-4 rounded-xl w-[10rem] h-[10rem] " />
                      <div className="text-xl text-center font-black mt-2">
                        Total Winnings in ETH <br />
                        <strong className="text-green-500 font-black"> {user.currentValue}</strong>
                      </div>
                      <div className="mt-2 text-2xl  font-bold text-white">{user.name}</div>
                      <div className="text-md text-gray-300">Country: {user.country}</div>
                      <div className="text-md text-gray-300">Bets Placed: {user.currentBets}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })()}
    </>
  );
};

export default Live;
