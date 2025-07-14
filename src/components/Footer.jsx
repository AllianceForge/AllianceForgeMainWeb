import React from 'react';

const Footer = () => {
  return (
    <footer className="backdrop-blur-lg border-b border-neutral-700/80 text-white py-6 text-center mt-12 relative z-10">
      <div className="container mx-auto px-4">
        {/* Legal text */}
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Alliance Forge. All rights reserved.
        </p>

        {/* Legal links */}
        <div className="flex justify-center space-x-4 mt-2">
        <a href="/privacy-policy.html" className="text-gray-400 hover:text-white">
        Privacy Policy
        </a>
        <a href="/terms-of-use.html" className="text-gray-400 hover:text-white">
        Terms of Use
        </a>
        <a href="/support.html" className="text-gray-400 hover:text-white">
        Support
        </a>
        </div>

       {/* Social links: Discord → Telegram → X, centered */}
        <div className="flex justify-center space-x-4 mt-4">
          <a href=" https://discord.gg/ZJwgzRZczS"
  			target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            Discord
          </a>
          <a href="https://t.me/AllianceForgeHQ"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            Telegram
          </a>
          <a href="https://x.com/allianceforgehq?s=21&t=06BPUG8xO8XxyJn8COnJvg"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            X
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

  