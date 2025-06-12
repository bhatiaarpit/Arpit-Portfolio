import { useState, useEffect } from "react";

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

  const personalInfo = [
    { label: "Location", value: "India", icon: "🌍" },
    { label: "Lifestyle", value: "Vegetarian", icon: "🌱" },
    { label: "Philosophy", value: "Learning by building", icon: "💡" },
    { label: "Current Role", value: "Full-stack Developer", icon: "💻" }
  ];

  const highlights = [
    { text: "3+ Years", subtitle: "Development Experience" },
    { text: "50+ Projects", subtitle: "Successfully Delivered" },
    { text: "E-commerce", subtitle: "Specialization" },
    { text: "Open Source", subtitle: "Contributor" }
  ];

  return (
    <section
      id="about-section"
      className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden py-20"
    >
      <BackgroundEffects />

      <div className="container mx-auto px-6 relative z-10 flex flex-col justify-center min-h-screen">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          
          {/* Text Section */}
          <div
            className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          >
            <SectionHeader />
            <MainContent />
            <PersonalInfoGrid personalInfo={personalInfo} />
          </div>

          {/* Image Section */}
          <div
            className={`flex justify-center lg:justify-end transition-all duration-1000 transform delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          >
            <ProfileImageCard />
          </div>
        </div>

        {/* Highlights Section */}
        <HighlightsSection highlights={highlights} isVisible={isVisible} />
      </div>
    </section>
  );
};

// ------------------------------
// Section Header
// ------------------------------
const SectionHeader = () => (
  <div className="mb-8">
    <div className="mb-4 flex items-center gap-3">
      <span className="block w-8 h-1 bg-gradient-to-r from-sky-400 to-emerald-500 rounded"></span>
      <span className="text-base text-sky-400 font-medium tracking-wide uppercase">About Me</span>
    </div>
    
    <div className="mb-4">
      <span className="text-lg text-gray-300 font-light block mb-2 flex items-center gap-2">
        Hey there 
        <span className="inline-block animate-bounce">👋</span>
      </span>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight">
        I'm <span className="bg-gradient-to-r from-sky-400 via-emerald-400 to-cyan-500 bg-clip-text text-transparent">Arpit Bhatia</span>
      </h2>
    </div>
  </div>
);

// ------------------------------
// Main Content
// ------------------------------
const MainContent = () => (
  <div className="space-y-6 mb-8">
    <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
      Passionate web developer from India, blending 
      <span className="text-sky-400 font-semibold mx-1">design</span> 
      and 
      <span className="text-emerald-400 font-semibold mx-1">code</span> 
      to craft exceptional digital experiences that make a difference.
    </p>
    
    <p className="text-gray-400 text-lg leading-relaxed">
      Currently working full-time at 
      <span className="text-emerald-400 font-semibold mx-1">Marmeto</span> 
      while completing my final year of studies. I specialize in e-commerce development, 
      particularly with 
      <span className="text-green-400 font-semibold">Shopify</span>, 
      and I'm always exploring cutting-edge technologies to build meaningful projects.
    </p>

    <div className="flex flex-wrap gap-2">
      {["React", "Next.js", "Shopify", "Node.js", "TypeScript"].map((tech, index) => (
        <span
          key={tech}
          className="px-3 py-1 bg-gray-800/50 backdrop-blur-sm text-gray-300 text-sm font-medium rounded-full border border-gray-700/40 hover:border-sky-400/50 hover:text-sky-400 transition-all duration-300"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          {tech}
        </span>
      ))}
    </div>
  </div>
);

// ------------------------------
// Personal Info Grid
// ------------------------------
const PersonalInfoGrid = ({ personalInfo }) => (
  <div className="grid grid-cols-2 gap-3">
    {personalInfo.map((info, index) => (
      <div
        key={info.label}
        className="flex items-center gap-3 p-3 bg-gray-900/40 backdrop-blur-sm rounded-lg border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300 group"
        style={{ animationDelay: `${index * 150}ms` }}
      >
        <span className="text-lg group-hover:scale-110 transition-transform duration-300">
          {info.icon}
        </span>
        <div>
          <span className="text-gray-300 text-sm font-medium block leading-tight">
            {info.value}
          </span>
          <span className="text-gray-500 text-xs">
            {info.label}
          </span>
        </div>
      </div>
    ))}
  </div>
);

// ------------------------------
// Profile Image Card
// ------------------------------
const ProfileImageCard = () => (
  <div className="relative group">
    {/* Animated background glow */}
    <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-sky-400 via-emerald-500 to-cyan-500 blur-2xl opacity-20 group-hover:opacity-40 transition-all duration-700 animate-pulse"></div>
    
    {/* Main image container */}
    <div className="relative w-80 h-80 rounded-2xl overflow-hidden shadow-2xl border border-gray-700/50 group-hover:border-sky-400/30 transition-all duration-500 bg-gray-800/20 backdrop-blur-sm">
      {/* Placeholder for image */}
      <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden">
        {/* Geometric pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 left-4 w-8 h-8 border-2 border-sky-400 rounded rotate-45"></div>
          <div className="absolute bottom-4 right-4 w-6 h-6 border-2 border-emerald-400 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 border border-cyan-400 rounded-lg rotate-12"></div>
        </div>
        
        {/* Profile placeholder */}
        <div className="text-center">
          <div className="w-24 h-24 bg-gradient-to-r from-sky-400 to-emerald-500 rounded-full flex items-center justify-center text-3xl font-bold text-white mb-4 group-hover:scale-110 transition-transform duration-300">
            AB
          </div>
          <p className="text-gray-400 text-sm">Profile Image</p>
        </div>
      </div>
      
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/10 via-transparent to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>

    {/* Floating elements */}
    <div className="absolute -top-2 -right-2 w-4 h-4 bg-emerald-400 rounded-full animate-pulse"></div>
    <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-sky-400 rounded-full animate-ping"></div>
  </div>
);

// ------------------------------
// Highlights Section
// ------------------------------
const HighlightsSection = ({ highlights, isVisible }) => (
  <div
    className={`mt-16 pt-12 border-t border-gray-800/50 transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
  >
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
      {highlights.map((highlight, index) => (
        <div
          key={index}
          className="text-center group"
          style={{ animationDelay: `${600 + (index * 150)}ms` }}
        >
          <div className="p-4 bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-700/30 hover:border-gray-600/50 hover:bg-gray-900/50 transition-all duration-300 group-hover:scale-105">
            <div className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-sky-400 group-hover:to-emerald-500 group-hover:bg-clip-text transition-all duration-300">
              {highlight.text}
            </div>
            <div className="text-sm text-gray-400 font-medium">
              {highlight.subtitle}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// ------------------------------
// Background Effects
// ------------------------------
const BackgroundEffects = () => (
  <>
    <div className="absolute inset-0">
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-sky-400 rounded-full animate-ping"></div>
      <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-emerald-400 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping delay-1000"></div>
      <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-sky-400 rounded-full animate-pulse delay-2000"></div>
      <div className="absolute bottom-1/4 right-1/5 w-2 h-2 bg-emerald-400 rounded-full animate-ping delay-700"></div>
    </div>
    
    <div className="absolute inset-0 opacity-5">
      <div className="w-full h-full"></div>
    </div>
    
    <div className="absolute inset-0">
      <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-sky-500/10 to-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-32 right-20 w-56 h-56 bg-gradient-to-r from-emerald-500/8 to-cyan-500/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-10 w-32 h-32 bg-gradient-to-r from-cyan-500/12 to-sky-500/12 rounded-full blur-2xl animate-pulse delay-2000"></div>
    </div>
  </>
);

export default AboutMeSection;