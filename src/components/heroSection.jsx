import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Plus, ArrowDown } from "lucide-react";
import ContactPopup from "./contactForm";
import spaceBackground from "../assets/space-bg.webp";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const navigate = useNavigate(); 

  const words = ["Developer", "Designer", "Creator"];

  useEffect(() => {
    setIsVisible(true);

    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
          @import url('https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap');
          @import url('https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap');
        `}
      </style>
      
      <section className="min-h-screen bg-[#030b1b] bg-gradient-to-b to-[#0b0f1a] via-[#0a0e19] from-black flex items-center justify-center relative overflow-hidden">
        
        {/* Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
          style={{ backgroundImage: `url(${spaceBackground})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />

        {/* Dots */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-sky-400 rounded-full animate-pulse delay-2000"></div>
          <div className="absolute bottom-1/4 right-1/5 w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse delay-700"></div>
        </div>

        {/* Gradient orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10 max-w-5xl md:mt-[7rem]">

          {/* Name */}
          <div className={`transition-all duration-1000 delay-200 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white mb-6 leading-tight tracking-tight" style={{ fontFamily: 'Clash Display, sans-serif' }}>
              <span className="bg-gradient-to-r from-white via-cyan-400 to-sky-500 bg-clip-text text-transparent">
                Arpit Bhatia
              </span>
            </h1>
          </div>
          {/* Description */}
          <div className={`transition-all duration-1000 delay-600 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light mb-4" style={{ fontFamily: 'Satoshi, sans-serif' }}>
              Turning ideas into fast, scalable, and delightful web products.
            </p>
          </div>
          <div className={`transition-all duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
            <p className="text-cyan-400 text-[10px] md:text-base font-medium tracking-widest uppercase mb-4 md:mb-8" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Software Engineer & Creative Developer
            </p>
          </div>

          {/* CTA Buttons — mobile optimized */}
          <div className={`transition-all duration-1000 delay-800 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
            <div className="flex flex-row gap-3 justify-center items-center w-full mx-auto">
              
              <button
                className="group relative px-5 py-3 sm:px-10 sm:py-4 text-sm sm:text-base bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-0.5"
                onClick={() => navigate("/my-work")}
                style={{ fontFamily: 'Satoshi, sans-serif' }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  View My Work
                  <ArrowRight className="w-4 h-4" />
                </span>
              </button>

              <button 
                onClick={() => setIsContactOpen(true)}
                className="group px-5 py-3 sm:px-10 sm:py-4 text-sm sm:text-base bg-white/5 backdrop-blur-sm border border-gray-700 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300"
                style={{ fontFamily: 'Satoshi, sans-serif' }}
              >
                <span className="flex items-center gap-2">
                  Let's Connect
                  <ArrowRight className="w-4 h-4" />
                </span>
              </button>

            </div>
          </div>

          {/* Scroll indicator */}
          <div className={`mt-20 transition-all duration-1000 delay-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
            <div className="flex flex-col items-center gap-2 animate-bounce">
              <p className="text-xs text-gray-500 uppercase tracking-wider" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Scroll to explore
              </p>
              <ArrowDown className="w-5 h-5 text-cyan-400" />
            </div>
          </div>

        </div>
      </section>

      <ContactPopup 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />
    </>
  );
};

export default HeroSection;
