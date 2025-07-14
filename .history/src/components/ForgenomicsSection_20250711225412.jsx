// src/components/WhitepaperModal.jsx
import ReactDOM from "react-dom";
import { useEffect, useRef } from "react";
import allianceForgeLogoImage from "../assets/logo.png";

const Modal = ({ onClose }) => {
  const modalRef = useRef();

  // This logic allows the user to close the modal by clicking outside of it.
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

  // If a 'modal-root' element doesn't exist in your index.html, create it
  let modalRoot = document.getElementById("modal-root");
  if (!modalRoot) {
    modalRoot = document.createElement("div");
    modalRoot.setAttribute("id", "modal-root");
    document.body.appendChild(modalRoot);
  }

  return ReactDOM.createPortal(
    // Modal Overlay (the background)
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4">
      {/* Modal content */}
      <div ref={modalRef} className="bg-gray-800 bg-opacity-95 backdrop-blur-md rounded-2xl p-6 shadow-lg border-2 border-cyan-500 max-w-lg w-full relative">
        {/* Close button */}
        <button onClick={onClose} className="absolute top-3 right-3 text-white text-2xl font-bold hover:text-cyan-300 transition-colors">
          &times;
        </button>

        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
            Forgenomics
          </h2>
          <div className="w-24 h-24 mx-auto mb-4">
            <img src={allianceForgeLogoImage} alt="Forgenomics Whitepaper" className="w-full h-full object-contain rounded-2xl shadow-md" />
          </div>
          <h3 className="text-lg font-semibold mb-2 bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
            Forgenomics Whitepaper
          </h3>
          <p className="text-sm text-gray-300 mb-4">
            Explore the complete tokonomas of Alliance Forge in our official whitepaper, detailing the ALLFORGE token, economy, and governance.
          </p>
          <a
            href="https://gemini.google.com/share/c01412ef623a"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-300 to-blue-500 text-white font-semibold rounded-lg shadow-md hover:shadow-cyan-500/50 transition-transform transform hover:scale-105"
          >
            Read the Whitepaper
          </a>
        </div>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;