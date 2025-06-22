import { useState, useEffect } from "react";
import ContactPopup from "./contactForm";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const words = ["Fast", "Functional", "Future-Ready"];

  useEffect(() => {
    setIsVisible(true);

    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="min-h-screen bg-gradient-to-b to-[#0b0f1a] via-[#0a0e19] from-black flex items-center justify-center relative overflow-hidden pt-40 pb-10">
        {/* Animated geometric shapes */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-sky-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-blue-300 rounded-full animate-ping delay-1000"></div>
          <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-pulse delay-2000"></div>
          <div className="absolute bottom-1/4 right-1/5 w-2 h-2 bg-sky-500 rounded-full animate-ping delay-700"></div>
        </div>

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        {/* Floating light orbs */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-32 right-20 w-56 h-56 bg-gradient-to-r from-cyan-500/8 to-blue-500/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-10 w-32 h-32 bg-gradient-to-r from-sky-500/12 to-blue-500/12 rounded-full blur-2xl animate-pulse delay-2000"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          {/* Main Tagline */}
          <div className={`transition-all duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
              <span className="block mb-2">I Build</span>
              <span className="block mb-4">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-500 to-sky-500 bg-clip-text text-transparent animate-pulse">
                  {words[currentWord]}
                </span>
              </span>
              <span className="block">Web Experiences</span>
            </h1>
          </div>

          {/* Introduction */}
          <div className={`transition-all duration-1000 delay-300 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
            <div className="mb-6">
              <span className="text-xl md:text-2xl text-gray-300 font-light">Hello, I'm </span>
              <span className="text-xl md:text-2xl text-white font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Arpit Bhatia
              </span>
            </div>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
              A passionate software engineer crafting digital experiences that blend
              <span className="text-blue-400 font-medium"> innovation</span>,
              <span className="text-cyan-400 font-medium"> performance</span>, and
              <span className="text-sky-400 font-medium"> user-centric design</span>.
            </p>
          </div>

          {/* Call to Action */}
          <div className={`mt-12 transition-all duration-1000 delay-500 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/25">
                <span className="relative z-10 flex items-center gap-2">
                  View My Work
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-sky-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button 
                onClick={() => setIsContactOpen(true)}
                className="group px-8 py-4 border-2 border-gray-600 text-white font-semibold rounded-full hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-400 transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  Get In Touch
                  <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Popup */}
      <ContactPopup 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />
    </>
  );
};

export default HeroSection;