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

  // Experience data
  const experiences = [
    {
      role: "Full-stack Developer",
      company: "Marmeto",
      period: "2023 - Present",
      type: "Full-time",
      description: "Specializing in e-commerce development with Shopify, React, and Node.js"
    },
    {
      role: "Frontend Developer",
      company: "Previous Company",
      period: "2022 - 2023",
      type: "Contract",
      description: "Built responsive web applications using React, TypeScript, and modern CSS"
    },
    {
      role: "Web Developer",
      company: "Freelance",
      period: "2021 - 2022",
      type: "Freelance",
      description: "Delivered 50+ projects focusing on user experience and performance"
    }
  ];

  // Work technologies
  const workTech = ["JavaScript", "TypeScript", "HTML", "CSS", "React", "Redux", "NodeJS", "Express", "Postgres", "MongoDB", "GitHub", "Jira", "Heroku", "AWS"];
  
  // Fun technologies
  const funTech = ["Rust", "Tailwind", "Java", "Spring", "Figma", "Whimsical", "Planetscale", "GraphQL", "Python", "FastAPI"];

  return (
    <section
      id="about-section"
      className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden pt-32 pb-20"
    >
      <BackgroundEffects />

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        
        {/* Header */}
        <div className={`mb-16 text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-4">
            About<span className="text-blue-500">.</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          
          {/* Profile Section */}
          <div className={`lg:col-span-2 transition-all duration-1000 transform delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-gray-800/20 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300">
              
              {/* Greeting */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  H
                </div>
                <div>
                  <span className="text-gray-300 text-lg">
                    Hey! I'm <span className="text-white font-semibold">Arpit</span>, if you haven't already gathered that by now.
                  </span>
                </div>
              </div>

              {/* Main Description */}
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I'm a passionate web developer from India, blending design and code to craft exceptional digital experiences. 
                  I specialize in e-commerce development, particularly with <span className="text-green-400 font-semibold">Shopify</span>, 
                  but love building with whatever tools are right for the job.
                </p>
                
                <p>
                  Currently working full-time at <span className="text-emerald-400 font-semibold">Marmeto</span> while 
                  completing my final year of studies. I also collaborate with design teams from time to time 
                  (once a designer, always a designer, right?).
                </p>
                
                <p>
                  Outside of work, I still love to explore new technologies. Any given weekend you'll find me 
                  building some cool projects ☁️ I even teach and mentor others if you're looking to learn!
                </p>
                
                <p className="text-blue-400">
                  I'm passively looking for new opportunities where I can merge my love for code with my 
                  creative passion. If you think you've got an opening that I might like, let's connect! 🔗
                </p>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-gray-700/50">
                <div className="flex items-center gap-4">
                  <span className="text-gray-400 font-medium">My links</span>
                  <div className="flex gap-3">
                    <a href="#" className="w-10 h-10 bg-gray-700/50 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-300">
                      <span className="text-white">in</span>
                    </a>
                    <a href="#" className="w-10 h-10 bg-gray-700/50 hover:bg-gray-600 rounded-lg flex items-center justify-center transition-colors duration-300">
                      <span className="text-white">gh</span>
                    </a>
                    <a href="#" className="w-10 h-10 bg-gray-700/50 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-colors duration-300">
                      <span className="text-white">x</span>
                    </a>
                    <a href="#" className="w-10 h-10 bg-gray-700/50 hover:bg-orange-600 rounded-lg flex items-center justify-center transition-colors duration-300">
                      <span className="text-white">dr</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tech Stack Sidebar */}
          <div className={`transition-all duration-1000 transform delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            
            {/* Work Tech */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
                  <span className="text-white text-sm">💼</span>
                </div>
                <h3 className="text-white font-semibold">Use at work</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {workTech.map((tech, index) => (
                  <TechBadge key={tech} tech={tech} delay={index * 50} />
                ))}
              </div>
            </div>

            {/* Fun Tech */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-purple-500 rounded flex items-center justify-center">
                  <span className="text-white text-sm">🎮</span>
                </div>
                <h3 className="text-white font-semibold">Use for fun</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {funTech.map((tech, index) => (
                  <TechBadge key={tech} tech={tech} delay={index * 50} variant="fun" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <ExperienceSection experiences={experiences} isVisible={isVisible} />

        {/* Stats Section */}
        <StatsSection isVisible={isVisible} />
      </div>
    </section>
  );
};

// Tech Badge Component
const TechBadge = ({ tech, delay, variant = "work" }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <span
      className={`px-3 py-1.5 text-sm font-medium rounded-lg border transition-all duration-300 cursor-default transform hover:scale-105 ${
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

// Experience Section Component
const ExperienceSection = ({ experiences, isVisible }) => {
  return (
    <div className={`mb-20 transition-all duration-1000 transform delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          My <span className="text-blue-500">Experience</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Here's a timeline of my professional journey and the impact I've made along the way
        </p>
      </div>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-500 to-emerald-500"></div>

        {experiences.map((exp, index) => (
          <ExperienceCard key={index} experience={exp} index={index} />
        ))}
      </div>
    </div>
  );
};

// Experience Card Component
const ExperienceCard = ({ experience, index }) => {
  const [isCardVisible, setIsCardVisible] = useState(false);
  const isEven = index % 2 === 0;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCardVisible(true);
    }, 800 + (index * 200));
    
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div className={`relative flex items-center mb-8 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      {/* Timeline Dot */}
      <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-900 z-10 animate-pulse"></div>

      {/* Card */}
      <div className={`ml-12 md:ml-0 md:w-5/12 transition-all duration-700 transform ${
        isCardVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      } ${isEven ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30 hover:border-gray-600/50 hover:bg-gray-800/40 transition-all duration-300 group">
          <div className="flex items-center justify-between mb-3">
            <span className={`px-3 py-1 text-xs font-medium rounded-full ${
              experience.type === 'Full-time' ? 'bg-green-900/30 text-green-400 border border-green-700/30' :
              experience.type === 'Contract' ? 'bg-blue-900/30 text-blue-400 border border-blue-700/30' :
              'bg-purple-900/30 text-purple-400 border border-purple-700/30'
            }`}>
              {experience.type}
            </span>
            <span className="text-gray-400 text-sm">{experience.period}</span>
          </div>
          
          <h3 className="text-white font-semibold text-lg mb-1 group-hover:text-blue-400 transition-colors duration-300">
            {experience.role}
          </h3>
          <p className="text-blue-400 font-medium mb-3">{experience.company}</p>
          <p className="text-gray-300 text-sm leading-relaxed">{experience.description}</p>
        </div>
      </div>
    </div>
  );
};

// Stats Section Component
const StatsSection = ({ isVisible }) => {
  const stats = [
    { number: "3+", label: "Years Experience", color: "from-blue-500 to-cyan-500" },
    { number: "50+", label: "Projects Delivered", color: "from-emerald-500 to-green-500" },
    { number: "100%", label: "Client Satisfaction", color: "from-purple-500 to-pink-500" },
    { number: "24/7", label: "Available Support", color: "from-orange-500 to-red-500" }
  ];

  return (
    <div className={`transition-all duration-1000 transform delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="text-center group">
            <div className="relative overflow-hidden rounded-xl p-6 bg-gray-800/20 backdrop-blur-sm border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300 group-hover:scale-105">
              <div className={`text-3xl md:text-4xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm font-medium">
                {stat.label}
              </div>
              <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Background Effects Component
const BackgroundEffects = () => (
  <>
    <div className="absolute inset-0">
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
      <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping delay-1000"></div>
      <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-2000"></div>
      <div className="absolute bottom-1/4 right-1/5 w-2 h-2 bg-cyan-400 rounded-full animate-ping delay-700"></div>
    </div>
    
    <div className="absolute inset-0">
      <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-32 right-20 w-56 h-56 bg-gradient-to-r from-cyan-500/8 to-emerald-500/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-10 w-32 h-32 bg-gradient-to-r from-emerald-500/12 to-blue-500/12 rounded-full blur-2xl animate-pulse delay-2000"></div>
    </div>
  </>
);

export default AboutMeSection;