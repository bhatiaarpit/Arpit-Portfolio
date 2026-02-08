import { useState, useEffect } from "react";
import { FaGlobeAsia, FaLightbulb, FaLaptopCode, FaCode } from "react-icons/fa";
import TechGlobe from "./techGlobe";

const AboutMeSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTab, setCurrentTab] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [currentLine, setCurrentLine] = useState(0);

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
    { label: "Location", value: "Bengaluru", icon: <FaGlobeAsia color="white" size={20} /> },
    { label: "Philosophy", value: "Learning by building", icon: <FaLightbulb color="white" size={20} /> },
    { label: "Current Role", value: "Frontend Developer", icon: <FaLaptopCode color="white" size={20} /> },
    { label: "Top Skills", value: "React • Next.js • TypeScript", icon: <FaCode color="white" size={20} /> }
  ];

  const codeSnippets = [
    {
      title: "about-me.js",
      lang: "javascript",
      content: [
        "const ArpitBhatia = {",
        "  passion: 'Frontend Development',",
        "  location: 'India 🇮🇳',",
        "  currentlyBuilding: 'E-commerce Solutions',",
        "  techStack: ['React', 'Next.js', 'Shopify'],",
        "  motto: 'Learning by building 💡',",
        "  funFact: 'I debug with console.log() 😄'",
        "};"
      ]
    },
    {
      title: "terminal",
      lang: "bash",
      content: [
        "$ whoami",
        "arpit-bhatia",
        "$ cat skills.txt",
        "React ⚛️  Next.js 🚀  TypeScript 📘",
        "$ git log --oneline",
        "feat: Built awesome e-commerce platform ✨",
        "fix: Optimized performance by 40% 🚀",
        "docs: Updated portfolio with new projects 📝",
        "$ npm run build-dreams"
      ]
    },
    {
      title: "passion.tsx",
      lang: "typescript",
      content: [
        "interface Developer {",
        "  name: string;",
        "  experience: string;",
        "  specialization: string[];",
        "  isAvailableForWork: boolean;",
        "}",
        "",
        "const me: Developer = {",
        "  name: 'Arpit Bhatia',",
        "  experience: '1+ years of building magic',",
        "  specialization: ['E-commerce', 'UI/UX'],",
        "  isAvailableForWork: true // Always! 🚀",
        "};"
      ]
    }
  ];

  // Typing animation effect
  useEffect(() => {
    if (!isVisible) return;
    
    const currentSnippet = codeSnippets[currentTab];
    const lines = currentSnippet.content;
    
    if (currentLine < lines.length) {
      const timer = setTimeout(() => {
        setTypedText(prev => {
          const currentLineText = lines[currentLine];
          const nextChar = currentLineText[prev.split('\n')[currentLine]?.length || 0];
          
          if (nextChar) {
            const newLines = prev.split('\n');
            newLines[currentLine] = (newLines[currentLine] || '') + nextChar;
            return newLines.join('\n');
          } else {
            setCurrentLine(prev => prev + 1);
            return prev + '\n';
          }
        });
      }, 50);
      
      return () => clearTimeout(timer);
    }
  }, [isVisible, currentTab, currentLine, typedText]);

  // Reset typing when tab changes
  useEffect(() => {
    setTypedText("");
    setCurrentLine(0);
  }, [currentTab]);

  return (
    <section
      id="about-section"
      className="min-h-screen bg-[#020305] relative overflow-hidden py-10"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-sky-400 rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-sky-400 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/5 w-2 h-2 bg-blue-400 rounded-full animate-ping delay-700"></div>
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-56 h-56 bg-gradient-to-r from-cyan-500/8 to-blue-500/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-10 w-32 h-32 bg-gradient-to-r from-sky-500/12 to-blue-500/12 rounded-full blur-2xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 flex flex-col justify-center min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-7xl mx-auto">
          
          {/* Left Side - About Content */}
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="mb-8">
              <div className="mb-4 flex items-center gap-3">
                <span className="block w-8 h-1 bg-gradient-to-r from-blue-400 to-cyan-500 rounded"></span>
                <span className="text-sm sm:text-base text-cyan-400 font-medium tracking-wide uppercase">About Me</span>
              </div>
              
              <div className="mb-4">
                <span className="text-base sm:text-lg text-gray-300 font-light block mb-2 flex items-center gap-2">
                  Hey there 
                  <span className="inline-block animate-bounce">👋</span>
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight">
                  I'm <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-500 bg-clip-text text-transparent">Arpit Bhatia</span>
                </h2>
              </div>
            </div>

            <div className="space-y-6 mb-8">
              <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed">
                a passionate Frontend Developer and UI enthusiast based in India. I specialize in building responsive, accessible, and high-performing web applications.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {personalInfo.map((info, index) => (
                <div
                  key={info.label}
                  className="flex items-center gap-3 p-3 bg-gray-900/40 backdrop-blur-sm rounded-lg border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300 group"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <span className="text-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    {info.icon}
                  </span>
                  <div className="min-w-0">
                    <span className="text-gray-300 text-sm font-medium block leading-tight truncate">
                      {info.value}
                    </span>
                    <span className="text-gray-500 text-xs">
                      {info.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Interactive Code Window */}
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} delay-300`}>
              <TechGlobe/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;