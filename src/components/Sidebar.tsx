import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const sidebarLinks = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "Games", path: "/games" },
  { name: "Bets", path: "/bets" },
  { name: "Profile", path: "/profile" },
  { name: "Statistics", path: "/statistics" },
  { name: "Settings", path: "/settings" },
  { name: "Support", path: "/support" },
  { name: "Logout", path: "/logout" },
];

interface SidebarProps {
  isOpen: boolean;
  onToggle?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onToggle, isOpen }) => {
  const location = useLocation();

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
          isOpen ? "right-[-270px]" : "right-[-50px]"
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
          ${isOpen ? "w-[250px] bg-gradient-to-b from-gray-950 via-gray-950 to-black" : "w-[0px] "}
        `}
      >
        <div
          className={`text-2xl   font-bold tracking-wide text-center flex items-center gap-4 bg-gradient-to-br from-green-950 via-black to-black rounded-xl p-4
            transition-opacity duration-300
            ${isOpen ? "opacity-100" : "opacity-0  pointer-events-none"}
          `}
        >
          <img src="/assets/home/logo_new_betting.webp" alt="Betting App Logo" className="w-14" />
          <p className="font-black">ETHXpert</p>
        </div>
        <nav>
          <ul className="list-none p-0 m-0">
            {sidebarLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <li key={link.path} className="mb-4">
                  <Link
                    to={link.path}
                    className={`block px-4 py-2 rounded transition-colors duration-200 text-lg font-medium
                      ${isActive ? "bg-gray-800 text-blue-400 font-semibold" : "hover:bg-gray-800 hover:text-blue-300"}
                      ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
                      transition-opacity duration-300
                    `}
                  >
                    {isOpen ? link.name : ""}
                  </Link>
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
