import React from "react";
import { FaBitcoin, FaEthereum } from "react-icons/fa";
import { SiTether, SiSolana, SiDogecoin } from "react-icons/si";
import { RiXrpFill } from "react-icons/ri";

const Footer: React.FC = () => (
  <footer className="w-screen flex flex-col items-center mt-10">
    <div className="my-8 text-zinc-400">© Copyright Reserved for ETHXpert 2026</div>
    <div className="w-full flex items-start justify-center h-32 flex-wrap gap-20 z-0 opacity-80">
      <FaBitcoin className="w-16 h-16 text-zinc-600" title="Bitcoin" />
      <FaEthereum className="w-16 h-16 text-zinc-600" title="Ethereum" />
      <SiTether className="w-16 h-16 text-zinc-600" title="Tether" />
      <SiSolana className="w-16 h-16 text-zinc-600" title="Solana" />
      <RiXrpFill className="w-16 h-16 text-zinc-600" title="XRP" />
      <SiDogecoin className="w-16 h-16 text-zinc-600" title="Dogecoin" />
    </div>
  </footer>
);

export default Footer;
