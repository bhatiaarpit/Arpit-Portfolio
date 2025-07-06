import { useState, useEffect } from "react";
import BackgroundEffects from "../components/backgroundEffect.jsx";
import ExperienceSection from "../components/ExperienceSection.jsx";
import experiences from "../data/experience.json";

const AboutMeSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    const section = document.getElementById("about-section");
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // Work technologies - Updated based on your skills
  const workTech = ["JavaScript", "React", "Remix", "Shopify Liquid", "HTML", "CSS", "Tailwind CSS", "Node.js", "MongoDB", "Git", "Figma"];

  return (
    <section
      id="about-section"
      className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden pt-16 sm:pt-20 lg:pt-32 pb-12 sm:pb-16 lg:pb-20"
    >
      <BackgroundEffects />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        
        {/* Header */}
        <div className={`md:mx-8 mb-8 text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white my-6">
            About<span className="text-blue-500">.</span>
          </h1>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-16 lg:mb-20">
          
          {/* Profile Section */}
          <div className={`lg:col-span-2 transition-all duration-1000 transform delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-gray-800/20 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300">
              
              {/* Greeting */}
              <div className="flex items-start sm:items-center gap-3 mb-6">
                {/* <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex-shrink-0">
                </div> */}
                <div className="min-w-0">
                  <span className="text-gray-300 text-base sm:text-lg leading-relaxed">
                    Hey! I'm <span className="text-white font-semibold">Arpit</span>
                  </span>
                </div>
              </div>

              {/* Updated Main Description */}
              <div className="space-y-4 text-gray-300 leading-relaxed text-sm sm:text-base">
                <p>
                  <span className="text-white font-semibold text-lg sm:text-xl">Frontend Developer building fast, beautiful web experiences.</span>
                </p>
                
                <p>
                  Currently an SDE 1 at <span className="text-emerald-400 font-semibold">Marmeto</span> in Bengaluru, 
                  specializing in e-commerce development with <span className="text-green-400 font-semibold">Shopify</span>, 
                  <span className="text-blue-400 font-semibold"> React</span>, and modern frontend tools.
                </p>
                
                <p>
                  With experience across the <span className="text-cyan-400 font-semibold">MERN stack</span> and 
                  custom Shopify development, I've helped build scalable solutions that drive real business results. 
                  From leading tech communities to mentoring fellow developers, I'm passionate about both code and collaboration.
                </p>
                
                <p>
                  I love turning ideas into clean, functional interfaces that users actually enjoy using.
                </p>
                
                <p className="text-blue-400 font-medium">
                  Let's build something amazing together!
                </p>
              </div>

              {/* Social Links */}
              <div className="mt-6 sm:mt-8 pt-6 border-t border-gray-700/50">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <span className="text-gray-400 font-medium text-sm sm:text-base">My links</span>
                  <div className="flex gap-3">
                    <a href="https://www.linkedin.com/in/bhatiaarpit" className="w-10 h-10 bg-gray-700/50 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-300 group" title="LinkedIn">
                      <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a href="https://github.com/bhatiaarpit" className="w-10 h-10 bg-gray-700/50 hover:bg-gray-600 rounded-lg flex items-center justify-center transition-colors duration-300 group" title="GitHub">
                      <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                    <a href="https://x.com/arpit_bhatia_" className="w-10 h-10 bg-gray-700/50 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-colors duration-300 group" title="Twitter/X">
                      <svg className="w-4 h-4 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                    <a href="https://arpitbhatia.com/" className="w-10 h-10 bg-gray-700/50 hover:bg-orange-600 rounded-lg flex items-center justify-center transition-colors duration-300 group" title="Portfolio">
                      <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tech Stack Sidebar */}
          <div className={`transition-all duration-1000 transform delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            
            {/* Work Tech */}
            <div className="mb-6 lg:mb-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
                  <span className="text-white text-sm">💼</span>
                </div>
                <h3 className="text-white font-semibold text-base sm:text-lg">Use at work</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {workTech.map((tech, index) => (
                  <TechBadge key={tech} tech={tech} delay={index * 50} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <ExperienceSection experiences={experiences} isVisible={isVisible} />

        {/* Stats Section */}
        {/* <StatsSection isVisible={isVisible} /> */}
      </div>
    </section>
  );
};

// Tech Badge Component
const TechBadge = ({ tech, delay, variant = "work" }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <span
      className={`px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm font-medium rounded-lg border transition-all duration-300 cursor-default transform hover:scale-105 ${
        variant === "fun" 
          ? "bg-purple-900/20 text-purple-300 border-purple-700/30 hover:border-purple-500/50 hover:bg-purple-900/30" 
          : "bg-blue-900/20 text-blue-300 border-blue-700/30 hover:border-blue-500/50 hover:bg-blue-900/30"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        animationDelay: `${delay}ms`,
        transform: isHovered ? 'scale(1.05)' : 'scale(1)'
      }}
    >
      {tech}
    </span>
  );
};

export default AboutMeSection;