import React from "react";
import allianceForgeLogoImage from "../assets/logo.png";

const WhitepaperCard = () => {
  return (
    <div className="bg-gray-900 border border-cyan-700/40 rounded-2xl shadow-lg p-6 text-white max-w-md mx-auto hover:shadow-cyan-400/30 transition-all duration-300">
      <div className="flex flex-col items-center text-center">
        <img
          src={allianceForgeLogoImage}
          alt="Alliance Forge Logo"
          className="w-20 h-20 mb-4 object-contain rounded-xl shadow-md"
        />
        <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent mb-2">
          Whitepaper
        </h3>
        <p className="text-sm text-gray-300 mb-4">
          Descubre los fundamentos del ecosistema Alliance Forge en nuestro whitepaper oficial.
        </p>
        <a
          href="https://gemini.google.com/share/9a19f321e25c"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-300 to-blue-500 text-white font-semibold rounded-lg hover:shadow-cyan-400/50 transition-transform transform hover:scale-105"
        >
          Leer Whitepaper
        </a>
      </div>
    </div>
  );
};

export default WhitepaperCard;
