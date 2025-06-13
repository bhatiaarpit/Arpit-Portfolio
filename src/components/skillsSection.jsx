import { useState, useEffect } from "react";

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );

    const section = document.getElementById("skills-section");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Frontend",
      icon: "🎨",
      skills: ["React", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Redux"]
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "REST APIs", "GraphQL", "JWT", "Socket.io"]
    },
    {
      title: "E-commerce",
      icon: "🛒",
      skills: ["Shopify", "Shopify Plus", "Liquid", "Shopify CLI", "Theme Development", "Shopify App Development", "Webhooks", "Payment APIs"]
    },
    {
      title: "Cloud & DevOps",
      icon: "☁️",
      skills: ["AWS", "Docker", "Git", "GitHub Actions", "Vercel", "Netlify", "Firebase", "Heroku"]
    },
    {
      title: "Tools & Others",
      icon: "🔧",
      skills: ["VS Code", "Postman", "Figma", "Photoshop", "Linux", "npm/yarn", "Webpack", "Vite"]
    }
  ];

  return (
    <section
      id="skills-section"
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black relative overflow-hidden py-20"
    >
      <BackgroundEffects />
      <div className="container mx-auto px-6 relative z-10 flex flex-col justify-center min-h-screen">
        <SectionHeader isVisible={isVisible} />
        <SkillsGrid skillCategories={skillCategories} isVisible={isVisible} />
        <CallToAction isVisible={isVisible} />
      </div>
    </section>
  );
};

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

// ------------------------------
// Section Header
// ------------------------------
const SectionHeader = ({ isVisible }) => (
  <div className={`mb-16 text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
    <div className="mb-4">
      <span className="text-lg md:text-xl text-gray-300 font-light">Technical Expertise</span>
    </div>
    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
      <span className="bg-gradient-to-r from-sky-400 via-emerald-400 to-cyan-500 bg-clip-text text-transparent">
        Skills & Technologies
      </span>
    </h2>
    <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
      Crafting digital solutions with a comprehensive toolkit of modern technologies that power
      <span className="text-sky-400 font-medium"> scalable applications</span> and
      <span className="text-emerald-400 font-medium"> seamless user experiences</span>.
    </p>
  </div>
);

// ------------------------------
// Skills Grid
// ------------------------------
const SkillsGrid = ({ skillCategories, isVisible }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
    {skillCategories.map((category, categoryIndex) => (
      <SkillCard
        key={category.title}
        category={category}
        categoryIndex={categoryIndex}
        isVisible={isVisible}
      />
    ))}
  </div>
);

// ------------------------------
// Skill Card
// ------------------------------
const SkillCard = ({ category, categoryIndex, isVisible }) => (
  <div
    className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
    style={{ transitionDelay: `${categoryIndex * 150}ms` }}
  >
    <div className="group relative bg-gray-900/40 backdrop-blur-xl rounded-2xl border border-gray-700/50 shadow-2xl hover:bg-gray-900/60 hover:border-sky-400/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-sky-500/10 h-full flex flex-col">
      
      {/* Card Header */}
      <div className="p-6 pb-4 flex-shrink-0">
        <div className="flex items-center gap-3 mb-3">
          <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
            {category.icon}
          </div>
          <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-sky-400 group-hover:to-emerald-500 group-hover:bg-clip-text transition-all duration-300">
            {category.title}
          </h3>
        </div>
        <div className="w-12 h-0.5 bg-gradient-to-r from-sky-400 to-emerald-500 group-hover:w-full transition-all duration-500"></div>
      </div>

      {/* Skills Container */}
      <div className="px-6 pb-6 flex-grow flex flex-col">
        <div className="flex flex-wrap gap-2 min-h-[120px] content-start">
          {category.skills.map((skill, skillIndex) => (
            <SkillTag
              key={skill}
              skill={skill}
              skillIndex={skillIndex}
              categoryIndex={categoryIndex}
            />
          ))}
        </div>
        
        {/* Skill Count Badge */}
        <div className="mt-4 pt-4 border-t border-gray-700/30">
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500 font-medium">
              {category.skills.length} Technologies
            </span>
            <div className="flex items-center gap-1">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    i < Math.min(3, Math.ceil(category.skills.length / 3))
                      ? 'bg-emerald-400 group-hover:bg-sky-400'
                      : 'bg-gray-700'
                  }`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 via-transparent to-emerald-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  </div>
);

// ------------------------------
// Skill Tag
// ------------------------------
const SkillTag = ({ skill, skillIndex, categoryIndex }) => (
  <span
    className="inline-block px-3 py-1.5 bg-gray-800/50 backdrop-blur-sm text-gray-300 text-sm font-medium rounded-full border border-gray-700/40 hover:border-sky-400/50 hover:text-sky-400 hover:bg-sky-400/10 hover:scale-105 transition-all duration-300 cursor-default whitespace-nowrap"
    style={{
      animationDelay: `${(categoryIndex * 150) + (skillIndex * 50)}ms`,
      transitionDelay: `${skillIndex * 25}ms`
    }}
  >
    {skill}
  </span>
);

// ------------------------------
// Call to Action
// ------------------------------
const CallToAction = ({ isVisible }) => (
  <div className={`text-center transition-all duration-1000 delay-800 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
    <div className="inline-flex items-center gap-3 bg-gray-900/40 backdrop-blur-md rounded-full px-6 py-3 border border-gray-700/50 shadow-xl hover:bg-gray-900/60 hover:border-emerald-400/30 transition-all duration-300 group">
      <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse group-hover:animate-ping"></div>
      <span className="text-gray-300 text-sm font-medium group-hover:text-emerald-400 transition-colors duration-300">
        Always ready to learn and explore new technologies
      </span>
    </div>
  </div>
);

export default SkillsSection;