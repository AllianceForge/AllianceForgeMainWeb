import React from "react";

const CtaButtons = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 justify-center">
      {/* Play Now Button */}
      <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition">
        Play Now
      </button>

      {/* View NFTs Button */}
      <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition">
        View NFTs
      </button>

      {/* Read Whitepaper Button */}
      <button className="px-6 py-3 bg-gray-700 hover:bg-gray-800 text-white font-semibold rounded-lg transition">
        Read Whitepaper
      </button>
    </div>
  );
};

export default CtaButtons;
