import { useState, useEffect } from "react";
import { FaGlobeAsia, FaLightbulb, FaLaptopCode, FaCode } from "react-icons/fa";

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

  const tabs = [
    { name: "about-me.js", icon: "📄" },
    { name: "terminal", icon: "💻" },
    { name: "passion.tsx", icon: "⚛️" }
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
      className="min-h-screen bg-gradient-to-bl from-[#0b0f1a] via-[#0a0e19] to-black  relative overflow-hidden py-10"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-sky-400 rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-emerald-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-sky-400 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/5 w-2 h-2 bg-emerald-400 rounded-full animate-ping delay-700"></div>
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-sky-500/10 to-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-56 h-56 bg-gradient-to-r from-emerald-500/8 to-cyan-500/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-10 w-32 h-32 bg-gradient-to-r from-cyan-500/12 to-sky-500/12 rounded-full blur-2xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 flex flex-col justify-center min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-7xl mx-auto">
          
          {/* Left Side - About Content */}
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="mb-8">
              <div className="mb-4 flex items-center gap-3">
                <span className="block w-8 h-1 bg-gradient-to-r from-sky-400 to-emerald-500 rounded"></span>
                <span className="text-sm sm:text-base text-sky-400 font-medium tracking-wide uppercase">About Me</span>
              </div>
              
              <div className="mb-4">
                <span className="text-base sm:text-lg text-gray-300 font-light block mb-2 flex items-center gap-2">
                  Hey there 
                  <span className="inline-block animate-bounce">👋</span>
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight">
                  I'm <span className="bg-gradient-to-r from-sky-400 via-emerald-400 to-cyan-500 bg-clip-text text-transparent">Arpit Bhatia</span>
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
            <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden shadow-2xl w-full max-w-none">
              {/* Window Header */}
              <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 bg-gray-800/60 border-b border-gray-700/50">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-400 text-xs sm:text-sm ml-2">VS Code</span>
                </div>
                <div className="text-gray-500 text-xs hidden sm:block">arpit-portfolio</div>
              </div>

              {/* Tabs */}
              <div className="flex bg-gray-800/40 border-b border-gray-700/30 overflow-x-auto">
                {tabs.map((tab, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTab(index)}
                    className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 text-xs sm:text-sm transition-all duration-200 border-r border-gray-700/30 whitespace-nowrap ${
                      currentTab === index
                        ? 'bg-gray-900/60 text-sky-400 border-b border-sky-400'
                        : 'text-gray-400 hover:text-gray-300 hover:bg-gray-800/40'
                    }`}
                  >
                    <span className="text-xs sm:text-sm">{tab.icon}</span>
                    <span className="hidden sm:inline">{tab.name}</span>
                    <span className="sm:hidden">{tab.name.split('.')[0]}</span>
                  </button>
                ))}
              </div>

              {/* Code Content */}
              <div className="p-2 sm:p-4 h-64 sm:h-80 overflow-auto">
                <pre className="text-xs sm:text-sm leading-relaxed">
                  <code className="text-gray-300">
                    {codeSnippets[currentTab].content.map((line, index) => (
                      <div key={index} className="flex">
                        <span className="text-gray-600 mr-2 sm:mr-4 select-none w-4 sm:w-6 text-right flex-shrink-0">
                          {index + 1}
                        </span>
                        <span className={`break-all sm:break-normal ${
                          codeSnippets[currentTab].lang === 'bash' && line.startsWith('$')
                            ? 'text-emerald-400'
                            : codeSnippets[currentTab].lang === 'bash' && !line.startsWith('$')
                            ? 'text-gray-300'
                            : line.includes(':')
                            ? 'text-sky-400'
                            : line.includes("'") || line.includes('"')
                            ? 'text-green-400'
                            : line.includes('//')
                            ? 'text-gray-500'
                            : 'text-gray-300'
                        }`}>
                          {index <= currentLine ? (
                            index === currentLine ? (
                              <>
                                {typedText.split('\n')[index] || ''}
                                <span className="animate-pulse bg-sky-400 w-1 sm:w-2 h-4 sm:h-5 inline-block ml-1"></span>
                              </>
                            ) : (
                              typedText.split('\n')[index] || line
                            )
                          ) : (
                            ''
                          )}
                        </span>
                      </div>
                    ))}
                  </code>
                </pre>
              </div>

              {/* Status Bar */}
              <div className="flex items-center justify-between px-2 sm:px-4 py-1 sm:py-2 bg-gray-800/60 text-xs text-gray-400 border-t border-gray-700/30">
                <div className="flex items-center gap-2 sm:gap-4">
                  <span className="flex items-center gap-1">
                    <span className="hidden sm:inline">⚡</span>
                    <span className="text-xs">Ready</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="hidden sm:inline">🌟</span>
                    <span className="text-xs">{codeSnippets[currentTab].lang}</span>
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="hidden sm:inline">UTF-8</span>
                  <span>Ln {currentLine + 1}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;