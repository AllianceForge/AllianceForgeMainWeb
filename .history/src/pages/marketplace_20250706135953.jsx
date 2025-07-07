import "../styles/marketplace.css"; // Assuming you have a CSS file for styles
import "../styles/animations.css"; // Assuming you have a CSS file for animations

// Marketplace component
const Marketplace = () => {
  return (
    <section className="min-h-screen bg-[#0E1A29] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-cyan-300 tracking-wide mb-6">
          Marketplace
        </h1>
        <p className="text-lg text-gray-400 mb-12">
          Coming soon. Prepare to forge your destiny.
        </p>

        {/* Placeholder grid for future items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-[#101a2c] rounded-xl border border-cyan-600/30 shadow-lg p-6 transition transform hover:scale-105 hover:shadow-cyan-500/20"
            >
              <div className="h-48 bg-gradient-to-br from-[#0e1a29] to-[#1e3a5f] rounded-md mb-4 flex items-center justify-center text-gray-500 text-sm tracking-wider">
                Item Preview #{item}
              </div>
              <h2 className="text-xl font-semibold text-cyan-400 mb-2">
                Item Name {item}
              </h2>
              <p className="text-sm text-gray-400">
                Short description or lore snippet about the item.
              </p>
              <button className="mt-4 w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 rounded-md transition">
                Buy
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Marketplace;
