import React, { type ReactNode } from "react";
import { IoClose } from "react-icons/io5";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
  showHeader?: boolean;
  headerClass?: string;
  modalClass?: string;
  width?: string | number;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title, showHeader = true, headerClass = "", modalClass = "", width = "400px" }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed font-host inset-0 bg-black/80 backdrop-blur flex items-center justify-center z-50 text-black " onClick={onClose}>
      <div className={`bg-white rounded-lg p-6 relative shadow-lg ${modalClass} ${width ? width : "w-40"}`} onClick={(e) => e.stopPropagation()}>
        {showHeader && <div className={`mb-4 font-bold text-lg ${headerClass}`}>{title}</div>}
        <button onClick={onClose} className="absolute top-3 right-3 bg-transparent border-none text-2xl cursor-pointer" aria-label="Close" type="button">
          <IoClose />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
