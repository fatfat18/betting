import React, { useState } from "react";
import Footer from "../../components/Footer";
import Bitcoin from "./assets/bitcoin.webp";
import Bomb from "./assets/bomb.webp";
import Question from "./assets/question.webp";
import sad from "./assets/sad.mp3";
import happy from "./assets/happy.mp3";
import { VscDebugRestart } from "react-icons/vsc";
import { ImEye } from "react-icons/im";

import { FormikProvider, useFormik, Form } from "formik";
import { useEffect } from "react";

type CellType = "hidden" | "coin" | "bomb";

const NUM_CELLS = 24;

const generateCells = (): ("coin" | "bomb")[] => {
  const cells: ("coin" | "bomb")[] = [];
  for (let i = 0; i < NUM_CELLS; i++) {
    cells.push(Math.random() < 0.7 ? "coin" : "bomb");
  }
  return cells;
};

// Add spinning animation CSS
const spinStyle = `
@keyframes flip {
  0% { transform: rotateY(0deg);}
  100% { transform: rotateY(180deg);}
}
.spin {
  animation: flip 0.7s linear;
  backface-visibility: hidden;
}
`;

const BALANCE_KEY = "coinBombBalance";
const getInitialBalance = () => {
  const stored = localStorage.getItem(BALANCE_KEY);
  return stored ? Number(stored) : 1450;
};

