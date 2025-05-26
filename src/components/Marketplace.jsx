import React, { useState } from "react"; // React and useState are imported to manage and update state dynamically.
import nftOwnershipImg from "../assets/features-nftownership.png";
import forgeSwarmThreatImg from "../assets/features-forgeswarmthreat.png";
import cityBuildingImg from "../assets/features-citybuilding.png";
import massiveBattlesImg from "../assets/features-massivebattle.png";
import supplyBreakdownImg from "../assets/forgenomics-supplybreakdown.png";
import allforgeTokenImg from "../assets/forgenomics-allforgetoken.png";

// Main Marketplace component
const Marketplace = () => {
  // Define all marketplace items. Each item represents an asset available for purchase.
  const items = [
    {
      id: 1, // Unique identifier for the item, important for React rendering.
      image: nftOwnershipImg, // Path to the item's image.
      title: "Galactic Singularity Land NFT", // Title displayed prominently on the card.
      description: "Premium NFT land tier with the highest resource generation.", // Short description of the item.
      price: "1200 AFT", // Price in in-game currency (ALLFORGE Tokens).
      type: "NFT", // Type of the item, used for category filtering.
    },
    {
      id: 2,
      image: forgeSwarmThreatImg,
      title: "Forge Swarm Countermeasure Blueprint",
      description: "A rare blueprint for advanced defensive technologies.",
      price: "800 AFT",
      type: "Blueprint",
    },
    {
      id: 3,
      image: cityBuildingImg,
      title: "Quantum Research Institute Kit",
      description: "Essential tools for unlocking advanced technologies.",
      price: "1000 AFT",
      type: "Resource",
    },
    {
      id: 4,
      image: massiveBattlesImg,
      title: "Black Hole Generator AICU",
      description: "A tactical advantage for dominating massive battles.",
      price: "1500 AFT",
      type: "Avatar",
    },
    {
      id: 5,
      image: allforgeTokenImg,
      title: "ALLFORGE Token Pack",
      description: "Essential tokens for trading, governance, and upgrades.",
      price: "500 AFT",
      type: "Token",
    },
    {
      id: 6,
      image: supplyBreakdownImg,
      title: "Aetheris Mining Rights",
      description: "Access to Aetheris' rich deposits of Auron and Plutonium.",
      price: "900 AFT",
      type: "Resource",
    },
    {
      id: 7,
      image: forgeSwarmThreatImg,
      title: "Relic Fragment of Asteroid Belt",
      description: "A rare relic fragment that boosts military capabilities.",
      price: "1100 AFT",
      type: "Relic",
    },
    {
      id: 8,
      image: cityBuildingImg,
      title: "Tactical Recon Facility Upgrade",
      description: "Improves scanning efficiency across the Asteroid Belt.",
      price: "700 AFT",
      type: "Module",
    },
  ];

  // List of categories to filter items by.
  // "All" is a special category to display all items at once.
  const categories = ["All", "NFT", "Blueprint", "Resource", "Avatar", "Token", "Relic", "Module"];

  // State to track which categories are currently active (visible).
  // Initially, all categories are active.
  const [activeCategories, setActiveCategories] = useState(
    categories.reduce((acc, cat) => ({ ...acc, [cat]: true }), {}) // Initialize each category as `true`.
  );

  /**
   * Toggles visibility for a category or all categories.
   * @param {string} category - The category to toggle (e.g., "NFT", "All").
   */
  const toggleCategory = (category) => {
    if (category === "All") {
      // Special case: "All" toggles all categories at once.
      const allActive = Object.values(activeCategories).every(Boolean); // Check if all categories are active.
      const newState = categories.reduce((acc, cat) => ({ ...acc, [cat]: !allActive }), {}); // Toggle all categories.
      setActiveCategories(newState); // Update state with the new toggle values.
    } else {
      // Regular case: Toggle a single category.
      setActiveCategories((prev) => {
        const isCurrentlyAllActive = Object.values(prev).every(Boolean); // Check if all categories are active.
        if (isCurrentlyAllActive) {
          // If all are active, isolate the clicked category.
          return categories.reduce((acc, cat) => ({ ...acc, [cat]: cat === category || cat === "All" }), {});
        }
        // Otherwise, toggle the clicked category and deactivate "All".
        return { ...prev, [category]: !prev[category], All: false };
      });
    }
  };

  // Filter items based on the active categories.
  // Only items matching an active category will be shown.
  const filteredItems = items.filter((item) => activeCategories[item.type]);

  return (
    <div className="relative py-16 bg-gray-900 bg-opacity-80 backdrop-blur-lg text-white min-h-screen">
      {/* Header Section */}
      <div className="container mx-auto px-6 text-center">
        {/* Title */}
        <h1 className="text-5xl font-orbitron font-extrabold mb-8 bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
          Marketplace
        </h1>
        {/* Subtitle */}
        <p className="text-lg text-gray-300 mb-6">
          Explore and trade NFTs, resources, and assets to gain a strategic edge in Alliance Forge!
        </p>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((category) => (
            <button
              key={category} // Key ensures efficient rendering for each button.
              onClick={() => toggleCategory(category)} // Toggles the category when clicked.
              className={`py-2 px-4 rounded-lg font-semibold transition-transform duration-300 ${
                activeCategories[category]
                  ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white" // Active button styling.
                  : "bg-gray-700 text-gray-300" // Inactive button styling.
              }`}
            >
              {category} {/* Button label corresponds to the category name. */}
            </button>
          ))}
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id} // Key ensures efficient rendering for each card.
              className="relative bg-gray-800 bg-opacity-80 rounded-2xl shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-cyan-500/50"
            >
              {/* Image */}
              <img
                src={item.image} // Item image.
                alt={item.title} // Accessibility: Alt text for the image.
                className="w-full h-40 object-cover rounded-lg mb-4" // Styles for the image.
              />
              {/* Title */}
              <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
                {item.title} {/* Item title displayed prominently. */}
              </h3>
              {/* Description */}
              <p className="text-sm text-gray-300 mb-4">{item.description}</p>
              {/* Price and Buy Button */}
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-cyan-400">{item.price}</span> {/* Price */}
                <button className="py-2 px-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:scale-110 transition-transform">
                  Buy Now {/* Button for buying the item. */}
                </button>
              </div>
              {/* Type Label */}
              <span className="absolute top-4 right-4 text-xs bg-gradient-to-r from-cyan-300 to-blue-500 text-white rounded-full px-2 py-1 shadow-md font-medium">
                {item.type} {/* Type label for the item. */}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
