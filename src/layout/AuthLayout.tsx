import type { FC, ReactNode } from "react";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Pass a callback to Sidebar to notify when it's open/closed
  const handleSidebarToggle = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <div className="min-h-screen flex min-w-screen">
      <Sidebar onToggle={handleSidebarToggle} isOpen={sidebarOpen} />
      <div className={`flex-1 pt-10 flex justify-center items-center transition duration-300 ${sidebarOpen ? "blur-sm pointer-events-none" : ""}`}>{children}</div>
    </div>
  );
};

export default AuthLayout;
