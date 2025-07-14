// src/components/ForgenomicsSection.jsx
import { useState } from "react";
import ForgenomicsModal from "./ForgenomicsModal"; // Import the new modal
import allianceForgeLogoImage from "../assets/logo.png";

const ForgenomicsSection = () => {
  const [open, setOpen] = useState(false);

  // You no longer need the event listeners, state is sufficient
  // useEffect(() => { ... }, []);

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  return (
    <section
      id="forgenomics"
      className="py-16 bg-gray-900 bg-opacity-90 backdrop-blur-lg rounded-xl shadow-lg text-white"
    >
      <div className="container mx-auto px-6 text-center">
        {/* Section Header */}
        <h2 className="text-4xl font-bold mb-10 bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
          Forgenomics
        </h2>

        {/* Button to open the modal */}
        <div className="bg-gray-800 bg-opacity-80 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-cyan-500/50 transition-transform transform hover:scale-105 inline-block cursor-pointer">
          <div className="w-24 h-24 mx-auto mb-4">
            <img
              src={allianceForgeLogoImage}
              alt="Forgenomics Whitepaper"
              className="w-full h-full object-contain rounded-2xl shadow-md"
            />
          </div>
          <h3 className="text-lg font-semibold mb-2 bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
            Forgenomics Whitepaper
          </h3>
          <p className="text-sm text-gray-300 mb-4">
            Click to see the complete tokenomics of Alliance Forge.
          </p>
          <button
            onClick={openModal}
            className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-300 to-blue-500 text-white font-semibold rounded-lg shadow-md hover:shadow-cyan-500/50 transition-transform transform hover:scale-105"
          >
            Open Forgenomics
          </button>
        </div>

        {/* Conditionally render the modal if 'open' is true */}
        {open && <ForgenomicsModal onClose={closeModal} />}
      </div>
    </section>
  );
};

export default ForgenomicsSection;