/ src/components/Navbar.jsx
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import logo from "../assets/logo.png";
// Import navItems from constants, but ensure constants are updated as per instructions below
import { navItems as originalNavItems } from "../constants"; 

// Define the new ordered navItems directly here for clarity,
// but remember to update your constants file as well.
const navItems = [
  { id: "home", label: "Home", href: "#home", external: false, hidden: false, isModal: false },
  { id: "whitepaper", label: "Whitepaper", href: "#", external: false, hidden: false, isModal: true }, // Opens WhitepaperModal
  { id: "forgenomics", label: "Forgenomics", href: "#", external: false, hidden: false, isModal: true }, // Opens ForgenomicsModal
  { id: "marketplace", label: "Marketplace", href: "/marketplace", external: false, hidden: false, isModal: false },
  { id: "faq", label: "FAQ", href: "#", external: false, hidden: false, isModal: true }, // Opens FAQModal
];


const Navbar = ({ openForgenomicsModal, openFaqModal, openWhitepaperModal }) => { // Accept openWhitepaperModal
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setActiveSection("home");
    } else if (location.pathname === "/marketplace") {
      setActiveSection("marketplace");
    } else {
      const sectionId = location.hash.replace("#", "");
      setActiveSection(sectionId || "home");
    }
  }, [location.pathname, location.hash]);

  const toggleNavbar = () => setMobileDrawerOpen(!mobileDrawerOpen);

  const handleNavigation = (e, id) => {
    if (e) e.preventDefault(); // Prevent default link behavior for hash links and buttons

    // Handle Marketplace navigation
    if (id === "marketplace") {
      navigate("/marketplace");
      setMobileDrawerOpen(false);
      return;
    }

    const navItem = navItems.find((item) => item.id === id);

    // Handle external links
    if (navItem?.external) {
      window.open(navItem.href, "_blank");
      setMobileDrawerOpen(false); // Close drawer for external links
      return;
    }

    // Handle modal items
    if (navItem?.isModal) {
        if (id === "forgenomics") {
            openForgenomicsModal();
        } else if (id === "faq") {
            openFaqModal();
        } else if (id === "whitepaper") { // Call openWhitepaperModal for whitepaper
            openWhitepaperModal();
        }
        setMobileDrawerOpen(false); // Close mobile drawer after opening modal
        return; // Stop further navigation
    }

    // Handle internal hash links (e.g., Home if it's not a modal)
    navigate(`/#${id}`);
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }, 100);
    setMobileDrawerOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "";
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom > 150) {
          currentSection = section.id;
        }
      });
      if (window.scrollY === 0) currentSection = "home";
      if (location.pathname === "/marketplace") currentSection = "marketplace";
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  return (
    <>
      <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg bg-gray-900/60 border-b border-cyan-800/50">
        <div className="container px-4 mx-auto flex items-center justify-between relative">
          {/* Logo & Title */}
          <div className="flex items-center space-x-3 flex-shrink-0">
            <img className="h-10 w-10" src={logo} alt="Alliance Forge Logo" />
            <span className="text-2xl font-orbitron font-bold bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent tracking-wide">
              ALLIANCE FORGE
            </span>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex flex-grow justify-between w-full space-x-4">
            {/* Filter navItems to use the new order and properties */}
            {navItems.filter((item) => !item.hidden).map((item) => (
              <li key={item.id} className="flex-1 text-center">
                {/* Conditionally render a button for modal items, and an anchor for others */}
                {item.isModal ? (
                  <button
                    onClick={(e) => handleNavigation(e, item.id)}
                    className={`transition-colors duration-300 text-lg bg-transparent border-none cursor-pointer ${
                      activeSection === item.id
                        ? "text-cyan-400 font-semibold"
                        : "text-gray-300 hover:text-cyan-400"
                    }`}
                  >
                    {item.label}
                  </button>
                ) : (
                  <a
                    href={item.href}
                    target={item.external ? "_blank" : "_self"}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    onClick={(e) => handleNavigation(e, item.id)}
                    className={`transition-colors duration-300 text-lg ${
                      activeSection === item.id
                        ? "text-cyan-400 font-semibold"
                        : "text-gray-300 hover:text-cyan-400"
                    }`}
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button
              onClick={toggleNavbar}
              className="text-cyan-300 p-2 rounded-md hover:bg-gray-700"
            >
              {mobileDrawerOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileDrawerOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-gray-900 bg-opacity-95 backdrop-blur-lg shadow-md rounded-b-md p-6">
            <ul className="space-y-6 flex flex-col items-center">
              {navItems.filter((item) => !item.hidden).map((item) => (
                <li key={item.id}>
                  {item.isModal ? (
                    <button
                      onClick={(e) => {
                        handleNavigation(e, item.id);
                        toggleNavbar(); // Close drawer after navigation
                      }}
                      className="block py-2 text-xl text-cyan-300 hover:underline bg-transparent border-none cursor-pointer"
                    >
                      {item.label}
                    </button>
                  ) : (
                    <a
                      href={item.href}
                      target={item.external ? "_blank" : "_self"}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      onClick={(e) => {
                        handleNavigation(e, item.id);
                        toggleNavbar(); // Close drawer after navigation
                      }}
                      className="block py-2 text-xl transition-colors duration-300"
                      style={{
                        color: activeSection === item.id ? "#00bcd4" : "#e0f7fa",
                        fontWeight: activeSection === item.id ? "bold" : "normal",
                      }}
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

// Define PropTypes for validating props
Navbar.propTypes = {
  openForgenomicsModal: PropTypes.func.isRequired,
  openFaqModal: PropTypes.func.isRequired,
  openWhitepaperModal: PropTypes.func.isRequired, // Add propType for openWhitepaperModal
};

export default Navbar;
