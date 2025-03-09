import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="relative bg-gray-900 border-b border-gray-700 text-gray-400 font-mono">
      <div className="flex justify-between">
        {/* Left - Name + Nav Links Container */}
        <div className="flex overflow-hidden">
          {/* Name Section */}
          <div className="text-green-400 text-lg pl-4 pr-10 py-3 md:border-r border-gray-700">
            arpit-bhatia
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex">
            {[
              { to: "/", label: "_hello" },
              { to: "/about", label: "_about-me" },
              { to: "/projects", label: "_projects" },
            ].map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `pl-4 pr-6 py-3 border-r border-gray-700 ${
                    isActive
                      ? "text-gray-300 bg-gray-800"
                      : "hover:bg-gray-800 hover:text-gray-300"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>

        {/* Right - Contact Link (Visible on Desktop) */}
        <div className="hidden md:block border-l border-gray-700 py-3">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${
                isActive ? "text-green-400 bg-gray-800" : "hover:bg-gray-800"
              }`
            }
          >
            _contact-me
          </NavLink>
        </div>

        {/* Hamburger Button (Mobile) */}
        <button
          className="md:hidden text-gray-400 focus:outline-none mr-[1rem]"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div
        className={`md:hidden fixed inset-0 z-10 bg-gray-900 bg-opacity-95 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-end p-4">
          <button
            className="text-gray-400 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        <nav className="flex flex-col items-center space-y-6 mt-10">
          {[
            { to: "/", label: "_hello" },
            { to: "/about", label: "_about-me" },
            { to: "/projects", label: "_projects" },
            { to: "/contact", label: "_contact-me" },
          ].map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className="text-gray-300 hover:text-gray-200 text-xl"
              onClick={closeMenu}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
