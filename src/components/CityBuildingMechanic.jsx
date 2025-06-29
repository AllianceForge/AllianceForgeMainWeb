import React from "react";

const CityBuildingMechanic = () => {
  return (
    <div className="p-6 bg-gray-900 text-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">City Building Mechanics</h2>

      {/* Key Structures Section */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold flex items-center">
          🏰 Town Hall  
        </h3>
        <p className="text-sm">The central hub for resource management and governance.</p>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold flex items-center">
          ⚒️ Workshop  
        </h3>
        <p className="text-sm">Enhance production efficiency and craft advanced tools.</p>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold flex items-center">
          🌾 Farmland  
        </h3>
        <p className="text-sm">Provides food and supports population growth.</p>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold flex items-center">
          🛡️ Barracks  
        </h3>
        <p className="text-sm">Trains units for defense and strategic operations.</p>
      </div>

      {/* City Development Overview */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold">City Development Overview</h3>
        <p className="text-sm">
          Players can expand their city by constructing key structures, upgrading buildings, and managing resources efficiently.
        </p>
      </div>
    </div>
  );
};

export default CityBuildingMechanic;
