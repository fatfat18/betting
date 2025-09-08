import React from "react";
import { Link, useLocation } from "react-router-dom";
import { UNAUTH_ROUTES } from "../constants/routes.constants";
import { GoDotFill } from "react-icons/go";

import { useNavigate } from "react-router-dom";

type NavItem = {
  label: string;
  path: string;
};

const navItems: NavItem[] = [
  { label: "Home", path: UNAUTH_ROUTES.HOME },
  { label: "Games", path: UNAUTH_ROUTES.GAMES },
  { label: "Live", path: UNAUTH_ROUTES.LIVE },
  { label: "Rewards", path: UNAUTH_ROUTES.REWARDS },
  { label: "About", path: UNAUTH_ROUTES.ABOUT },
  // { label: "Login", path: UNAUTH_ROUTES.LOGIN },
  // { label: "Register", path: UNAUTH_ROUTES.REGISTER },
];

const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="h-24 px-8 flex gap-6  items-center font-host">
      <div className="w-1/6 flex items-center justify-center font-black text-3xl  ">
        <img src="/src/assets/home/logo_new_betting.webp" alt="Logo" className="h-16 mr-2" />
        ETHXpert
      </div>
      <div className="w-4/6 flex gap-2 items-center justify-center">
        {" "}
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`  px-4 py-2 rounded-lg text-lg  flex items-center justify-center  ${
              location.pathname === item.path ? " text-white shadow font-black" : "text-gray-300 hover:bg-gray-700 hover:text-white"
            }`}
          >
            {item?.label === "Live" && <GoDotFill className=" text-red-600 mr-1 animate-pulse" />}
            {item.label}
          </Link>
        ))}
      </div>
      <div className="w-1/6  items-center justify-end flex gap-4 font-black  ">
        <button
          onClick={() => navigate("/register")}
          className="flex items-center gap-3 px-4 py-2 rounded-full    cursor-pointer  text-white  hover:text-green-800 transition duration-500 ease-in-out "
        >
          SIGN UP
        </button>
        <button
          onClick={() => navigate("/login")}
          className="flex items-center gap-3 px-8 py-2 rounded-md hover:bg-green-800   cursor-pointer bg-green-900 text-white  border-2 border-green-900 hover:text-white transition duration-500 ease-in-out "
        >
          LOGIN
        </button>
      </div>
    </div>
  );
};

export default Navbar;
