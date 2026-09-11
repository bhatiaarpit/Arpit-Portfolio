import {
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  ChevronRight,
  Github,
  House,
  Linkedin,
  Mail,
  MoreHorizontal,
  Youtube,
  X,
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const navigation = [
  { label: "Home", to: "/", icon: House },
  { label: "About", to: "/about", icon: BookOpen },
  { label: "Projects", to: "/my-work", icon: BriefcaseBusiness },
  { label: "Experience", to: "/experience", icon: BookOpen },
  { label: "Blogs", to: "/insights", icon: BookOpen },
  { label: "More", to: "/more", icon: MoreHorizontal },
];

const routeOrder = ["/", "/about", "/my-work", "/experience", "/insights", "/more"];

const socials = [
  { label: "GitHub", href: "https://github.com/bhatiaarpit", icon: Github },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/bhatiaarpit/",
    icon: Linkedin,
  },
  { label: "X", href: "https://x.com/arpit_bhatia_", icon: ArrowUpRight },
  { label: "Email", href: "mailto:arpitbhatia903@gmail.com", icon: Mail },
  { label: "YouTube", href: "https://youtube.com", icon: Youtube },
];

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuExitDirection, setMenuExitDirection] = useState(1);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("overflow-hidden", isMenuOpen);
    document.body.classList.toggle("overflow-hidden", isMenuOpen);
    document.documentElement.style.overflow = isMenuOpen ? "hidden" : "";
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.documentElement.classList.remove("overflow-hidden");
      document.body.classList.remove("overflow-hidden");
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);
  const closeMenuForRoute = (targetPath) => {
    const currentIndex = routeOrder.indexOf(location.pathname);
    const targetIndex = routeOrder.indexOf(targetPath);
    setMenuExitDirection(targetIndex > currentIndex ? -1 : 1);
    closeMenu();
  };

  return (
    <>
      <div
        aria-hidden="true"
        className={`pointer-events-none fixed inset-x-0 top-0 z-40 h-[72px] border-b border-transparent bg-graphite/70 backdrop-blur-xl transition-all duration-300 md:hidden ${
          isScrolled ? "opacity-100" : "opacity-0"
        }`}
      />
      <NavLink
        to="/"
        aria-label="Arpit Bhatia, home"
        className="fixed left-4 top-4 z-50 flex items-center md:hidden"
      >
        <img src="/ab2.png" alt="Arpit Bhatia" className="h-9 w-auto grayscale" />
      </NavLink>
      <button
        type="button"
        onClick={() => setIsMenuOpen(true)}
        aria-label="Open menu"
        aria-expanded={isMenuOpen}
        className="fixed right-4 top-4 z-50 flex h-11 w-11 items-center justify-center bg-transparent text-graphite-ink md:hidden"
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="menu-icon-shine-gradient" x1="-24" y1="0" x2="-12" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="currentColor" stopOpacity="0" />
              <stop offset="0.5" stopColor="white" stopOpacity="0.95" />
              <stop offset="1" stopColor="currentColor" stopOpacity="0" />
              <animate
                attributeName="x1"
                values="-24;24;-24"
                dur="5s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="x2"
                values="-12;36;-12"
                dur="5s"
                repeatCount="indefinite"
              />
            </linearGradient>
          </defs>
          <path
            d="M3 12h18M9 18h12M3 6h12"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d="M3 12h18M9 18h12M3 6h12"
            stroke="url(#menu-icon-shine-gradient)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            pathLength="1"
          />
        </svg>
      </button>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[60] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              type="button"
              onClick={closeMenu}
              aria-label="Close menu"
              className="absolute inset-0 bg-black/75"
            />
            <motion.div
              className="relative flex h-full w-full flex-col overflow-y-auto bg-graphite px-6 py-5"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              custom={menuExitDirection}
              exit={(direction) => ({ x: `${direction * 100}%` })}
              transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
            >
            <div className="relative flex items-center justify-between border-b border-graphite-line pb-5">
              <NavLink to="/" onClick={() => closeMenuForRoute("/")} className="flex items-center">
                <img src="/ab2.png" alt="Arpit Bhatia" className="h-9 w-auto grayscale" />
              </NavLink>
              <button
                type="button"
                onClick={closeMenu}
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center rounded-md text-graphite-ink"
              >
                <X size={21} aria-hidden="true" />
              </button>
            </div>
            <motion.nav
              className="flex flex-col gap-1 pt-4"
              aria-label="Mobile primary"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.055, delayChildren: 0.14 } } }}
            >
              {navigation.map((item) => (
                <motion.div
                  key={item.label}
                  variants={{
                    hidden: { opacity: 0, x: 18 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.35, ease: "easeOut" } },
                  }}
                >
                  <NavLink
                    to={item.to}
                    end={item.to === "/"}
                    onClick={() => closeMenuForRoute(item.to)}
                    className={({ isActive }) =>
                      `group flex items-center justify-between rounded-md px-3 py-3 text-base transition-colors ${
                        isActive
                          ? "bg-graphite-raised text-graphite-ink"
                          : "text-graphite-mute hover:bg-graphite-raised hover:text-graphite-ink"
                      }`
                    }
                  >
                    <span className="flex items-center gap-4">
                      <item.icon size={19} strokeWidth={1.5} aria-hidden="true" />
                      {item.label}
                    </span>
                    <ChevronRight
                      size={18}
                      strokeWidth={1.5}
                      className="text-graphite-faint transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </NavLink>
                </motion.div>
              ))}
            </motion.nav>
            <div className="mt-auto border-t border-graphite-line pt-5 pb-1">
              <div className="flex items-center gap-2">
                <p className="font-serif text-2xl text-graphite-ink">Let&apos;s connect</p>
                <ArrowUpRight size={22} strokeWidth={1.7} className="text-white" aria-hidden="true" />
              </div>
              <div className="mt-5 flex items-center gap-5">
                {socials.map((social) => {
                  const Icon = social.icon;
                  const isExternal = social.href.startsWith("http");
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noreferrer" : undefined}
                      aria-label={social.label}
                      title={social.label}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-graphite-line text-graphite-mute transition-colors hover:border-white hover:text-white"
                    >
                      <Icon size={17} strokeWidth={1.5} aria-hidden="true" />
                    </a>
                  );
                })}
              </div>
              <p className="mt-6 text-[8px] uppercase tracking-[0.28em] text-graphite-faint">
                Build&nbsp; / &nbsp;Learn&nbsp; / &nbsp;Share
              </p>
            </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <aside className="fixed left-0 top-0 z-50 hidden h-screen w-[72px] flex-col border-r border-graphite-line bg-graphite md:flex lg:w-[88px]">
      <div className="flex h-[72px] items-center justify-center border-b border-graphite-line lg:h-[88px]">
        <NavLink
          to="/"
          aria-label="Arpit Bhatia, home"
          title="Arpit Bhatia, home"
          className="flex items-center justify-center"
        >
          <img src="/ab2.png" alt="Arpit Bhatia" className="h-9 w-auto grayscale" />
        </NavLink>
      </div>

      <nav className="flex flex-1 flex-col items-center px-1 pt-8 lg:px-2 lg:pt-10" aria-label="Primary">
        <div className="space-y-3 lg:space-y-4">
          {navigation.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              end={item.to === "/"}
              aria-label={item.label}
              title={item.label}
              className={({ isActive }) =>
                `group relative flex w-[60px] flex-col items-center justify-center gap-1 rounded-md py-2 transition-colors duration-300 hover:bg-graphite-raised hover:text-graphite-ink ${
                  isActive ? "bg-graphite-raised text-graphite-ink" : "text-graphite-faint"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <span className="absolute -left-4 h-5 w-px bg-cyan-400" />
                  )}
                  <item.icon size={19} strokeWidth={1.6} aria-hidden="true" />
                  <span className="text-[8px] font-medium uppercase leading-none tracking-[0.08em]">
                    {item.label}
                  </span>
                </>
              )}
            </NavLink>
          ))}
        </div>
      </nav>

      <div className="flex flex-col items-center px-4 pb-8">
        <div className="mb-7 h-px w-8 bg-graphite-line" />
        <div className="space-y-4">
          {socials.map((social) => {
            const Icon = social.icon;
            const isExternal = social.href.startsWith("http");

            return (
              <a
                key={social.label}
                href={social.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noreferrer" : undefined}
                aria-label={social.label}
                title={social.label}
                className="group flex h-8 w-8 items-center justify-center rounded-md text-graphite-faint transition-colors duration-300 hover:bg-graphite-raised hover:text-graphite-ink"
              >
                <Icon
                  size={16}
                  strokeWidth={1.5}
                  className="shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5"
                />
              </a>
            );
          })}
        </div>
        <div className="mt-7 h-px w-8 bg-graphite-line" />
      </div>
      </aside>
    </>
  );
};

export default Sidebar;