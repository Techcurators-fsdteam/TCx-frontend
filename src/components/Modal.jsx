import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { FaTimes } from 'react-icons/fa';
import './Modal.css'; // Import the custom CSS

const Modal = ({ isOpen, onClose, children,bg }) => {
  const modalRef = useRef();

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex  items-center justify-center bg-black bg-opacity-50 z-50 overflow-auto">
      <div
        ref={modalRef}
        className={`modal-content bg-${bg} text-white rounded-xl p-4 sm:p-6 max-h-[80%] max-w-[90%] overflow-y-auto`}
        style={{ width: 'max-content', maxWidth: '100%' }}
      >
        <div className="flex justify-end">
          <button onClick={onClose} className="close-button">
            <FaTimes className="text-white text-2xl" />
          </button>
        </div>
        <div className="mt-4">{children}</div>
      </div>
    </div>,
    document.getElementById('portal')
  );
};

export default Modal;
