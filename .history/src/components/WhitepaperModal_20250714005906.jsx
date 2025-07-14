// src/components/WhitepaperModal.jsx
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";

const WhitepaperModal = ({ onClose, isPageView = false }) => {
  const navigate = useNavigate();
  const modalRef = useRef(null);

  const handleClose = () => {
    if (onClose) {
      onClose();
    } else {
      // If onClose is not provided (e.g., if used as a standalone page),
      // navigate back.
      navigate(-1);
    }
  };

  useEffect(() => {
    // Focus the modal for accessibility when it opens
    modalRef.current?.focus();
  }, []);

  // Conditional CSS classes for the modal container
  const containerClass = isPageView
    ? "min-h-screen bg-black flex items-center justify-center px-4 py-10"
    : "fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex items-center justify-center z-50";

  // Conditional CSS classes for the modal content frame
  const frameClass = isPageView
    ? "w-full max-w-5xl rounded-xl border-2 border-cyan-400 shadow-[0_0_20px_rgba(0,255,255,0.5)] transition-all duration-300 ease-out"
    : "w-full max-w-4xl rounded-lg border border-cyan-500 shadow-lg transition-transform duration-300 ease-in-out";

  // CSS class for the close button
  const buttonClass =
    "mt-4 px-5 py-2 bg-cyan-600 text-white font-semibold rounded hover:bg-cyan-700 transition focus:outline-none focus:ring-2 focus:ring-cyan-400";

  return (
    <div
      className={containerClass}
      role="dialog"
      aria-modal="true"
      aria-labelledby="whitepaper-title" // Ensure whitepapermodal.html has a title with this id
      tabIndex="-1"
      ref={modalRef}
    >
      <div className={frameClass}>
        {/* Using an iframe to load whitepapermodal.html content */}
        <iframe
          src="./whitepapermodal.html" // CORRECTED: Now loading whitepapermodal.html
          title="Alliance Forge Whitepaper"
          className="w-full h-[600px] rounded overflow-y-auto bg-gray-900 text-white" // Added text-white to ensure text is visible
          allowFullScreen
        />
        <div className="text-center p-4"> {/* Added padding to the button div */}
          {/* Button to close the modal */}
          <button
            className={buttonClass}
            onClick={handleClose}
            aria-label="Close Whitepaper Modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

WhitepaperModal.propTypes = {
  onClose: PropTypes.func,
  isPageView: PropTypes.bool,
};

export default WhitepaperModal;
