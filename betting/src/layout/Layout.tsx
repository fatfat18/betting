import React from "react";
import Navbar from "../components/Navbar";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative">
      <div className="fixed top-0 left-0 w-full z-50  ">
        {" "}
        <Navbar />
      </div>
      {children}
    </div>
  );
};

export default Layout;
