import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const WhitepaperModal = ({ onClose, isPageView = false }) => {
  const navigate = useNavigate();

  // If used as a full-page view, allow navigating back
  const handleClose = () => {
    if (onClose) {
      onClose(); // traditional modal close
    } else {
      navigate(-1); // navigate back if it's a standalone page
    }
  };

  const containerClass = isPageView
    ? "min-h-screen bg-black flex items-center justify-center px-4 py-10"
    : "fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50";

  const frameClass = isPageView
    ? "w-full max-w-5xl rounded-xl border border-cyan-500 shadow-lg"
    : "w-full max-w-4xl rounded-md shadow-xl";

  const buttonClass =
    "mt-4 px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700 transition";

  return (
    <div className={containerClass}>
      <div className={frameClass}>
        <iframe
          src="https://gemini.google.com/share/9a19f321e25c"
          title="Whitepaper"
          className="w-full h-[600px] rounded"
          allowFullScreen
        />
        <div className="text-center">
          <button onClick={handleClose} className={buttonClass}>
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
