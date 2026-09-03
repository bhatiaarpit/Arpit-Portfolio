import {
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  Github,
  House,
  Linkedin,
  Mail,
  Menu,
  MoreHorizontal,
  Youtube,
  X,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const navigation = [
  { label: "Home", to: "/", icon: House },
  { label: "Projects", to: "/my-work", icon: BriefcaseBusiness },
  { label: "Experience", to: "/experience", icon: BookOpen },
  { label: "Blogs", to: "/insights", icon: BookOpen },
  { label: "More", to: "/more", icon: MoreHorizontal },
];

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

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isMenuOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsMenuOpen(true)}
        aria-label="Open menu"
        aria-expanded={isMenuOpen}
        className="fixed right-4 top-4 z-50 flex h-11 w-11 items-center justify-center rounded-md border border-graphite-line bg-graphite-raised text-graphite-ink md:hidden"
      >
        <Menu size={20} aria-hidden="true" />
      </button>

      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <button
            type="button"
            onClick={closeMenu}
            aria-label="Close menu"
            className="absolute inset-0 bg-black/70"
          />
          <div className="absolute right-0 top-0 flex h-full w-[min(86vw,360px)] flex-col border-l border-graphite-line bg-graphite px-6 py-5">
            <div className="flex items-center justify-between border-b border-graphite-line pb-5">
              <NavLink to="/" onClick={closeMenu} className="flex items-center">
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
            <nav className="flex flex-col gap-1 py-8" aria-label="Mobile primary">
              {navigation.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.to}
                  end={item.to === "/"}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `flex items-center gap-4 border-b border-graphite-line py-4 text-lg ${
                      isActive ? "text-graphite-ink" : "text-graphite-mute"
                    }`
                  }
                >
                  <item.icon size={19} strokeWidth={1.6} aria-hidden="true" />
                  {item.label}
                </NavLink>
              ))}
            </nav>
            <div className="mt-auto flex gap-4 border-t border-graphite-line pt-6">
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
                    className="text-graphite-faint hover:text-graphite-ink"
                  >
                    <Icon size={18} strokeWidth={1.5} aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      )}

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