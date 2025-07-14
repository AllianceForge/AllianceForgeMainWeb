import cryptoLogo from "/assets/crypto-logo.jpeg";

const Marketplace = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6 py-12">
      {/* Top: Crypto.com NFT Logo */}
      <div className="text-center space-y-4 mt-10">
        {/* Crypto.com Logo */}
        <img
          src={cryptoLogo}
          alt="Crypto.com Lion Logo"
          className="h-24 md:h-28 mx-auto object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-transform duration-300 hover:scale-105"
        />

        {/* Link to Crypto.com NFT Marketplace */}
        <a
          href="https://crypto.com/nft"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl md:text-3xl font-orbitron font-semibold text-white hover:text-cyan-300 transition-colors duration-300"
        >
          Crypto.com NFT Marketplace
        </a>

        {/* Optional tagline */}
        <p className="text-base text-cyan-300 font-light tracking-wide drop-shadow-[0_0_4px_rgba(0,255,255,0.3)]">
           Alliance Forge NFTs coming soon!
        </p>
      </div>
    </div>
  );
};

export default Marketplace;
