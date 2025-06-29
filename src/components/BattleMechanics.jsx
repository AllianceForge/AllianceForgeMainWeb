import React from "react";

const BattleMechanics = () => {
  return (
    <div className="p-6 bg-gray-900 text-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Battle Mechanics Overview</h2>

      {/* PvP and PvE Sections */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold">PvP (Player vs. Player)</h3>
        <p className="text-sm">
          Engage in competitive battles against other players, leveraging unit skills and tactical strategies.
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold">PvE (Player vs. Environment)</h3>
        <p className="text-sm">
          Face AI-controlled enemies and progress through increasingly challenging missions to earn rewards.
        </p>
      </div>

      {/* Unit Types Section */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold">Unit Types</h3>
        <ul className="list-disc pl-4">
          <li>Warriors – High durability, strong melee attacks.</li>
          <li>Rangers – Long-range specialists with precision shots.</li>
          <li>Mages – Magic-based attacks with high burst damage.</li>
        </ul>
      </div>

      {/* AICU Section */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold">AICU (AI Combat Units)</h3>
        <p className="text-sm">
          Advanced AI-powered units designed to assist in battle. They adapt based on combat scenarios.
        </p>
      </div>
    </div>
  );
};

export default BattleMechanics;
