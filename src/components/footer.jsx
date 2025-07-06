import { useState, useEffect } from "react";
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUp,
  Heart,
  Code,
  Coffee,
  Zap
} from "lucide-react";
import logo from "/ab2.png";

const Footer = ({ onStartProject }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentYear] = useState(new Date().getFullYear());
  
  // Intersection Observer for footer visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const footerElement = document.getElementById('footer');
    if (footerElement) {
      observer.observe(footerElement);
    }

    // Scroll to top button visibility
    const handleScroll = () => {
      const scrolled = window.scrollY > 300;
      setShowScrollTop(scrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      if (footerElement) observer.unobserve(footerElement);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/bhatiaarpit", label: "GitHub", color: "hover:text-gray-300" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/bhatiaarpit", label: "LinkedIn", color: "hover:text-blue-400" },
    { icon: Twitter, href: "https://x.com/arpit_bhatia_", label: "Twitter", color: "hover:text-blue-300" },
  ];

  const quickLinks = [
    { label: "About Me", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
    { label: "Blog", href: "#blog" },
  ];

  const services = [
    { label: "Web Development", href: "#" },
    { label: "UI/UX Design", href: "#" },
    { label: "API Development", href: "#" },
    { label: "Consulting", href: "#" },
    { label: "Code Review", href: "#" },
    { label: "Mentoring", href: "#" },
  ];

  return (
    <footer 
      id="footer"
      className="relative bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-sky-500 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-pulse delay-2000"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Brand Section */}
            <div className={`space-y-6 transition-all duration-1000 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <div className="flex items-center space-x-3">
                <div className="relative overflow-hidden rounded-xl p-1 bg-white/5">
                  <img
                    src={logo}
                    alt="Arpit Bhatia Logo"
                    className="h-10 w-auto transition-all duration-300 filter drop-shadow-lg"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'block';
                    }}
                  />
                  {/* Fallback text logo */}
                  <div className="hidden text-3xl font-black bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    AB
                  </div>
                </div>
                <div className="h-8 w-px bg-gradient-to-b from-blue-400 to-purple-500"></div>
                <div className="text-lg font-semibold">Arpit Bhatia</div>
              </div>
              
              <p className="text-gray-400 leading-relaxed">
                Crafting digital experiences that blend innovation, performance, and user-centric design. 
                Let's build something amazing together.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-200">
                  <Mail size={16} />
                  <span className="text-sm">arpit@example.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-200">
                  <Phone size={16} />
                  <span className="text-sm">+91 9876543210</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-200">
                  <MapPin size={16} />
                  <span className="text-sm">Bengaluru, India</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className={`space-y-6 transition-all duration-1000 delay-200 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <h3 className="text-lg font-semibold text-white">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-all duration-200 hover:translate-x-2 inline-block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className={`space-y-6 transition-all duration-1000 delay-300 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <h3 className="text-lg font-semibold text-white">Services</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a 
                      href={service.href}
                      className="text-gray-400 hover:text-white transition-all duration-200 hover:translate-x-2 inline-block"
                    >
                      {service.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social & CTA */}
            <div className={`space-y-6 transition-all duration-1000 delay-400 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <h3 className="text-lg font-semibold text-white">Let's Connect</h3>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`p-3 bg-gray-800/50 backdrop-blur-sm rounded-full text-gray-400 hover:text-sky-400 transition-all duration-300 hover:scale-110 hover:bg-gray-700/50 group`}
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>

              {/* CTA Button */}
              <button
                className="group w-full px-6 py-3 bg-gradient-to-r from-sky-500 to-emerald-500 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl"
                onClick={onStartProject}
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span>Start a Project</span>
                  <Zap size={16} className="group-hover:animate-pulse" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              {/* Fun Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-1 text-sky-400">
                    <Code size={16} />
                    <span className="text-lg font-bold">15+</span>
                  </div>
                  <div className="text-xs text-gray-500">Projects</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-1 text-emerald-400">
                    <Coffee size={16} />
                    <span className="text-lg font-bold">∞</span>
                  </div>
                  <div className="text-xs text-gray-500">Coffees</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-1 text-cyan-400">
                    <Heart size={16} />
                    <span className="text-lg font-bold">100%</span>
                  </div>
                  <div className="text-xs text-gray-500">Passion</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © {currentYear} Arpit Bhatia. Made with{" "}
                <Heart size={14} className="inline text-red-500 animate-pulse" />{" "}
                in India
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors duration-200">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-3 bg-gradient-to-r from-sky-500 to-emerald-500 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl z-50 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;