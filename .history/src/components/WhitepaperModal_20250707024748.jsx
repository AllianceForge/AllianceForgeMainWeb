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
      navigate(-1);
    }
  };

  // Automatically focus modal for keyboard users
  useEffect(() => {
    modalRef.current?.focus();
  }, []);

  const containerClass = isPageView
    ? "min-h-screen bg-black flex items-center justify-center px-4 py-10"
    : "fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex items-center justify-center z-50";

  const frameClass = isPageView
    ? "w-full max-w-5xl rounded-xl border-2 border-cyan-400 shadow-[0_0_20px_rgba(0,255,255,0.5)] transition-all duration-300 ease-out"
    : "w-full max-w-4xl rounded-lg border border-cyan-500 shadow-lg transition-transform duration-300 ease-in-out";

  const buttonClass =
    "mt-4 px-5 py-2 bg-cyan-600 text-white font-semibold rounded hover:bg-cyan-700 transition focus:outline-none focus:ring-2 focus:ring-cyan-400";

  return (
    <div
      className={containerClass}
      role="dialog"
      aria-modal="true"
      aria-labelledby="whitepaper-title"
      tabIndex="-1"
      ref={modalRef}
    >
      <div className={frameClass}>
        <iframe
          src="/whitepaperModal.html"
          title="Whitepaper"
          className="w-full h-[600px] rounded"
          allowFullScreen
        />
        <div className="text-center">
          <button
            onClick={handleClose}
            className={buttonClass}
            aria-label="Close whitepaper modal"
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

