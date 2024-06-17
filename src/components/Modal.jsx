import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div className="relative bg-[#1F202A] w-full max-w-3xl rounded-md p-6 shadow-lg">
        
        {/* Close button styled as requested */}
        <button
          className="absolute top-4 right-4 text-black bg-white rounded-full w-8 h-8 flex items-center justify-center focus:outline-none"
          onClick={onClose}
        >
          &times;
        </button>

        <div className="overflow-y-auto max-h-[80vh]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
