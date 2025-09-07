import React, { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { FaRegCircleQuestion } from "react-icons/fa6";

type Toast = {
  id: number;
  message: string;
  type?: "success" | "error" | "info";
  visible: boolean;
};

type ToastContextType = {
  showToast: (message: string, type?: Toast["type"]) => void;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) throw new Error("useToast must be used within ToastProvider");
  return context;
};

let toastId = 0;

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = (message: string, type?: Toast["type"]) => {
    const id = ++toastId;
    setToasts((prev) => [...prev, { id, message, type, visible: false }]);
    setTimeout(() => {
      setToasts((prev) => prev.map((toast) => (toast.id === id ? { ...toast, visible: true } : toast)));
    }, 10); // trigger animation after mount

    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 5000);
  };

  const getToastClasses = (type?: Toast["type"]) => {
    switch (type) {
      case "success":
        return "text-green-800 border-t-4 border-green-800 ";
      case "error":
        return "text-red-500 border-t-4 border-red-500 ";
      case "info":
        return "text-blue-500 border-t-4 border-blue-500 ";
      default:
        return "text-gray-800 border-t-4 border-gray-800";
    }
  };

  const getToastIcon = (type?: Toast["type"]) => {
    switch (type) {
      case "success":
        return <FaRegCircleCheck className="mr-2 text-xl" />;
      case "error":
        return <AiOutlineExclamationCircle className="mr-2 text-xl" />;
      case "info":
        return <FaRegCircleQuestion className="mr-2 text-xl" />;
      default:
        return null;
    }
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="fixed top-5 left-1/2 transform -translate-x-1/2 z-[9999] flex flex-col items-center gap-2">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`min-w-[200px] px-6 py-3 rounded-md font-medium shadow-lg transition-all duration-300 ease-out bg-white
                                        ${getToastClasses(toast.type)}
                                        ${toast.visible ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"}
                                `}
          >
            <div className="flex items-center">
              {getToastIcon(toast.type)}
              <span>{toast.message}</span>
            </div>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};
