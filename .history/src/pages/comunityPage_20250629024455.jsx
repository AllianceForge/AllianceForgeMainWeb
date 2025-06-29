import React from "react";

const CommunityPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">Community Hub</h1>

      {/* Introduction Section */}
      <section className="mb-8 text-center">
        <p className="text-lg text-gray-300">
          Join the conversation, connect with other players, and be part of our growing community!
        </p>
      </section>

      {/* Key Community Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-2">💬 Forums & Discussions</h2>
          <p className="text-sm text-gray-400">Engage in game-related discussions and share strategies.</p>
        </div>

        <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-2">🎥 Social & Media</h2>
          <p className="text-sm text-gray-400">Follow us on TikTok, X, and Discord for the latest updates.</p>
        </div>

        <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-2">🏆 Events & Tournaments</h2>
          <p className="text-sm text-gray-400">Participate in competitions and showcase your skills.</p>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
