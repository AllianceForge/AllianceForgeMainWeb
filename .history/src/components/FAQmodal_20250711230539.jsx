// src/components/FAQModal.jsx
import { useRef, useEffect } from "react";
import PropTypes from 'prop-types';
import ReactDOM from "react-dom";

const FAQModal = ({ faq, onClose }) => {
  const modalRef = useRef();

  // Allows the modal to be closed by clicking outside of it.
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  if (!faq) {
    return null; // Does not show anything if an FAQ is not selected
  }

  return ReactDOM.createPortal(
    // The dark modal background
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4">
      {/* Modal content */}
      <div ref={modalRef} className="bg-gray-800 bg-opacity-95 backdrop-blur-md rounded-2xl p-6 shadow-lg border-2 border-cyan-500 max-w-lg w-full relative">
        {/* Close button */}
        <button onClick={onClose} className="absolute top-3 right-3 text-white text-2xl font-bold hover:text-cyan-300 transition-colors">
          &times;
        </button>

        <div className="text-center">
          <div className="w-24 h-24 mx-auto mb-4">
            <img
              src={faq.icon}
              alt={faq.title}
              className="w-full h-full object-contain rounded-xl shadow-md"
            />
          </div>
          <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
            {faq.title}
          </h3>
          <p className="text-base text-gray-300">{faq.description}</p>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root") || document.body.appendChild(document.createElement('div', { id: 'modal-root' }))
  );
};

export default FAQModal;

FAQModal.propTypes = {
  faq: PropTypes.shape({
    icon: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  }),
  onClose: PropTypes.func.isRequired,
};