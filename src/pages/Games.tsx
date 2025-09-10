import React from "react";
import { FaFootballBall } from "react-icons/fa";
import { GiPokerHand } from "react-icons/gi";
import { PiPokerChipBold } from "react-icons/pi";
import Footer from "../components/Footer";

const Games: React.FC = () => (
  <div className="p-8 pt-32 h-full min-h-screen w-screen font-host bg-gradient-to-br from-gray-900 via-gray-900 to-green-800 ">
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="text-7xl  text-start font-extrabold text-white mb-4 w-full">Browse Games</div>
    </div>

    <div className="flex items-center justify-between">
      <div className="w-1/3 p-6 ">
        <div className="bg-gradient-to-br from-black to-red-700  rounded-3xl p-6 h-60 relative overflow-hidden">
          <div className="text-5xl font-black text-white mb-4">Casino</div>
          <div className="text-gray-400 w-1/2">Try your luck with classic casino games like slots, roulette, and blackjack.</div>
          <div className="absolute -bottom-10  -right-5 ">
            <img src="/src/assets/games/slot.webp" className="w-60 h-60 " />
          </div>
        </div>
      </div>
      <div className="w-1/3 p-6 ">
        <div className="bg-gradient-to-br from-black to-green-700  rounded-3xl p-6 h-60 relative overflow-hidden">
          <div className="text-5xl font-black text-white mb-4">Sports</div>
          <div className="text-gray-400 w-1/2">Bet on your favorite sports including football, basketball, and more.</div>
          <div className="absolute -bottom-30  -right-10">
            <img src="/src/assets/games/soccer.webp" className="w-80 h-80" />
          </div>
        </div>
      </div>
      <div className="w-1/3 p-6 ">
        <div className="bg-gradient-to-br from-black to-blue-700  rounded-3xl p-6 h-60 relative overflow-hidden">
          <div className="text-5xl font-black text-white mb-4">Cards</div>
          <div className="text-gray-400 w-1/2">Play exciting card games like poker, blackjack, and baccarat.</div>
          <div className="absolute -bottom-30  -right-15">
            <img src="/src/assets/games/cards.png" className="w-80 h-80" />
          </div>
        </div>
      </div>
    </div>

    <div className="w-full mt-12">
      <div className="text-2xl flex items-center gap-2 text-start font-extrabold text-white mb-4 w-full">
        <GiPokerHand size={35} />
        Popular Card Games
      </div>

      <div className="w-full overflow-x-auto ">
        <div className="w-max h-full flex gap-6">
          <div className=" w-60 h-80 transition-colors duration-500 bg-radial to-black hover:via-black from-amber-900 rounded-md flex items-center justify-center text-3xl font-bold">Poker</div>
          <div className=" w-60 h-80 transition-colors duration-500 bg-radial to-black hover:via-black from-green-900 rounded-md flex items-center justify-center text-3xl font-bold">Blackjack</div>
          <div className=" w-60 h-80 transition-colors duration-500 bg-radial to-black hover:via-black from-purple-900 rounded-md flex items-center justify-center text-3xl font-bold">Baccarat</div>
          <div className=" w-60 h-80 transition-colors duration-500 bg-radial to-black hover:via-black from-blue-900 rounded-md flex items-center justify-center text-3xl font-bold">Solitaire</div>
          <div className=" w-60 h-80 transition-colors duration-500 bg-radial to-black hover:via-black from-pink-900 rounded-md flex items-center justify-center text-3xl font-bold">Rummy</div>
          <div className=" w-60 h-80 transition-colors duration-500 bg-radial to-black hover:via-black from-red-900 rounded-md flex items-center justify-center text-3xl font-bold">Bridge</div>
          <div className=" w-60 h-80 transition-colors duration-500 bg-radial to-black hover:via-black from-cyan-900 rounded-md flex items-center justify-center text-3xl font-bold">Hearts</div>
          <div className=" w-60 h-80 transition-colors duration-500 bg-radial to-black hover:via-black from-lime-900 rounded-md flex items-center justify-center text-3xl font-bold">Spades</div>
          <div className=" w-60 h-80 transition-colors duration-500 bg-radial to-black hover:via-black from-teal-900 rounded-md flex items-center justify-center text-3xl font-bold">Euchre</div>
          <div className=" w-60 h-80 transition-colors duration-500 bg-radial to-black hover:via-black from-orange-900 rounded-md flex items-center justify-center text-3xl font-bold">Go Fish</div>
          <div className=" w-60 h-80 transition-colors duration-500 bg-radial to-black hover:via-black from-yellow-900 rounded-md flex items-center justify-center text-3xl font-bold">
            Crazy Eights
          </div>
          <div className=" w-60 h-80 transition-colors duration-500 bg-radial to-black hover:via-black from-gray-900 rounded-md flex items-center justify-center text-3xl font-bold">War</div>
        </div>
      </div>
    </div>

    <div className="w-full mt-12">
      <div className="text-2xl flex gap-2 items-center text-start font-extrabold text-white mb-4 w-full">
        <FaFootballBall />
        Popular Sports
      </div>

      <div className="w-full overflow-x-auto ">
        <div className="w-max h-full flex gap-6">
          <div className="w-60 h-80 transition-colors duration-500 ease-linear hover:bg-gradient-to-b bg-gradient-to-b from-gray-950 via-gray-950 hover:via-amber-500 to-amber-500 rounded-md flex items-center justify-center text-3xl font-bold">
            Football
          </div>
          <div className="w-60 h-80 transition-colors duration-500 ease-linear hover:bg-gradient-to-b bg-gradient-to-b from-gray-950 via-gray-950 hover:via-green-500 to-green-500 rounded-md flex items-center justify-center text-3xl font-bold">
            Basketball
          </div>
          <div className="w-60 h-80 transition-colors duration-500 ease-linear hover:bg-gradient-to-b bg-gradient-to-b from-gray-950 via-gray-950 hover:via-blue-500 to-blue-500 rounded-md flex items-center justify-center text-3xl font-bold">
            Baseball
          </div>
          <div className="w-60 h-80 transition-colors duration-500 ease-linear hover:bg-gradient-to-b bg-gradient-to-b from-gray-950 via-gray-950 hover:via-red-500 to-red-500 rounded-md flex items-center justify-center text-3xl font-bold">
            Tennis
          </div>
          <div className="w-60 h-80 transition-colors duration-500 ease-linear hover:bg-gradient-to-b bg-gradient-to-b from-gray-950 via-gray-950 hover:via-purple-500 to-purple-500 rounded-md flex items-center justify-center text-3xl font-bold">
            Golf
          </div>
          <div className="w-60 h-80 transition-colors duration-500 ease-linear hover:bg-gradient-to-b bg-gradient-to-b from-gray-950 via-gray-950 hover:via-pink-500 to-pink-500 rounded-md flex items-center justify-center text-3xl font-bold">
            Boxing
          </div>
          <div className="w-60 h-80 transition-colors duration-500 ease-linear hover:bg-gradient-to-b bg-gradient-to-b from-gray-950 via-gray-950 hover:via-cyan-500 to-cyan-500 rounded-md flex items-center justify-center text-3xl font-bold">
            Cricket
          </div>
          <div className="w-60 h-80 transition-colors duration-500 ease-linear hover:bg-gradient-to-b bg-gradient-to-b from-gray-950 via-gray-950 hover:via-lime-500 to-lime-500 rounded-md flex items-center justify-center text-3xl font-bold">
            Rugby
          </div>
          <div className="w-60 h-80 transition-colors duration-500 ease-linear hover:bg-gradient-to-b bg-gradient-to-b from-gray-950 via-gray-950 hover:via-teal-500 to-teal-500 rounded-md flex items-center justify-center text-3xl font-bold">
            Hockey
          </div>
          <div className="w-60 h-80 transition-colors duration-500 ease-linear hover:bg-gradient-to-b bg-gradient-to-b from-gray-950 via-gray-950 hover:via-orange-500 to-orange-500 rounded-md flex items-center justify-center text-3xl font-bold">
            MMA
          </div>
          <div className="w-60 h-80 transition-colors duration-500 ease-linear hover:bg-gradient-to-b bg-gradient-to-b from-gray-950 via-gray-950 hover:via-gray-500 to-gray-500 rounded-md flex items-center justify-center text-3xl font-bold">
            Motorsport
          </div>
          <div className="w-60 h-80 transition-colors duration-500 ease-linear hover:bg-gradient-to-b bg-gradient-to-b from-gray-950 via-gray-950 hover:via-yellow-500 to-yellow-500 rounded-md flex items-center justify-center text-3xl font-bold">
            Horse Racing
          </div>
        </div>
      </div>
    </div>

    <div className="w-full mt-12">
      <div className="text-2xl flex gap-2 items-center text-start font-extrabold text-white mb-4 w-full">
        <PiPokerChipBold />
        Popular Casino Games
      </div>

      <div className="w-full overflow-x-auto ">
        <div className="w-max h-full flex gap-6">
          <div className="w-60 h-80 transition-colors duration-500 ease-linear bg-gradient-to-br from-gray-950 via-gray-950 hover:via-cyan-300 to-cyan-300 rounded-md flex items-center justify-center text-3xl font-bold">
            Slots
          </div>
          <div className="w-60 h-80 transition-colors duration-500 ease-linear bg-gradient-to-br from-gray-950 via-gray-950 hover:via-red-300 to-red-300 rounded-md flex items-center justify-center text-3xl font-bold">
            Roulette
          </div>
          <div className="w-60 h-80 transition-colors duration-500 ease-linear bg-gradient-to-br from-gray-950 via-gray-950 hover:via-green-300 to-green-300 rounded-md flex items-center justify-center text-3xl font-bold">
            Blackjack
          </div>
          <div className="w-60 h-80 transition-colors duration-500 ease-linear bg-gradient-to-br from-gray-950 via-gray-950 hover:via-yellow-300 to-yellow-300 rounded-md flex items-center justify-center text-3xl font-bold">
            Craps
          </div>
          <div className="w-60 h-80 transition-colors duration-500 ease-linear bg-gradient-to-br from-gray-950 via-gray-950 hover:via-purple-300 to-purple-300 rounded-md flex items-center justify-center text-3xl font-bold">
            Baccarat
          </div>
          <div className="w-60 h-80 transition-colors duration-500 ease-linear bg-gradient-to-br from-gray-950 via-gray-950 hover:via-pink-300 to-pink-300 rounded-md flex items-center justify-center text-3xl font-bold">
            Sic Bo
          </div>
          <div className="w-60 h-80 transition-colors duration-500 ease-linear bg-gradient-to-br from-gray-950 via-gray-950 hover:via-blue-300 to-blue-300 rounded-md flex items-center justify-center text-3xl font-bold">
            Keno
          </div>
          <div className="w-60 h-80 transition-colors duration-500 ease-linear bg-gradient-to-br from-gray-950 via-gray-950 hover:via-orange-300 to-orange-300 rounded-md flex items-center justify-center text-3xl font-bold">
            Pai Gow
          </div>
          <div className="w-60 h-80 transition-colors duration-500 ease-linear bg-gradient-to-br from-gray-950 via-gray-950 hover:via-lime-300 to-lime-300 rounded-md flex items-center justify-center text-3xl font-bold">
            Big Six Wheel
          </div>
          <div className="w-60 h-80 transition-colors duration-500 ease-linear bg-gradient-to-br from-gray-950 via-gray-950 hover:via-teal-300 to-teal-300 rounded-md flex items-center justify-center text-3xl font-bold">
            Video Poker
          </div>
          <div className="w-60 h-80 transition-colors duration-500 ease-linear bg-gradient-to-br from-gray-950 via-gray-950 hover:via-amber-300 to-amber-300 rounded-md flex items-center justify-center text-3xl font-bold">
            Red Dog
          </div>
          <div className="w-60 h-80 transition-colors duration-500 ease-linear bg-gradient-to-br from-gray-950 via-gray-950 hover:via-gray-300 to-gray-300 rounded-md flex items-center justify-center text-3xl font-bold">
            Casino War
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
);

export default Games;
