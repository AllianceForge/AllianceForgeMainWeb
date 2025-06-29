import React from "react";

const StrategyEventsFeature = () => {
  return (
    <div className="p-6 bg-gray-900 text-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Strategy & Events Features</h2>
      
      {/* Strategic Map Section */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold">🗺️ Strategic Map</h3>
        <p className="text-sm">
          Explore a dynamic world where players strategize territorial control, resource gathering, and military movements.
        </p>
      </div>

      {/* Land Economy & Renting Section */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold">🌍 Land Economy & Renting</h3>
        <p className="text-sm">
          Buy, lease, and trade land to maximize economic growth. Owners can rent land to other players for passive income.
        </p>
      </div>

      {/* Competitive PvP/PvE Events & Esports Focus */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold">⚔️ Competitive PvP/PvE Events & Esports</h3>
        <p className="text-sm">
          Engage in large-scale tournaments, real-time battles, and esports-focused competitions with rewards for top players.
        </p>
      </div>
    </div>
  );
};

export default StrategyEventsFeature;
