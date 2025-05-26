import cityBuildingImg from "../assets/features-citybuilding.png";
import massiveBattlesImg from "../assets/features-massivebattle.png";
import forgeSwarmImg from "../assets/features-forgeswarmthreat.png";
import nftOwnershipImg from "../assets/features-nftownership.png";
import allforgeTokenImg from "../assets/features-allforgetoken.png";
import districtGovernanceImg from "../assets/features-districtgovernance.png";
import AFVideoFeatureCityBuilding from "../assets/AFVideo-Featurecitybuilding.mp4";
import AFVideoFeatureMassiveBattlefield from "../assets/AFVideo-FeatureMassiveBattlefield.mp4";
import AFVideoFeatureEnemySwarm from "../assets/AFVideo-FeatureEnemySwarm.mp4";
import AFVideo1 from "../assets/AFVideo1Final.mp4";
import { useState } from "react";

const FeatureSection = () => {
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const features = [
    {
      title: "City Building",
      description:
        "Construct cities with structures like Fleet Command Centers, Quantum Scanner Buildings, and Plutonium Mines to expand your empire.",
      image: cityBuildingImg,
      video: AFVideoFeatureCityBuilding,
    },
    {
      title: "Massive Battles",
      description:
        "Command up to 7 fleets with VIP status, utilizing short, medium, and long-range units for strategic dominance.",
      image: massiveBattlesImg,
      video: AFVideoFeatureMassiveBattlefield,
    },
    {
      title: "Forge Swarm Threats",
      description:
        "Engage in PvE battles against the AI-driven Forge Swarm, facing escalating challenges and rewards.",
      image: forgeSwarmImg,
      video: AFVideoFeatureEnemySwarm,
    },
    {
      title: "NFT Ownership",
      description:
        "Own and trade lands, relics, and avatars as NFTs, each with unique buffs and strategic advantages.",
      image: nftOwnershipImg,
    },
    {
      title: "ALLFORGE Token",
      description:
        "Use the in-game cryptocurrency for trading, upgrades, and governance, creating a dynamic economy.",
      image: allforgeTokenImg,
    },
    {
      title: "District Governance",
      description:
        "Elect Overseers and High Commanders to manage district-wide strategies and server events.",
      image: districtGovernanceImg,
    },
  ];

  return (
    <section
      id="feature"
      className="py-12 bg-gray-900 bg-opacity-90 backdrop-blur-xl rounded-xl shadow-lg text-white"
    >
      <div className="container mx-auto px-6 text-center">
        {/* Section Header */}
        <h2 className="text-4xl font-extrabold mb-8 bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
          Key Features
        </h2>

        {/* Full-Width Video (Upper Part Only) */}
        <div className="relative w-full mb-8 h-72 md:h-96 lg:h-[38rem] overflow-hidden rounded-xl shadow-lg">
          <video
            src={AFVideo1}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}
              className="relative bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-cyan-500/50 transition-transform transform hover:scale-105 flex flex-col justify-end mx-auto w-full h-72"
            >
              {/* Feature Video/Image */}
              <div className="absolute inset-0 w-full h-full">
                {hoveredFeature === index && feature.video ? (
                  <video
                    src={feature.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover rounded-2xl"
                  />
                ) : (
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover rounded-2xl opacity-75"
                  />
                )}
              </div>
              {/* Feature Text */}
              <div className="relative z-10 p-4 text-center bg-gradient-to-t from-black to-transparent">
                <h3 className="text-lg font-semibold bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-300">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
