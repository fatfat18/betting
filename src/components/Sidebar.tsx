import React from "react";
import { Link, useLocation } from "react-router-dom";

const sidebarLinks = [
  { name: "Home", path: "/" },
  { name: "Bets", path: "/bets" },
  { name: "Results", path: "/results" },
  { name: "Profile", path: "/profile" },
];

const Sidebar: React.FC = () => {
  const location = useLocation();

  return (
    <aside className="w-[220px] h-screen bg-gray-900 text-white p-6 flex flex-col gap-4 shadow-lg">
      <h2 className="mb-8 text-2xl font-bold tracking-wide text-center">Betting App</h2>
      <nav>
        <ul className="list-none p-0 m-0">
          {sidebarLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <li key={link.path} className="mb-4">
                <Link
                  to={link.path}
                  className={`block px-4 py-2 rounded transition-colors duration-200 text-lg font-medium ${
                    isActive ? "bg-gray-800 text-blue-400 font-semibold" : "hover:bg-gray-800 hover:text-blue-300"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
