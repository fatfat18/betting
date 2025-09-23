import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { VscGraph } from "react-icons/vsc";
import { TbPokerChip } from "react-icons/tb";
import { BiBasketball } from "react-icons/bi";
import { HiOutlineUser } from "react-icons/hi2";
import { BsGear } from "react-icons/bs";
import { LiaUserAstronautSolid } from "react-icons/lia";
import { AiOutlineLogout } from "react-icons/ai";
import { AUTH_ROUTES, UNAUTH_ROUTES } from "../constants/routes.constants";

const sidebarLinks = [
  { name: "Dashboard", path: AUTH_ROUTES.DASHBOARD, icon: <VscGraph /> },
  { name: "Games", path: AUTH_ROUTES.PLAY_GAMES, icon: <BiBasketball /> },
  { name: "Bets", path: AUTH_ROUTES.BETTING, icon: <TbPokerChip /> },
  { name: "Profile", path: AUTH_ROUTES.PROFILE, icon: <HiOutlineUser /> },
  { name: "Settings", path: AUTH_ROUTES.SETTINGS, icon: <BsGear /> },
  { name: "Support", path: AUTH_ROUTES.CONTACT_SUPPORT, icon: <LiaUserAstronautSolid /> },
  { name: "Logout", path: UNAUTH_ROUTES.LOGIN, icon: <AiOutlineLogout /> },
];

interface SidebarProps {
  isOpen: boolean;
  onToggle?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onToggle, isOpen }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleToggle = () => {
    if (onToggle) {
      onToggle();
    }
  };

  return (
    <div className={`relative h-screen`}>
      {/* Toggle Button */}
      <button
        onClick={handleToggle}
        className={`absolute top-6 ${
          isOpen ? "right-[-300px]" : "right-[-50px]"
        } cursor-pointer z-20 bg-gray-900 border border-gray-700 rounded-full p-2 transition-all duration-300 hover:bg-gray-800`}
        aria-label={isOpen ? "Close sidebar " : "isOpen sidebar "}
      >
        <span className={`block w-6 h-6 text-white transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
          {/* Simple arrow icon */}
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </button>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen  text-white p-6 flex flex-col gap-4 shadow-lg font-host z-10
          transition-all duration-300
          ${isOpen ? "w-[280px] bg-gradient-to-b from-gray-950 via-gray-950 to-black" : "w-[0px] "}
        `}
      >
        <div
          className={`   font-bold tracking-wide text-center flex items-center gap-4 bg-gradient-to-br from-green-950 via-black to-black rounded-xl p-4
            transition-opacity duration-300
            ${isOpen ? "opacity-100" : "opacity-0  pointer-events-none"}
          `}
        >
          <img src="/assets/home/logo_new_betting.webp" alt="Betting App Logo" className="w-14" />
          <p className="font-black text-2xl">ETHXpert</p>
        </div>
        <nav>
          <ul className="list-none p-0 m-0  ">
            {sidebarLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <li key={link.path} className="mb-2">
                  <button
                    onClick={() => {
                      if (isOpen) {
                        navigate(link.path);
                      }
                    }}
                    className={`flex items-center gap-3 w-full text-left px-4 py-2 rounded transition-colors duration-200 text-sm font-medium cursor-pointer
          ${isActive ? "bg-gray-800 text-green-400 font-semibold" : "hover:bg-gray-900 hover:text-green-300"}
          ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"} , ${link.name === "Logout" ? " hover:text-red-600" : ""}
          transition-opacity duration-300 
              `}
                  >
                    <span className="text-lg">{link.icon}</span>
                    {isOpen ? link.name : ""}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
