import React from 'react';

const Marketplace = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-4xl font-orbitron font-bold bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent mb-6 text-center">
        Marketplace
      </h1>
      <p className="text-lg text-gray-300 max-w-2xl text-center mb-8">
        Welcome to the Alliance Forge Marketplace. Explore and trade assets in our decentralized platform. We will soon open our doors to offer innovative digital solutions. (Coming Soon)
      </p>
      <div className="flex space-x-4">
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300">
          Explore Assets
        </button>
        <button className="bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors duration-300">
          Learn More
        </button>
      </div>
      <div className="mt-8 text-sm text-gray-400">
        Powered by decentralized technology for secure and transparent trading.
      </div>
    </div>
  );
};

export default Marketplace;