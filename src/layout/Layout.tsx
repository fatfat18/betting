import React from "react";
import Navbar from "../components/Navbar";
import { UNAUTH_ROUTES } from "../constants/routes.constants";
import { useLocation } from "react-router-dom";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  const isUnAuthRoute = Object.values(UNAUTH_ROUTES).includes(location.pathname);

  return (
    <div className="relative">
      {isUnAuthRoute && (
        <div className="fixed top-0 left-0 w-full z-50">
          <Navbar />
        </div>
      )}
      {children}
    </div>
  );
};

export default Layout;
