import { Github, Linkedin, Twitter, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Footer = ({ onContactClick }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const year = new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-graphite-line bg-graphite pl-[72px] lg:pl-[88px]">
      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-5 py-14 sm:px-6 md:flex-row md:justify-between">
        <div className="max-w-sm">
          <p className="font-serif text-2xl text-graphite-ink">Arpit Bhatia</p>
          <p className="mt-3 text-sm text-graphite-mute">
            Bengaluru. Open to thoughtful product work.
          </p>
          <a
            href="mailto:arpitbhatia903@gmail.com"
            className="mt-4 inline-block text-sm text-graphite-ink underline-offset-4 hover:underline"
          >
            arpitbhatia903@gmail.com
          </a>
        </div>

        <nav aria-label="Footer">
          <ul className="space-y-2 text-sm text-graphite-mute">
            <li>
              <Link to="/about" className="hover:text-graphite-ink">
                About
              </Link>
            </li>
            <li>
              <Link to="/my-work" className="hover:text-graphite-ink">
                Work
              </Link>
            </li>
            <li>
              <button
                type="button"
                onClick={onContactClick}
                className="hover:text-graphite-ink"
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>

        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-graphite-faint">
            Social
          </p>
          <ul className="mt-3 flex gap-3">
            <li>
              <a
                href="https://github.com/bhatiaarpit"
                aria-label="GitHub"
                className="inline-flex rounded-full border border-graphite-line p-2 text-graphite-mute hover:text-graphite-ink"
              >
                <Github size={16} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/bhatiaarpit"
                aria-label="LinkedIn"
                className="inline-flex rounded-full border border-graphite-line p-2 text-graphite-mute hover:text-graphite-ink"
              >
                <Linkedin size={16} />
              </a>
            </li>
            <li>
              <a
                href="https://x.com/arpit_bhatia_"
                aria-label="Twitter"
                className="inline-flex rounded-full border border-graphite-line p-2 text-graphite-mute hover:text-graphite-ink"
              >
                <Twitter size={16} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-graphite-line">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-5 sm:px-6">
          <p className="text-xs text-graphite-faint">© {year} Arpit Bhatia</p>
        </div>
      </div>

      <button
        type="button"
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-40 rounded-full border border-graphite-line bg-graphite-raised p-3 text-graphite-ink transition-opacity ${
          showScrollTop ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={18} />
      </button>
    </footer>
  );
};

export default Footer;
