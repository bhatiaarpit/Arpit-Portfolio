import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleLinkClick = (label, to) => {
    setActiveLink(label);
    closeMenu();

    if (to && to.startsWith("#")) {
      // If already on home, just scroll
      if (location.pathname === "/") {
        const el = document.querySelector(to);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // Navigate to home, then scroll after navigation
        navigate("/", { state: { scrollTo: to } });
      }
    } else if (to && to.startsWith("/")) {
      navigate(to);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    // Clean up on unmount
    return () => document.body.classList.remove('overflow-hidden');
  }, [isOpen]);

  // Define navigation links array to avoid duplication
  const navigationLinks = [
    { to: "/", label: "Home" },
    { to: "#about-section", label: "About Me" },
    { to: "/projects", label: "My Projects" },
    { to: "/insights", label: "Insights" },
    { to: "/more", label: "Explore More" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? 'bg-black/90 backdrop-blur-xl border-b border-gray-800/60 shadow-2xl'
        : ''
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 group cursor-pointer">
            <div className="relative overflow-hidden rounded-xl p-2 transition-all duration-300 hover:bg-white/5">
              <img
                src="/ab2.png"
                alt="Arpit Bhatia Logo"
                className="h-12 w-auto transition-all duration-300 group-hover:scale-110 filter drop-shadow-lg"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'block';
                }}
              />
              <div className="hidden text-white text-2xl font-black relative">
                <span className="relative z-10 bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
                  AB
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-1 bg-gray-900/50 backdrop-blur-xl rounded-full px-4 py-1.5 border border-gray-700/60 shadow-2xl hover:bg-gray-900/60 transition-all duration-300">
              {navigationLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleLinkClick(link.label, link.to)}
                  className={`relative px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 group ${activeLink === link.label
                      ? "bg-gradient-to-r from-blue-500 to-sky-600 text-white shadow-lg scale-105"
                      : "text-gray-300 hover:text-white hover:bg-gray-700/60"
                    }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  {activeLink === link.label && (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-sky-600 rounded-full opacity-20 animate-pulse"></div>
                      <div className="absolute inset-0 bg-white/10 rounded-full"></div>
                    </>
                  )}
                  {activeLink !== link.label && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center">
            <button
              onClick={() => handleLinkClick("Book a Call")}
              className="group relative px-6 py-3 bg-gradient-to-r from-sky-500 to-cyan-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 shadow-lg"
            >
              <span className="relative z-10 text-sm flex items-center gap-2">
                Book a Call
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-sky-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="relative p-3 text-gray-300 hover:text-white focus:outline-none transition-all duration-200 rounded-xl hover:bg-gray-800/60 backdrop-blur-sm"
              aria-label="Toggle menu"
            >
              <div className="relative z-10 transition-transform duration-300">
                {isOpen ? (
                  <X size={24} className="rotate-90 transition-transform duration-300" />
                ) : (
                  <Menu size={24} className="group-hover:scale-110 transition-transform duration-300" />
                )}
              </div>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden fixed inset-0 z-[999] transition-all duration-500 ease-in-out ${isOpen ? "visible opacity-100" : "invisible opacity-0"
          }`}
      >
        <div
          className={`absolute inset-0 bg-black backdrop-blur-xl transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-0"
            }`}
          onClick={closeMenu}
        ></div>

        <div className={`bg-[#000] relative z-50 min-h-screen flex flex-col justify-center items-center transform transition-all duration-500 ${isOpen ? "translate-y-0 scale-100" : "translate-y-10 scale-95"
          }`}>
          <button
            className="absolute top-8 right-8 p-3 text-gray-300 hover:text-white focus:outline-none bg-gray-800/60 rounded-full hover:bg-gray-700/60 transition-all duration-200 backdrop-blur-sm"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>

          <div className="absolute top-8 left-8">
            <img
              src="/ab2.png"
              alt="Arpit Bhatia Logo"
              className="h-12 w-auto filter drop-shadow-lg"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextElementSibling.style.display = 'block';
              }}
            />
            <div className="hidden text-white text-2xl font-black">
              <span className="bg-gradient-to-r from-blue-400 to-sky-500 bg-clip-text text-transparent">
                AB
              </span>
            </div>
          </div>

          <nav className="flex flex-col items-center space-y-8">
            {navigationLinks.map((link, index) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.label, link.to)}
                className={`relative text-3xl font-bold transition-all duration-500 transform hover:scale-110 ${activeLink === link.label
                    ? "bg-gradient-to-r from-blue-400 to-sky-500 bg-clip-text"
                    : "text-gray-300 hover:text-white"
                  }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="relative z-10">{link.label}</span>
                {activeLink === link.label && (
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl blur-sm animate-pulse"></div>
                )}
              </button>
            ))}

            <button
              onClick={() => handleLinkClick("Book a Call")}
              className="mt-12 px-10 py-4 bg-gradient-to-r from-sky-500 to-cyan-600 text-white text-xl font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-2xl flex items-center gap-3"
            >
              Book a Call
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            </button>
          </nav>

          <div className="absolute top-1/4 left-10 w-32 h-32 bg-blue-500/20 rounded-full filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-sky-500/20 rounded-full filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
          <div className="absolute bottom-1/3 right-1/3 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping delay-700"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;