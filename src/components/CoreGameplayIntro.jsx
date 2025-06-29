import React from "react";

const CoreGameplayIntro = () => {
  return (
    <div className="p-6 bg-gray-900 text-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Core Gameplay Overview</h2>
      
      <p className="text-lg mb-6">
        Explore the foundational mechanics that define the gameplay experience, from combat to city building and strategic alliances.
      </p>

      {/* Key Mechanics Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 bg-gray-800 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">⚔️ Battle Mechanics</h3>
          <p className="text-sm">Engage in PvP and PvE combat with specialized units and AI-powered strategies.</p>
        </div>

        <div className="p-4 bg-gray-800 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">🏙️ City Building</h3>
          <p className="text-sm">Develop key structures, manage resources, and optimize your city's growth.</p>
        </div>

        <div className="p-4 bg-gray-800 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">🛡️ Alliance Governance</h3>
          <p className="text-sm">Join forces, establish leadership roles, and influence strategic decisions.</p>
        </div>

        <div className="p-4 bg-gray-800 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">🚀 Strategic Expansion</h3>
          <p className="text-sm">Unlock new territories, discover hidden resources, and shape your empire.</p>
        </div>
      </div>
    </div>
  );
};

export default CoreGameplayIntro;
