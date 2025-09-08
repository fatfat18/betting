import React from "react";
import { BsGift } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { testimonies } from "../sample-data/home";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const useAnimatedNumber = (target: number, duration: number = 10000) => {
    const [value, setValue] = React.useState(0);

    React.useEffect(() => {
      let start: number | null = null;
      let rafId: number;

      const animate = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        setValue(Math.floor(progress * target));
        if (progress < 1) {
          rafId = requestAnimationFrame(animate);
        } else {
          setValue(target);
        }
      };

      rafId = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(rafId);
    }, [target, duration]);

    return value;
  };

  return (
    <>
      {/* SECTION1 */}
      <div className="w-full h-screen overflow-x-hidden font-host bg-gradient-to-br from-gray-900 via-gray-900 to-green-800 flex  items-center justify-center text-white  relative overflow-hidden">
        <img src="/src/assets/home/home2.webp" alt="Logo" className=" -left-[10rem] bottom-10 h-[50rem] blur-2xl absolute z-10 opacity-50 " />

        <div className="w-[40%]  flex flex-col gap-4 h-full  justify-center text-start pl-16 z-20">
          <div className="text-7xl font-black">Ready to turn your luck into fortune?</div>
          <div className="text-6xl text-zinc-500 font-black">Big wins are just a click away!</div>
          <div>
            We are a state-of-the-art betting site where the excitement of gaming and the strength of cryptocurrencies coexist. Use your preferred digital currencies to wager with confidence, enjoy a
            variety of thrilling betting possibilities, and transact quickly and easily. Come along and start making money with your cryptocurrency now!
          </div>
          <div className="mt-10 flex gap-4">
            {/* <button
              onClick={() => navigate("/register")}
              className="flex items-center gap-3 px-8 py-2 bg-green-800 hover:bg-green-500 d cursor-pointer  text-white text-xl font-bold rounded-lg shadow-lg transition duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              Sign Up Now!
            </button> */}

            <button
              onClick={() => navigate("/register")}
              className="flex items-center gap-3 px-8 py-3 bg-green-800 hover:bg-green-500 d cursor-pointer  text-white text-lg font-bold rounded-lg shadow-lg transition duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              I have a Referral Code <BsGift size={24} />
            </button>

            <button className="flex items-center gap-3 px-8 py-3 border-2 border-zinc-400 hover:border-white cursor-pointer  text-white text-lg font-bold rounded-lg shadow-lg transition duration-500 ease-in-out focus:outline-none focus:ring-2 ">
              Contact Support
            </button>
          </div>
        </div>
        <div className="w-[60%] flex h-full items-center justify-center relative  ">
          <img src="/src/assets/home/home.png" alt="Logo" className=" h-[40rem] z-20 absolute -rotate-12" />
          <img src="/src/assets/home/home3.webp" alt="Logo" className=" h-[30rem] z-20 absolute bottom-10 right-0 " />
          <img src="/src/assets/home/home4.webp" alt="Logo" className=" h-[30rem] z-20 absolute bottom-0 left-80 " />
        </div>
      </div>

      {/* SECTION2 */}
      <div className="font-host pt-40 h-screen w-screen bg-gradient-to-tr from-gray-900 via-gray-900 to-green-800 flex flex-col items-center justify-center relative">
        <div className="z-10 flex flex-col items-center gap-8">
          <div className="text-5xl font-extrabold text-white mb-4">Our Community in Numbers</div>
          <div className="flex gap-16 flex-wrap justify-center">
            <div className=" translate-y-60 bg-gradient-to-br from-green-900 via-gray-900 to-gray-950 rounded-2xl shadow-lg p-10  flex flex-col items-center min-w-[500px]">
              <div className="text-6xl font-black text-green-400">{useAnimatedNumber(3945).toLocaleString()}+</div>
              <div className="text-xl font-semibold text-gray-200 mt-2">Active Users</div>
              <div className="text-sm text-gray-400 mt-1">Betting from all over the world</div>
            </div>
            <div className="bg-gradient-to-br from-green-900 via-gray-900 to-gray-950 rounded-2xl shadow-lg p-10  flex flex-col items-center min-w-[500px]">
              <div className="text-6xl font-black text-yellow-400">{useAnimatedNumber(2610400).toLocaleString()}+</div>
              <div className="text-xl font-semibold text-gray-200 mt-2">Total Winnings</div>
              <div className="text-sm text-gray-400 mt-1">Paid out in crypto</div>
            </div>
            <div className=" translate-y-60 bg-gradient-to-br from-green-900 via-gray-900 to-gray-950 rounded-2xl shadow-lg p-10  flex flex-col items-center min-w-[500px]">
              <div className="text-6xl font-black text-blue-400">{useAnimatedNumber(8900).toLocaleString()}+</div>
              <div className="text-xl font-semibold text-gray-200 mt-2">Big Winners</div>
              <div className="text-sm text-gray-400 mt-1">Life-changing payouts</div>
            </div>
          </div>
        </div>
        <div className=" flex items-center justify-center top-0 left-0 w-full h-full  pointer-events-none select-none">
          <img src="/src/assets/home/home5.webp" alt="Metrics Background" className="h-[35rem]" />
        </div>
      </div>

      {/* SECTION3 */}
      <div className="pt-40 w-full h-max bg-gradient-to-bl from-gray-900 via-gray-900 to-green-800 flex  flex-col  items-center justify-center text-white font-host relative overflow-hidden">
        <div className="w-full  flex items-center justify-center h-max  z-20">
          <div className="flex flex-wrap gap-8 p-4 w-full items-center justify-center overflow-x-auto scrollbar-thin scrollbar-thumb-green-700 scrollbar-track-gray-900">
            {testimonies.map((t, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-gray-950 via-gray-900 to-green-900 rounded-2xl shadow-xl flex flex-col min-w-[320px] max-w-xs h-64 border border-green-700 relative overflow-hidden"
              >
                <div className="flex items-center gap-4 px-6 pt-6">
                  <img src={t.profileImage} alt={t.name} className="w-16 h-16 rounded-full object-cover border-4 border-green-700 shadow-lg" />
                  <div>
                    <div className="text-lg font-bold">{t.name}</div>
                    <div className="text-xs bg-green-700 px-3 py-1 rounded-full text-white inline-block mt-1 shadow">{t.cryptoCoin}</div>
                  </div>
                </div>
                <div className="px-6 py-2 text-gray-200 text-sm italic line-clamp-4 flex-1">"{t.message}"</div>
                <div className="flex items-center justify-between px-6 pb-4 mt-auto">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className={`w-4 h-4 ${i < t.starRate ? "text-yellow-400" : "text-gray-600"}`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.049 9.393c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.966z" />
                      </svg>
                    ))}
                  </div>
                  <div className="text-xs text-gray-400">{new Date(t.dateTime).toLocaleDateString()}</div>
                </div>
                <div className="absolute bottom-0 right-0 opacity-10 text-8xl font-black text-green-900 select-none pointer-events-none">{t.cryptoCoin[0]}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SECTION4 */}

      <div className="pt-40 w-screen h-screen bg-gradient-to-tl from-gray-900 via-gray-900 to-green-800 flex  flex-col  items-center justify-center text-white font-host relative overflow-hidden">
        NEWSLETTER
      </div>
    </>
  );
};

export default Home;
