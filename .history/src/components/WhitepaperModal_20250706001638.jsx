import { useEffect, useState } from "react";
import allianceForgeLogoImage from "../assets/logo.png";

const WhitepaperModal = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const show = () => setOpen(true);
    const hide = () => setOpen(false);
    document.addEventListener("openWhitepaperModal", show);
    document.addEventListener("closeWhitepaperModal", hide);
    return () => {
      document.removeEventListener("openWhitepaperModal", show);
      document.removeEventListener("closeWhitepaperModal", hide);
    };
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[999] bg-black bg-opacity-80 backdrop-blur-sm flex items-center justify-center px-4">
      <div className="relative bg-gray-900 border border-cyan-600 rounded-xl shadow-lg max-w-md w-full p-6 text-white animate-fade-in">
        <button
          onClick={() => document.dispatchEvent(new Event("closeWhitepaperModal"))}
          className="absolute top-2 right-3 text-cyan-400 text-xl hover:text-white"
        >
          ✕
        </button>

        <div className="flex flex-col items-center text-center mt-4">
          <img
            src={allianceForgeLogoImage}
            alt="Alliance Forge"
            className="w-20 h-20 mb-4 object-contain rounded-xl shadow-md"
          />
          <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent mb-2">
            Whitepaper
          </h3>
          <p className="text-sm text-gray-300 mb-4">
            Discover the foundations of the Alliance Forge ecosystem in our official whitepaper.
          </p>
          <a
            href="https://gemini.google.com/share/9a19f321e25c"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-300 to-blue-500 text-white font-semibold rounded-lg hover:shadow-cyan-400/50 transition-transform hover:scale-105"
          >
            Leer Whitepaper
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhitepaperModal;
// This component is designed to be used in the main App component.
// It listens for custom events to open and close the modal, and displays the whitepaper information.;

