import { useState, useEffect } from "react";
import {
  FaReact,
  FaNodeJs,
  FaShopify,
  FaPython,
  FaGitAlt,
  FaFigma,
  FaDocker,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiGraphql,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiExpress,
  SiPrisma,
  SiFramer,
  SiOpenai,
} from "react-icons/si";
import { TbBrandThreejs } from "react-icons/tb";
import GitHubCalendar from "react-github-calendar";

const BentoGrid = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentCodeTab, setCurrentCodeTab] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [currentLine, setCurrentLine] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    const section = document.getElementById("bento-section");
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const workAreas = [
    { name: "Frontend Development", color: "from-blue-400 to-cyan-500" },
    { name: "Full Stack Development", color: "from-blue-400 to-cyan-500" },
    { name: "Shopify Development", color: "from-cyan-400 to-sky-500" },
    { name: "Gen AI Integration", color: "from-sky-400 to-blue-500" },
  ];

  const techStackRow1 = [
    { icon: <FaReact className="text-[#61DAFB]" />, name: "React" },
    { icon: <SiNextdotjs className="text-white" />, name: "Next.js" },
    { icon: <SiTypescript className="text-[#3178C6]" />, name: "TypeScript" },
    { icon: <FaShopify className="text-[#96BF48]" />, name: "Shopify" },
    { icon: <SiTailwindcss className="text-[#06B6D4]" />, name: "Tailwind" },
    { icon: <FaNodeJs className="text-[#339933]" />, name: "Node.js" },
    { icon: <SiGraphql className="text-[#E10098]" />, name: "GraphQL" },
    { icon: <SiPostgresql className="text-[#4169E1]" />, name: "PostgreSQL" },
    { icon: <SiMongodb className="text-[#47A248]" />, name: "MongoDB" },
    { icon: <SiRedis className="text-[#DC382D]" />, name: "Redis" },
  ];

  const techStackRow2 = [
    { icon: <SiExpress className="text-gray-300" />, name: "Express" },
    { icon: <FaPython className="text-[#3776AB]" />, name: "Python" },
    { icon: <SiPrisma className="text-white" />, name: "Prisma" },
    { icon: <TbBrandThreejs className="text-white" />, name: "Three.js" },
    { icon: <SiFramer className="text-[#0055FF]" />, name: "Framer" },
    { icon: <FaFigma className="text-[#F24E1E]" />, name: "Figma" },
    { icon: <FaGitAlt className="text-[#F05032]" />, name: "Git" },
    { icon: <SiOpenai className="text-white" />, name: "OpenAI" },
    { icon: <FaDocker className="text-[#2496ED]" />, name: "Docker" },
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
        "};",
      ],
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
        "$ npm run build-dreams",
      ],
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
        "};",
      ],
    },
  ];

  const codeTabs = [
    { name: "about-me.js", icon: "📄" },
    { name: "terminal", icon: "💻" },
    { name: "passion.tsx", icon: "⚛️" },
  ];

  // typing effect
  useEffect(() => {
    if (!isVisible) return;

    const currentSnippet = codeSnippets[currentCodeTab];
    const lines = currentSnippet.content;

    if (currentLine < lines.length) {
      const timer = setTimeout(() => {
        setTypedText((prev) => {
          const prevLines = prev.split("\n");
          const currentLineText = lines[currentLine];
          const typedForLine = prevLines[currentLine] || "";
          const nextChar = currentLineText[typedForLine.length];

          if (nextChar) {
            const newLines = [...prevLines];
            newLines[currentLine] = typedForLine + nextChar;
            return newLines.join("\n");
          } else {
            setCurrentLine((l) => l + 1);
            return prev + "\n";
          }
        });
      }, 50);

      return () => clearTimeout(timer);
    }
  }, [isVisible, currentCodeTab, currentLine, typedText]);

  // reset typing on tab change
  useEffect(() => {
    setTypedText("");
    setCurrentLine(0);
  }, [currentCodeTab]);

  const builds = [
    "E-commerce Platforms",
    "Admin Dashboards",
    "AI-Powered Tools",
    "Landing Pages",
    "Design Systems",
    "API Integrations",
  ];

  return (
    <section
      id="bento-section"
      className="min-h-screen bg-[#000] relative overflow-hidden pt-12 pb-16 sm:py-20 font-satoshi"
    >
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scroll-left 15s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 15s linear infinite;
        }
        .animate-scroll-left:hover,
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-sky-400 rounded-full animate-ping"></div>
        <div className="absolute top-20 left-20 w-72 sm:w-96 h-72 sm:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-72 sm:w-96 h-72 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-sky-500/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Bento Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-4">
          {/* Work Areas */}
          <div
            className={`lg:col-span-6 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-blue-500/20 p-4 sm:p-6 hover:border-blue-400/40 transition-all duration-500 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4 flex items-center gap-2 font-clash">
              What I Work On
            </h3>
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {workAreas.map((area, index) => (
                <div
                  key={area.name}
                  className="group relative overflow-hidden rounded-lg sm:rounded-xl bg-gradient-to-r from-blue-500/10 to-transparent p-3 sm:p-4 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 flex items-center justify-center text-center"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${area.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  ></div>
                  <span className="relative text-gray-200 text-xs sm:text-sm font-medium font-satoshi">
                    {area.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/* GitHub Contribution Map */}
          <div
            className={`lg:col-span-6 bg-gradient-to-br from-cyan-500/5 to-sky-500/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-cyan-500/20 p-4 sm:p-6 hover:border-cyan-400/40 transition-all duration-500 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: "150ms" }}
          >
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <span className="text-xs text-gray-400 font-mono">
                @bhatiaarpit
              </span>
            </div>

            <div className="overflow-x-auto github-scroll">
              <div className="min-w-[450px] [&::-webkit-scrollbar]:hidden">
                <GitHubCalendar
                  username="bhatiaarpit"
                  blockSize={10}
                  blockMargin={4}
                  fontSize={12}
                  colorScheme="dark"
                  hideTotalCount={false}
                  hideColorLegend={false}
                  theme={{
                    dark: [
                      "#0b1220",
                      "#0ea5e9",
                      "#22c55e",
                      "#38bdf8",
                      "#60a5fa",
                    ],
                  }}
                />
              </div>
            </div>
          </div>

          {/* Code Editor - Color matched to Bento theme */}
          <div
            className={`lg:col-span-6 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-blue-500/20 overflow-hidden hover:border-blue-400/40 transition-all duration-500 flex flex-col ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            {/* Window Header */}
            <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 backdrop-blur-sm border-b border-blue-500/20">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-gray-400 text-xs sm:text-sm ml-2 font-mono">
                  VS Code
                </span>
              </div>
              <div className="text-gray-500 text-xs hidden sm:block font-mono">
                portfolio
              </div>
            </div>

            {/* Tabs */}
            <div className="flex bg-[#1e1e2e]/60 backdrop-blur-sm border-b border-blue-500/20 overflow-x-auto">
              {codeTabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentCodeTab(index)}
                  className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 text-xs sm:text-sm transition-all duration-200 border-r border-blue-500/20 whitespace-nowrap font-mono ${
                    currentCodeTab === index
                      ? "bg-blue-500/20 text-cyan-400 border-b-2 border-cyan-400"
                      : "text-gray-500 hover:text-gray-300 hover:bg-blue-500/10"
                  }`}
                >
                  <span className="text-xs sm:text-sm">{tab.icon}</span>
                  <span className="hidden sm:inline">{tab.name}</span>
                  <span className="sm:hidden">{tab.name.split(".")[0]}</span>
                </button>
              ))}
            </div>

            {/* ✅ Code Content (takes remaining space) */}
            <div className="p-4 sm:p-6 flex-1 overflow-auto min-h-0">
              <pre className="text-xs sm:text-sm font-mono leading-relaxed">
                <code className="text-gray-300">
                  {codeSnippets[currentCodeTab].content.map((line, index) => (
                    <div key={index} className="flex">
                      <span className="text-gray-600 mr-2 sm:mr-4 select-none w-4 sm:w-6 text-right flex-shrink-0 text-xs">
                        {index + 1}
                      </span>

                      <span
                        className={`break-all sm:break-normal flex-1 ${
                          codeSnippets[currentCodeTab].lang === "bash" &&
                          line.startsWith("$")
                            ? "text-emerald-400"
                            : codeSnippets[currentCodeTab].lang === "bash" &&
                              !line.startsWith("$")
                            ? "text-gray-300"
                            : line.includes(":")
                            ? "text-cyan-400"
                            : line.includes("'") || line.includes('"')
                            ? "text-green-400"
                            : line.includes("//")
                            ? "text-gray-500"
                            : "text-gray-300"
                        }`}
                      >
                        {index <= currentLine ? (
                          index === currentLine ? (
                            <>
                              {typedText.split("\n")[index] || ""}
                              <span className="animate-pulse bg-cyan-400 w-1 sm:w-2 h-4 sm:h-5 inline-block ml-1"></span>
                            </>
                          ) : (
                            typedText.split("\n")[index] || line
                          )
                        ) : (
                          ""
                        )}
                      </span>
                    </div>
                  ))}
                </code>
              </pre>
            </div>

            {/* ✅ Status Bar (always stays at bottom now) */}
            <div className="flex items-center justify-between px-3 sm:px-4 py-1.5 sm:py-2 bg-[#1e1e2e]/80 backdrop-blur-sm text-xs text-gray-400 border-t border-blue-500/20 font-mono">
              <div className="flex items-center gap-2 sm:gap-4">
                <span className="flex items-center gap-1">
                  <span className="hidden sm:inline">⚡</span>
                  <span className="text-xs">Ready</span>
                </span>

                <span className="flex items-center gap-1">
                  <span className="hidden sm:inline">🌟</span>
                  <span className="text-xs">
                    {codeSnippets[currentCodeTab].lang.toUpperCase()}
                  </span>
                </span>
              </div>

              <div className="flex items-center gap-2 text-xs">
                <span className="hidden sm:inline">UTF-8</span>
                <span>Ln {currentLine + 1}, Col 1</span>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-6 flex flex-col gap-3 sm:gap-4">
            {/* Tech Stack */}
            <div
              className={`bg-gradient-to-br from-cyan-500/5 to-sky-500/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-cyan-500/20 p-4 sm:p-6 hover:border-cyan-400/40 transition-all duration-500 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 text-center flex items-center justify-center gap-2 font-clash">
                Tech Arsenal
              </h3>

              {/* Row 1 */}
              <div className="relative overflow-hidden mb-3 sm:mb-4">
                <div className="flex gap-3 sm:gap-4 animate-scroll-left">
                  {[...techStackRow1, ...techStackRow1].map((tech, index) => (
                    <div
                      key={`row1-${index}`}
                      className="flex-shrink-0 flex flex-col items-center gap-1.5 sm:gap-2 p-3 sm:p-4 w-20 sm:w-24 bg-gradient-to-br from-blue-500/10 to-transparent rounded-2xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 group"
                    >
                      <div className="text-2xl sm:text-3xl transition-transform duration-300">
                        {tech.icon}
                      </div>
                      <span className="text-[10px] sm:text-xs text-gray-400 text-center font-medium whitespace-nowrap font-satoshi">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Row 2 */}
              <div className="relative overflow-hidden">
                <div className="flex gap-3 sm:gap-4 animate-scroll-right">
                  {[...techStackRow2, ...techStackRow2].map((tech, index) => (
                    <div
                      key={`row2-${index}`}
                      className="flex-shrink-0 flex flex-col items-center gap-1.5 sm:gap-2 p-3 sm:p-4 w-20 sm:w-24 bg-gradient-to-br from-blue-500/10 to-transparent rounded-2xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 group"
                    >
                      <div className="text-2xl sm:text-3xl transition-transform duration-300">
                        {tech.icon}
                      </div>
                      <span className="text-[10px] sm:text-xs text-gray-400 text-center font-medium whitespace-nowrap font-satoshi">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What I Build */}
              <div className="mt-5 sm:mt-6 pt-5 sm:pt-6 border-t border-blue-500/20">
                <div className="relative overflow-hidden">
                  <div className="flex gap-3 sm:gap-4 animate-scroll-left select-none">
                    {[...builds, ...builds].map((item, index) => (
                      <div
                        key={`build-${index}`}
                        className="flex-shrink-0 flex items-center gap-1.5 sm:gap-2 text-gray-300 text-xs sm:text-sm px-4 sm:px-5 py-2.5 sm:py-3 bg-gradient-to-r from-blue-500/10 to-transparent rounded-full border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 group"
                      >
                        <span className="text-cyan-400 text-xs sm:text-sm group-hover:scale-125 transition-transform">
                          ✦
                        </span>
                        <span className="whitespace-nowrap font-satoshi">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Quote */}
            <div
              className={`bg-gradient-to-br from-blue-500/5 via-cyan-500/5 to-sky-500/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-blue-500/20 p-6 sm:p-8 hover:border-blue-400/40 transition-all duration-500 flex flex-col justify-center items-center text-center ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: "500ms" }}
            >
              <p className="text-lg sm:text-2xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-500 bg-clip-text mb-2 sm:mb-3 leading-relaxed font-clash">
                Great products are built at the intersection of clean code and
                great UX.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