const CoinBomb: React.FC = () => {
  const [revealed, setRevealed] = useState<CellType[]>(Array(NUM_CELLS).fill("hidden"));
  const [cellTypes] = useState<("coin" | "bomb")[]>(generateCells());
  const [spinningIdx, setSpinningIdx] = useState<number | null>(null);
  const [playable, setPlayable] = useState(true);
  const [amountWon, setAmountWon] = useState(0);
  const [balance, setBalance] = useState(getInitialBalance());

  useEffect(() => {
    localStorage.setItem(BALANCE_KEY, balance.toString());
  }, [balance]);

  const formik = useFormik({
    initialValues: {
      bet: 0,
    },
    validate: (values) => {
      const errors: { bet?: string } = {};
      if (values.bet > balance) {
        errors.bet = "Sorry, you have insufficient funds.";
      }
      if (values.bet < 0) {
        errors.bet = "must be positive";
      }
      return errors;
    },
    onSubmit: (values) => {
      console.log("Form values:", values);
    },
  });

  useEffect(() => {
    if (formik.values.bet <= 0) {
      setPlayable(false);
    }
  }, []);

  useEffect(() => {
    if (formik.values.bet > 0) {
      setPlayable(true);
    } else {
      setPlayable(false);
    }
    if (formik.values.bet < balance) {
      setAmountWon(formik.values.bet);
    }
  }, [formik.values.bet]);

  const handleReveal = (idx: number) => {
    if (revealed[idx] !== "hidden" || spinningIdx !== null) return;
    setSpinningIdx(idx);
    setTimeout(() => {
      const type = cellTypes[idx];
      setRevealed((prev) => {
        const next = [...prev];
        next[idx] = type;
        return next;
      });
      setSpinningIdx(null);
      const audio = new Audio(type === "bomb" ? sad : happy);
      audio.play();
    }, 700); // match animation duration
  };

  const handleRevealAll = () => {
    setRevealed(cellTypes);
  };

  const handleRestart = () => {
    setRevealed(Array(NUM_CELLS).fill("hidden"));
    setPlayable(false);
    setAmountWon(0);
    formik.resetForm();
  };

  const handleCashOut = () => {
    if (revealed.filter((cell) => cell !== "hidden").length === 0) {
      return;
    }
    setBalance((prev) => prev + amountWon);
    setPlayable(false);
    formik.setFieldValue("bet", 0);
    setAmountWon(0);
    setRevealed(Array(NUM_CELLS).fill("hidden"));
  };

  useEffect(() => {
    if (revealed.includes("bomb")) {
      setPlayable(false);
      // setAmountWon(0);
    } else {
      if (revealed.filter((cell) => cell !== "hidden").length === 1) {
        setBalance((prev) => prev - formik.values.bet);
      }
      const randomMultiplier = Math.random() * (2 - 1.1) + 1.1; // Random multiplier between 1.1 and 2
      setAmountWon(randomMultiplier * amountWon);
    }
  }, [revealed]);

  return (
    <div className="w-screen h-max min-h-screen p-8 pt-12 bg-gradient-to-br bg-gray-900 via-gray-900 to-green-800 font-host">
      {/* Inject animation style */}
      <style>{spinStyle}</style>
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="text-4xl font-host font-black mb-2">COIN - BOMB GAME</div>

        <div className="flex gap-4">
          <button onClick={handleRevealAll} className="bg-green-900 flex items-center justify-center gap-2 text-xs text-white px-4 py-2 mb-4 rounded hover:bg-green-700 transition">
            <ImEye size={20} /> Reveal All
          </button>
          <button onClick={handleRestart} className="bg-sky-800 flex gap-2 items-center justify-center itext-xs text-white px-4 py-2 mb-4 rounded hover:bg-sky-600 transition">
            <VscDebugRestart /> Restart
          </button>
        </div>

        <div className="w-1/2 flex flex-wrap justify-center items-center gap-4 min-h-[40rem] h-max rounded-md p-8 py-20 bg-gray-800">
          {revealed.map((cell, idx) => (
            <div
              key={idx}
              className={`bg-gray-900 rounded-xl h-max cursor-pointer${!playable ? " opacity-50 pointer-events-none" : ""}`}
              onClick={() => playable && handleReveal(idx)}
              style={{ transition: "background 0.2s" }}
            >
              {spinningIdx === idx ? (
                <img src={Question} alt="Spinning" className="w-24 h-24 rounded-xl spin" />
              ) : cell === "hidden" ? (
                <img src={Question} alt="Question" className="w-24 h-24 rounded-xl" />
              ) : cell === "coin" ? (
                <img src={Bitcoin} alt="Coin" className="w-24 h-24 p-6 rounded-xl object-cover" />
              ) : (
                <img src={Bomb} alt="Bomb" className="w-24 h-24 p-6 rounded-xl object-cover" />
              )}
            </div>
          ))}
        </div>
        <div className="mt-4 bg-gray-800 w-1/2 min-h-48 rounded-md p-6 font-semibold">
          <FormikProvider value={formik}>
            <Form>
              <div className="flex gap-2 divide-x h-full divide-zinc-500">
                <div className="flex flex-col w-1/2 h-32">
                  <label>Place your Bet</label>
                  {formik.errors.bet && <div className="text-red-500 text-sm ">{formik.errors.bet}</div>}
                  <input
                    disabled={revealed.some((cell) => cell !== "hidden")}
                    type="number"
                    name="bet"
                    value={formik.values.bet}
                    onChange={formik.handleChange}
                    className={`bg-gray-700 text-white p-4 mt-4 max-w-40 rounded-md w-full ${formik.errors.bet ? "border-2 border-red-500" : ""}`}
                    placeholder="Bet . . ."
                  />

                  <div className="text-sm text-zinc-400 mt-2">Balance : ${balance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
                </div>

                <div className="w-1/2">
                  <div className="text-xl font-bold">Total Winnings</div>
                  <div className="flex flex-col h-full">
                    <div className="font-black w-1/3  text-5xl text-green-700">${amountWon.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
                    <button
                      className={` cursor-pointer w-max p-2 px-4 mt-4 text-white rounded-md font-black ${!playable ? "bg-purple-300 cursor-not-allowed" : "bg-purple-600 hover:bg-purple-400"}`}
                      disabled={!playable}
                      onClick={handleCashOut}
                    >
                      Cash out
                    </button>
                  </div>
                </div>
              </div>
            </Form>
          </FormikProvider>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CoinBomb;
