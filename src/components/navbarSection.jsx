import { useState, useEffect, useRef, useCallback } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navigationLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/my-work", label: "Work" },
];

const socialItems = [
  { label: "GitHub", to: "https://github.com/bhatiaarpit" },
  { label: "LinkedIn", to: "https://www.linkedin.com/in/bhatiaarpit/" },
  { label: "Twitter", to: "https://x.com/arpit_bhatia_" },
];

const Logo = () => (
  <span className="flex items-center gap-3">
    <img
      src="/ab2.png"
      alt=""
      className="h-9 w-auto grayscale"
      onError={(e) => {
        e.target.style.display = "none";
      }}
    />
    <span className="text-sm font-medium tracking-wide text-graphite-ink">
      Arpit Bhatia
    </span>
  </span>
);

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

const Navbar = ({ onBookCall }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const scrollYRef = useRef(0);
  const location = useLocation();

  ensureScrollLockStyle();

  const closeMenu = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    closeMenu();
  }, [location.pathname, closeMenu]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled || isOpen
          ? "bg-graphite/95 border-b border-graphite-line backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-6">
        <NavLink to="/" className="rounded-sm" onClick={closeMenu}>
          <Logo />
          <span className="sr-only">Arpit Bhatia, home</span>
        </NavLink>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navigationLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm transition-colors ${
                  isActive
                    ? "text-graphite-ink"
                    : "text-graphite-mute hover:text-graphite-ink"
                }`
              }
            >
              {({ isActive }) => (
                <span className={isActive ? "border-b border-graphite-ink pb-0.5" : ""}>
                  {link.label}
                </span>
              )}
            </NavLink>
          ))}
          <button
            type="button"
            onClick={onBookCall}
            className="rounded-full border border-graphite-line bg-graphite-ink px-4 py-2 text-sm font-medium text-graphite hover:bg-white"
          >
            Contact
          </button>
        </nav>

        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="rounded-md p-2 text-graphite-ink md:hidden"
          aria-label="Open menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <Menu size={22} />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[998] bg-black/70 md:hidden"
              onClick={closeMenu}
            />
            <div className="fixed inset-0 z-[999] overflow-hidden pointer-events-none md:hidden">
              <motion.div
                id="mobile-menu"
                initial={{ translateY: "-100%" }}
                animate={{ translateY: "0%" }}
                exit={{ translateY: "-100%" }}
                transition={{ type: "tween", duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className="pointer-events-auto ml-auto h-full w-full bg-graphite"
                role="dialog"
                aria-modal="true"
                aria-label="Menu"
              >
                <div className="flex h-full flex-col">
                  <div className="flex h-16 items-center justify-between border-b border-graphite-line px-5">
                    <Logo />
                    <button
                      type="button"
                      className="rounded-md p-2 text-graphite-ink"
                      onClick={closeMenu}
                      aria-label="Close menu"
                    >
                      <X size={22} />
                    </button>
                  </div>
                  <nav className="flex flex-1 flex-col px-6 py-10" aria-label="Mobile">
                    {navigationLinks.map((item) => (
                      <NavLink
                        key={item.label}
                        to={item.to}
                        onClick={closeMenu}
                        className={({ isActive }) =>
                          `py-3 font-serif text-3xl ${
                            isActive ? "text-graphite-ink" : "text-graphite-mute"
                          }`
                        }
                      >
                        {item.label}
                      </NavLink>
                    ))}
                    <button
                      type="button"
                      onClick={() => {
                        closeMenu();
                        onBookCall?.();
                      }}
                      className="mt-4 w-fit border-b border-graphite-ink pb-1 font-serif text-3xl text-graphite-ink"
                    >
                      Contact
                    </button>
                    <div className="mt-auto space-y-2 pb-8">
                      {socialItems.map((item) => (
                        <a
                          key={item.label}
                          href={item.to}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-sm text-graphite-mute hover:text-graphite-ink"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  </nav>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
