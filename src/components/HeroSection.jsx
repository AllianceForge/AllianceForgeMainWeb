import videoSource from "../assets/AFVideo2.mp4";
import logo from "../assets/logo.png";

const HeroSection = () => {
  return (
    <div className="relative py-16 bg-gray-900 bg-opacity-90 backdrop-blur-lg rounded-xl shadow-lg">
      <div className="container mx-auto px-6 flex flex-col md:grid md:grid-cols-2 items-center gap-12">
        {/* Hero Video */}
        <div className="order-1 md:order-2 w-full flex justify-center">
          <div className="rounded-2xl shadow-lg overflow-hidden w-full max-w-xl transform transition-transform duration-500 hover:scale-105">
            <video
              src={videoSource}
              autoPlay
              loop
              muted
              playsInline
              className="rounded-2xl object-cover w-full h-auto"
            />
          </div>
        </div>

        {/* Hero Text */}
        <div className="text-center md:text-left order-2 md:order-1">
          {/* Centered Logo */}
          <div className="flex justify-self-center md:justify-start mb-4">
            <img
              src={logo}
              alt="Alliance Forge Logo"
              className="w-24 h-24 md:w-32 md:h-32 object-contain"
            />
          </div>

          <h1 className="text-6xl sm:text-5xl lg:text-8xl font-extrabold mb-6 leading-tight font-orbitron">
            <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
              ALLIANCE
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
              FORGE
            </span>
          </h1>

          <p className="text-xl text-gray-300 mb-10">
            BUILD. BATTLE. CONQUER THE FUTURE.
          </p>
          <div className="flex justify-center md:justify-start">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSd_mhQA4t8s2vf8rsd211zrwRGX9SZ8BD5QIwZRTAPeWZOx2g/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="py-4 px-8 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl shadow-lg text-lg font-semibold transform hover:scale-110 transition-transform duration-300 backdrop-blur-md"
            >
              JOIN THE WAITLIST!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
