import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  // Toggle mobile drawer
  const toggleNavbar = () => setMobileDrawerOpen(!mobileDrawerOpen);

  // Navigation handler for internal and external routes
  const handleNavigation = (e, id) => {
    e.preventDefault();
    if (id === "marketplace") {
      navigate("/marketplace");
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 50);
    } else {
      if (location.pathname !== "/") {
        navigate(`/#${id}`);
      }
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) section.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
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
        <ul className="hidden lg:flex flex-grow justify-center items-center space-x-8">
          {navItems
            .filter((item) => !item.hidden) // Hide Features, Roadmap
            .map((item) => (
              <li key={item.id}>
                <a
                  href={item.id === "marketplace" ? "/marketplace" : `#${item.id}`}
                  onClick={(e) => handleNavigation(e, item.id)}
                  className={`transition-colors duration-300 text-lg ${
                    activeSection === item.id ? "text-cyan-400 font-semibold" : "text-gray-300 hover:text-cyan-400"
                  }`}
                >
                  {item.label}
                </a>
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
              .filter((item) => !item.hidden) // Hide Features, Roadmap
              .map((item) => (
                <li key={item.id}>
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
                </li>
              ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;