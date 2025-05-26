// src/components/Navbar.jsx

import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
// If Web3Modal and ethers are not directly used in Navbar, you can remove these imports for cleaner code.
// import Web3Modal from "web3modal";
// import { ethers } from "ethers";
import logo from "../assets/logo.png";
import { navItems } from "../constants"; // Assuming navItems contains your navigation links
import WalletConnectButton from "./WalletConnectButton"; // Ensure this is imported

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  // Toggles the mobile drawer's open/close state
  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  // Handles navigation for both internal (hash links) and external (marketplace) routes
  const handleNavigation = (e, id) => {
    e.preventDefault();

    if (id === "marketplace") {
      navigate("/marketplace");
      // Scroll to top after navigation for a clean start on the new page
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 50);
    } else {
      // If not on the home page, navigate back to home with hash
      if (location.pathname !== "/") {
        navigate(`/#${id}`);
      }

      // Scroll to the specific section on the page
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }

    // Close the mobile drawer after navigation
    setMobileDrawerOpen(false);
  };

  // Effect to handle active section highlighting based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        // Determine the current section based on its position in the viewport
        if (rect.top <= 150 && rect.bottom > 150) {
          currentSection = section.id;
        }
      });

      // Special handling for the very top of the page
      if (window.scrollY === 0) {
        currentSection = "home";
      }

      // Special handling for the marketplace page
      if (location.pathname === "/marketplace") {
        currentSection = "marketplace";
      }

      setActiveSection(currentSection);
    };

    // Add and clean up scroll event listener
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]); // Re-run effect if pathname changes

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg bg-gray-900/60 border-b border-cyan-800/50">
      <div className="container px-4 mx-auto flex items-center justify-between relative">
        {/* Logo and Title Section */}
        <div className="flex items-center space-x-3 flex-shrink-0"> {/* flex-shrink-0 prevents logo/title from shrinking */}
          <img className="h-10 w-10" src={logo} alt="Alliance Forge Logo" />
          <span className="text-2xl font-orbitron font-bold bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent tracking-wide">
            ALLIANCE FORGE
          </span>
        </div>

        {/* Desktop Navigation Menu (Links) */}
        {/* Using flex-grow and justify-center to center the links between logo and buttons */}
        <ul className="hidden lg:flex flex-grow justify-center items-center space-x-8"> {/* items-center for vertical alignment */}
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => handleNavigation(e, item.id)}
                className={`transition-colors duration-300 text-lg ${ // Increased text size for desktop
                  activeSection === item.id
                    ? "text-cyan-400 font-semibold"
                    : "text-gray-300 hover:text-cyan-400"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Connect Wallet Button and Mobile Menu Button Group */}
        <div className="flex items-center space-x-4"> {/* Groups these two elements together */}
          <WalletConnectButton /> {/* The Wallet Connect Button component */}

          {/* Mobile Menu Toggle Button (only visible on small screens) */}
          <div className="lg:hidden">
            <button onClick={toggleNavbar} className="text-cyan-300 p-2 rounded-md hover:bg-gray-700"> {/* Added padding and hover effect */}
              {mobileDrawerOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (Overlay Menu) */}
      {mobileDrawerOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-gray-900 bg-opacity-95 backdrop-blur-lg shadow-md rounded-b-md p-6"> {/* Adjusted opacity, blur, and padding */}
          <ul className="space-y-6 flex flex-col items-center"> {/* Centers elements in the mobile drawer */}
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    handleNavigation(e, item.id);
                    toggleNavbar(); // Close drawer after navigating
                  }}
                  className={`block py-2 text-xl transition-colors duration-300 ${ // Larger text for mobile readability
                    activeSection === item.id
                      ? "text-cyan-400 font-semibold"
                      : "text-gray-300 hover:text-cyan-400"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
            {/* Optional: Include the Wallet Connect Button in the mobile menu */}
            <li className="mt-4">
              <WalletConnectButton />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;