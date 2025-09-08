import React from "react";
import { Link, useLocation } from "react-router-dom";
import { UNAUTH_ROUTES } from "../constants/routes.constants";

type NavItem = {
  label: string;
  path: string;
};

const navItems: NavItem[] = [
  { label: "Home", path: UNAUTH_ROUTES.HOME },
  { label: "Games", path: UNAUTH_ROUTES.GAMES },
  { label: "Login", path: UNAUTH_ROUTES.LOGIN },
  { label: "Register", path: UNAUTH_ROUTES.REGISTER },
];

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="flex gap-6 px-8 py-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg items-center">
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`transition-colors duration-200 px-4 py-2 rounded-lg text-lg font-medium ${
            location.pathname === item.path ? "bg-green-800 text-white shadow font-bold" : "text-gray-300 hover:bg-gray-700 hover:text-white"
          }`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
