import { Linkedin, Github, Twitter, Globe } from "lucide-react";
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
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white my-6 font-clash-display">
            About<span className="text-blue-500">.</span>
          </h1>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 lg:mb-20">
          
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
                      <Linkedin className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                    </a>
                    <a href="https://github.com/bhatiaarpit" className="w-10 h-10 bg-gray-700/50 hover:bg-gray-600 rounded-lg flex items-center justify-center transition-colors duration-300 group" title="GitHub">
                      <Github className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                    </a>
                    <a href="https://x.com/arpit_bhatia_" className="w-10 h-10 bg-gray-700/50 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-colors duration-300 group" title="Twitter/X">
                      <Twitter className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                    </a>
                    <a href="https://arpitbhatia.com/" className="w-10 h-10 bg-gray-700/50 hover:bg-orange-600 rounded-lg flex items-center justify-center transition-colors duration-300 group" title="Portfolio">
                      <Globe className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tech Stack Sidebar */}
          <div className={`transition-all duration-1000 transform delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            
            {/* Work Tech */}
            <div className="mb-6 lg:mb-8 md:block hidden">
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