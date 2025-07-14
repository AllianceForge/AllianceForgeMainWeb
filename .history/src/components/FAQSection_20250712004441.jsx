// src/components/FAQSection.jsx
import React, { useState } from "react";
import FAQModal from "./FAQModal.jsx"; // Import the modal with the correct extension
import faqIcon1 from "../assets/faq-whatisallianceforge.png";
import faqIcon2 from "../assets/faq-howdoesblockchain.png";
import faqIcon3 from "../assets/faq-isallianceforgefree.png";
import faqIcon4 from "../assets/faq-whatareallforgetokens.png";
import faqIcon5 from "../assets/faq-canIplayAFMobile.png";

const FAQSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFaq, setSelectedFaq] = useState(null);

  const faqs = [
    {
      icon: faqIcon1,
      title: "What is Alliance Forge?",
      description:
        "Alliance Forge is a strategic MMO that combines large-scale warfare, blockchain integration, and player-driven governance.",
    },
    {
      icon: faqIcon2,
      title: "How does the blockchain integration work?",
      description:
        "Alliance Forge uses Cronos Blockchain to provide true ownership of assets such as lands, relics, and avatars, which can be traded or upgraded for strategic advantages.",
    },
    {
      icon: faqIcon3,
      title: "Is Alliance Forge free to play?",
      description:
        "Yes, Alliance Forge is free to play, but free-to-play players will not earn ALLFORGE tokens directly. They can still trade assets and participate in gameplay.",
    },
    {
      icon: faqIcon4,
      title: "What are ALLFORGE tokens used for?",
      description:
        "ALLFORGE tokens are used for trading, upgrades, and governance within the game’s economy.",
    },
    {
      icon: faqIcon5,
      title: "Can I play Alliance Forge on mobile?",
      description:
        "Yes, Alliance Forge is cross-compatible and can be played on both PC and mobile devices.",
    },
  ];

  // Function to open the modal with the selected FAQ
  const openModalWithFaq = (faqData) => {
    setSelectedFaq(faqData);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedFaq(null); // We clear the state
  };

  return (
    <section
      id="faq"
      className="py-16 bg-gray-900 bg-opacity-90 backdrop-blur-md rounded-xl shadow-lg text-white"
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-10 bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
          Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {faqs.map((faq, index) => (
            // Add a click handler to each FAQ card
            <div
              key={index}
              onClick={() => openModalWithFaq(faq)} // Call the function on click
              className="bg-gray-800 bg-opacity-80 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 cursor-pointer"
            >
              <div className="w-16 h-16 mx-auto mb-4">
                <img
                  src={faq.icon}
                  alt={faq.title}
                  className="w-full h-full object-contain rounded-xl shadow-md"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2 bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
                {faq.title}
              </h3>
              <p className="text-sm text-gray-300">
                {/* Show only a part of the description, if you want */}
                {faq.description.slice(0, 70)}...
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* Conditionally render the modal if isModalOpen is true */}
      {isModalOpen && <FAQModal faq={selectedFaq} onClose={closeModal} />}
    </section>
  );
};

export default FAQSection;