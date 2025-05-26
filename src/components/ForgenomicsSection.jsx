import React from "react";
import tokenUtilityImage from "../assets/forgenomics-allforgetoken.png";
import allianceBreakdownImage from "../assets/forgenomics-alliancebreakdown.png";
import supplyBreakdownImage from "../assets/forgenomics-supplybreakdown.png";
import burnMechanicsImage from "../assets/forgenomics-burnmechanics.png";
import stakingMechanicsImage from "../assets/forgenomics-stakingmechanics.png";
import allianceForgeLogoImage from "../assets/logo.png";

const ForgenomicsSection = () => {
  const features = [
    {
      title: "ALLFORGE Token Utility",
      description:
        "The ALLFORGE token powers the in-game economy, enabling upgrades, governance, and marketplace transactions.",
      image: tokenUtilityImage,
    },
    {
      title: "Alliance Breakdown",
      description:
        "Collaborate with your district and alliances to gain strategic advantages. Leaderboards and district upgrades enhance teamwork.",
      image: allianceBreakdownImage,
    },
    {
      title: "Supply Breakdown",
      description:
        "Monitor resource production and distribution, including Forgeite, Auron, and Plutonium, for crafting and upgrades.",
      image: supplyBreakdownImage,
    },
    {
      title: "Burn Mechanics",
      description:
        "A portion of ALLFORGE tokens used in transactions is burned, stabilizing the token’s value and encouraging strategic spending.",
      image: burnMechanicsImage,
    },
    {
      title: "Staking Mechanics",
      description:
        "Stake ALLFORGE tokens to earn rewards and contribute to district upgrades. Higher stakes unlock exclusive perks.",
      image: stakingMechanicsImage,
    },
  ];

  return (
    <section
      id="forgenomics"
      className="py-16 bg-gray-900 bg-opacity-90 backdrop-blur-lg rounded-xl shadow-lg text-white"
    >
      <div className="container mx-auto px-6 text-center">
        {/* Section Header with Gradient */}
        <h2 className="text-4xl font-bold mb-10 bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
          Forgenomics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 bg-opacity-80 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-cyan-500/50 transition-transform transform hover:scale-105"
            >
              {/* Feature Icon with Rounded Corners */}
              <div className="w-24 h-24 mx-auto mb-4">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-contain rounded-2xl shadow-md"
                />
              </div>
              {/* Gradient Title */}
              <h3 className="text-lg font-semibold mb-2 bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
        {/* Alliance Forge Logo */}
        <div className="mt-10 flex justify-center">
          <img
            src={allianceForgeLogoImage}
            alt="Alliance Forge Logo"
            className="w-40 h-40 object-contain rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default ForgenomicsSection;
