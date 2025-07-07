import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { navItems } from "../constants";

const Navbar = () => {
  // State management for mobile drawer and active section
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  // Initialize active section based on current path
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

  // Toggle mobile drawer
  const toggleNavbar = () => setMobileDrawerOpen(!mobileDrawerOpen);
  
  // Navigation handler for internal and external routes
  const handleNavigation = (e, id) => {
    // Prevent default anchor behavior for internal navigation
    if (e) {
      e.preventDefault();
    }
    // If the link is external, just navigate to it
    if (navItems.find(item => item.id === id)?.external) {
      window.open(navItems.find(item => item.id === id).href, "_blank");
      return;
    }
    // For internal navigation, handle scrolling and path changes
    if (location.pathname === "/marketplace") {
      // If on marketplace, navigate to the section directly
      navigate(`/#${id}`);
    } else {
      // For other sections, scroll to the section
      navigate(`/#${id}`);
    }
    // Smooth scroll to the section after navigation
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }, 100);
    // Close mobile drawer after navigation
    setMobileDrawerOpen(false);
  };

  // Track scroll position for active section highlighting
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
          {navItems
            .filter((item) => !item.hidden)
            .map((item) => (
              <li key={item.id} className="flex-1 text-center">
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`transition-colors duration-300 text-lg ${
                      activeSection === item.id
                        ? "text-cyan-400 font-semibold"
                        : "text-gray-300 hover:text-cyan-400"
                    }`}
                  >
                    {item.label}
                  </a>
                ) : (
                  <a
                    href={item.id === "marketplace" ? "/marketplace" : `#${item.id}`}
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
          <button onClick={toggleNavbar} className="text-cyan-300 p-2 rounded-md hover:bg-gray-700">
            {mobileDrawerOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileDrawerOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-gray-900 bg-opacity-95 backdrop-blur-lg shadow-md rounded-b-md p-6">
          <ul className="space-y-6 flex flex-col items-center">
            {navItems
              .filter((item) => !item.hidden)
              .map((item) => (
                <li key={item.id}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block py-2 text-xl text-cyan-300 hover:underline"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <a
                      href={item.id === "marketplace" ? "/marketplace" : `#${item.id}`}
                      onClick={(e) => {
                        handleNavigation(e, item.id);
                        toggleNavbar();
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
  );
};

export default Navbar;
            {item.label}
          </a>
        ) : (
          <a
            href={item.id === "marketplace" ? "/marketplace" : `#${item.id}`}
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
          <button onClick={toggleNavbar} className="text-cyan-300 p-2 rounded-md hover:bg-gray-700">
            {mobileDrawerOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileDrawerOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-gray-900 bg-opacity-95 backdrop-blur-lg shadow-md rounded-b-md p-6">
          <ul className="space-y-6 flex flex-col items-center">
          {navItems
        .filter((item) => !item.hidden)
        .map((item) => (
        <li key={item.id}>
      {item.external ? (
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="block py-2 text-xl text-cyan-300 hover:underline"
        >
          {item.label}
        </a>
      ) : (
        <a
          href={item.id === "marketplace" ? "/marketplace" : `#${item.id}`}
          onClick={(e) => {
            handleNavigation(e, item.id);
            toggleNavbar();
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
  );
};

export default Navbar;

