import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from 'react-router-dom';
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navigationLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Me" },
  { to: "/my-work", label: "My Work" },
];

const menuItems = [
  { label: "Home", to: "/" },
  { label: "About Me", to: "/about" },
  { label: "My Work", to: "/my-work" },
];

const socialItems = [
  { label: "GitHub", to: "https://github.com/bhatiaarpit" },
  { label: "LinkedIn", to: "https://www.linkedin.com/in/bhatiaarpit/" },
  { label: "Twitter", to: "https://x.com/arpit_bhatia_" },
  { label: "Instagram", to: "https://instagram.com/focuscrafter" },
];

const Logo = () => (
  <div className="relative overflow-hidden rounded-xl p-2">
    <img
      src="/ab2.png"
      alt="Arpit Bhatia Logo"
      className="h-12 w-auto drop-shadow-lg"
      onError={(e) => {
        e.target.style.display = "none";
        e.target.nextElementSibling.style.display = "block";
      }}
    />
    <div className="hidden text-white text-2xl font-black">
      <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
        AB
      </span>
    </div>
  </div>
);

// Injected once on first mount — keeps scroll-lock off the render path entirely
let scrollLockInjected = false;
function ensureScrollLockStyle() {
  if (scrollLockInjected) return;
  const style = document.createElement("style");
  style.textContent = `
    html.scroll-locked { overflow: hidden !important; }
    html.scroll-locked body {
      position: fixed;
      top: var(--scroll-lock-top, 0);
      width: 100%;
      overflow: hidden;
    }
  `;
  document.head.appendChild(style);
  scrollLockInjected = true;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [mouseX, setMouseX] = useState(50);
  const navContainerRef = useRef(null);
  const scrollYRef = useRef(0);
  const navigate = useNavigate();

  // Inject scroll-lock CSS once, outside of any effect timing
  ensureScrollLockStyle();

  const handleLinkClick = useCallback(
    (label, to) => {
      setActiveLink(label);
      setIsOpen(false);
      if (to) navigate(to);
    },
    [navigate]
  );

  // --- Scroll detection (passive, no layout reads in handler) ---
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // --- Scroll lock toggle ---
  useEffect(() => {
    const el = document.documentElement;
    if (isOpen) {
      scrollYRef.current = window.scrollY;
      el.style.setProperty("--scroll-lock-top", `-${scrollYRef.current}px`);
      el.classList.add("scroll-locked");
    } else {
      el.classList.remove("scroll-locked");
      el.style.removeProperty("--scroll-lock-top");
      window.scrollTo(0, scrollYRef.current);
    }
    return () => {
      el.classList.remove("scroll-locked");
      el.style.removeProperty("--scroll-lock-top");
    };
  }, [isOpen]);

  // --- Mouse-tracking underline (desktop only) ---
  useEffect(() => {
    // Skip on anything that looks like a touch device
    if (window.matchMedia("(hover: none)").matches) return;

    const onMove = (e) => {
      const el = navContainerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const pct = ((e.clientX - rect.left) / rect.width) * 100;
      setMouseX(Math.max(25, Math.min(75, pct)));
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500  ${
        scrolled
          ? "bg-black/90 backdrop-blur-xl border-b border-gray-800/60 shadow-2xl"
          : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a
            href="https://arpitbhatia.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 cursor-pointer"
          >
            <Logo />
          </a>

          {/* Desktop nav pills */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div
              ref={navContainerRef}
              className="relative flex items-center space-x-2 bg-black/40 backdrop-blur-2xl rounded-full px-2 py-2 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            >
              {navigationLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleLinkClick(link.label, link.to)}
                  className={`relative px-6 py-3 rounded-full text-sm font-medium transition-colors duration-300 ${
                    activeLink === link.label
                      ? "text-white"
                      : "text-gray-400 hover:text-gray-200"
                  }`}
                >
                  {activeLink === link.label && (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500 rounded-full" />
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/50 to-blue-600/50 rounded-full blur-md" />
                    </>
                  )}
                  <span className="relative z-10">{link.label}</span>
                </button>
              ))}

              {/* Mouse-follow underline */}
              <div
                className="absolute -bottom-0.5 h-[2px] w-1/3 bg-gradient-to-r from-transparent via-blue-300 to-transparent pointer-events-none"
                style={{
                  left: `${mouseX}%`,
                  transform: "translateX(-50%)",
                  transition: "left 300ms ease-out",
                }}
              />
            </div>
          </div>

          {/* Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(true)}
              className="p-3 text-gray-300 hover:text-white focus:outline-none rounded-xl hover:bg-gray-800/60 transition-colors duration-200"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* ============================================================
          MOBILE DRAWER
          Structure:  backdrop (plain black, no blur)
                      outer shell (overflow-hidden lives HERE, not on animated child)
                        drawer (translateY only — nothing that breaks compositing)
                          inner scroll container (plain div, overflow-y-auto is safe here)
                            content fades in after drawer settles
          ============================================================ */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop — solid black, NO backdrop-blur (kills perf on mobile) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-black/75 z-[998]"
              onClick={() => setIsOpen(false)}
            />
            <div className="fixed inset-0 z-[999] pointer-events-none overflow-hidden">
              <motion.div
                initial={{ translateY: "-100%" }}
                animate={{ translateY: "0%" }}
                exit={{ translateY: "-100%" }}
                transition={{ type: "tween", duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                className="
                  h-full w-full sm:w-96 ml-auto
                  bg-gradient-to-b from-[#071729] via-[#0d1520] to-[#000]
                  shadow-2xl
                  will-change-transform
                  pointer-events-auto
                "
              >
                <div className="relative h-full flex flex-col overflow-y-auto">
                  {/* Header */}
                  <div className="flex items-center justify-between p-4 border-b border-cyan-500/10 flex-shrink-0">
                    <Logo />
                    <button
                      className="p-2 text-gray-400 hover:text-cyan-400 focus:outline-none transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                      aria-label="Close menu"
                    >
                      <X size={24} />
                    </button>
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 0.15, duration: 0.3 }}
                    className="flex-1 px-6 py-8"
                    style={{ fontFamily: '"Clash Display", sans-serif' }}
                  >
                    {/* Main links */}
                    <nav className="space-y-1">
                      {menuItems.map((item) => (
                        <button
                          key={item.label}
                          onClick={() => handleLinkClick(item.label, item.to)}
                          className={`block w-full text-left py-2 text-3xl font-bold transition-colors duration-200 active:scale-95 ${
                            activeLink === item.label
                              ? "text-cyan-400"
                              : "text-gray-300 hover:text-white"
                          }`}
                          style={{ WebkitTapHighlightColor: "transparent" }}
                        >
                          {item.label}
                        </button>
                      ))}
                    </nav>

                    {/* Divider */}
                    <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent my-8" />

                    {/* Social links */}
                    <nav className="space-y-1">
                      {socialItems.map((item) => (
                        <a
                          key={item.label}
                          href={item.to}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-xl font-medium text-gray-400 hover:text-cyan-400 transition-colors duration-200 py-1 active:scale-95"
                          style={{ WebkitTapHighlightColor: "transparent" }}
                        >
                          {item.label}
                        </a>
                      ))}
                    </nav>
                  </motion.div>
                  <div
                    className="absolute bottom-20 right-10 w-40 h-40 rounded-full pointer-events-none"
                    style={{ background: "radial-gradient(circle, rgba(6,182,212,0.18) 0%, transparent 70%)" }}
                  />
                  <div
                    className="absolute top-1/3 left-10 w-32 h-32 rounded-full pointer-events-none"
                    style={{ background: "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)" }}
                  />
                  <div className="absolute top-1/4 right-20 w-1 h-1 bg-cyan-400 rounded-full pointer-events-none opacity-60" />
                  <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-blue-400 rounded-full pointer-events-none opacity-50" />
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;