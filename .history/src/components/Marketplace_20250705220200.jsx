const Marketplace = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6 py-12">

      {/* Top: Crypto.com NFT Logo */}
      <div className="mt-4 mb-4">
        <img
          src="/assets/Crypto.Com-Logo-500x281.jpg"
          alt="Crypto.com NFT"
          className="h-20 md:h-28 mx-auto object-contain drop-shadow-[0_0_12px_rgba(255,255,255,0.3)] transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Middle: Alliance Forge Emblem */}
      <div className="mb-4">
        <img
          src="/assets/alliance-forge-logo.png" // Replace with your actual file name
          alt="Alliance Forge"
          className="h-16 md:h-20 mx-auto object-contain drop-shadow-[0_0_12px_rgba(0,255,255,0.25)] transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Page Title */}
      <h1 className="text-4xl font-orbitron font-bold bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent mb-6 text-center">
        Marketplace
      </h1>

      {/* Description */}
      <p className="text-lg text-gray-300 max-w-2xl text-center mb-8">
        Welcome to the Alliance Forge Marketplace. Explore and trade assets on our decentralized platform. We’re opening soon with innovative digital solutions.
      </p>

      {/* Buttons */}
      <div className="flex space-x-4">
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300">
          Explore Assets
        </button>
        <button className="bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors duration-300">
          Learn More
        </button>
      </div>

      {/* Footer */}
      <div className="mt-10 text-sm text-gray-400 text-center">
        Powered by decentralized technology for secure and transparent trading.
      </div>
    </div>
  );
};

export default Marketplace;
