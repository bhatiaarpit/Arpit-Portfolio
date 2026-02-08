import { useState, useEffect } from "react";
import ProjectSection from "../components/projectSection.jsx";
import { Briefcase, CheckCircle2, Settings } from "lucide-react";

const MyWorkSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("experience");

  // Add this useEffect to sync tab with URL hash
  useEffect(() => {
    if (window.location.hash === "#projects") {
      setActiveTab("projects");
    } else if (window.location.hash === "#experience") {
      setActiveTab("experience");
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    const section = document.getElementById("work-section");
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // Work experience data (only professional experience)
  const workExperience = [
    {
      id: 1,
      company: "Marmeto",
      position: "Software Development Engineer I",
      duration: "Oct 2024 - Present",
      type: "full-time",
      location: "Bengaluru, India",
      description: "Leading frontend development for enterprise e-commerce solutions with focus on Shopify ecosystem and React applications.",
      projects: [
        "Qwikcilver Gift Card Shopify App - Developed core features including Merchant Dashboard, Shopify Checkout UI Extensions, Customer Account Extensions",
        "Client Projects - Built and optimized Shopify storefronts for Kankatala Sarees, Borosil Ltd., Body Balance",
        "Marmeto's Internal Shopify Theme Skeleton - Contributed to improving code reusability and project setup efficiency",
        "Discount Logic & 3rd-Party API Integrations - Ensured seamless gift card functionality across Shopify storefronts"
      ],
      technologies: ["React.js", "Shopify Liquid", "TypeScript", "Tailwind CSS", "GraphQL", "REST APIs", "Redux", "Git", "GitHub", "BitBucket", "JIRA", "Figma"],
      achievements: [
        "Achieved 15-25% faster load times and increased user engagement through performance and UX enhancements",
        "Improved code reusability by 40% and reduced new project setup time by 50%",
        "Collaborated with cross-functional teams in Agile sprints, delivering high-quality, scalable features on time",
        "Maintained performance and code standards while working on enterprise-level projects"
      ],
      color: "emerald"
    },
    {
      id: 2,
      company: "Marmeto",
      position: "Frontend Trainee",
      duration: "Aug 2024 - Oct 2024",
      type: "internship",
      location: "Bengaluru, India",
      description: "Intensive training program focused on Shopify development and modern frontend technologies.",
      projects: [
        "Shopify Storefront Development - Completed over 8 real-world storefront modules during the program",
        "Figma to Shopify Conversion - Converted 10+ Figma design mockups into responsive and fully functional Shopify sections",
        "E-commerce Customization - Built and customized e-commerce storefronts using modern web technologies",
        "Team Collaboration - Worked with development team to improve page delivery time and design accuracy"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Shopify Liquid", "Shopify Plus", "React.js", "Tailwind CSS"],
      achievements: [
        "Successfully completed comprehensive Shopify development training",
        "Improved page delivery time and design accuracy through optimized code",
        "Mastered conversion of design mockups to functional Shopify sections",
        "Gained hands-on experience with 8+ real-world e-commerce projects"
      ],
      color: "blue"
    }
  ];

  const tabs = [
    { 
      id: "experience", 
      label: "Experience",
      icon: <Briefcase className="w-5 h-5" />
    },
    { 
      id: "projects", 
      label: "Projects",
      icon: <Settings className="w-5 h-5" />
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      emerald: {
        bg: "bg-emerald-900/20",
        text: "text-emerald-300",
        border: "border-emerald-700/30",
        hover: "hover:border-emerald-500/50",
        accent: "bg-emerald-500"
      },
      blue: {
        bg: "bg-blue-900/20",
        text: "text-blue-300",
        border: "border-blue-700/30",
        hover: "hover:border-blue-500/50",
        accent: "bg-blue-500"
      }
    };
    return colors[color] || colors.blue;
  };

  return (
    <section
      id="work-section"
      className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden pt-16 sm:pt-20 lg:pt-32 pb-12 sm:pb-16 lg:pb-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        
        {/* Header */}
        <div className={`md:mx-8 mb-8 text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white my-6 font-clash-display">
            My Work<span className="text-blue-500">.</span>
          </h1>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          <p className="text-gray-300 text-lg sm:text-xl mt-6 max-w-2xl mx-auto">
            Crafting digital experiences that make a difference
          </p>
        </div>

        {/* Tab Navigation */}
        <div className={`mb-12 flex justify-center gap-3 transition-all duration-1000 transform delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                window.history.replaceState(
                  null,
                  "",
                  `${window.location.pathname}#${tab.id}`
                );
              }}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[500px]">
          {activeTab === "experience" && (
            <div className="grid grid-cols-1 gap-8 lg:gap-12">
              {workExperience.map((work, index) => {
                const colorClasses = getColorClasses(work.color);
                return (
                  <div
                    key={work.id}
                    className={`transition-all duration-1000 transform ${
                      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}
                    style={{ transitionDelay: `${300 + index * 200}ms` }}
                  >
                    <div className={`bg-gray-800/20 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300 group hover:transform hover:scale-[1.02]`}>
                      
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <div className={`w-3 h-3 ${colorClasses.accent} rounded-full`}></div>
                            <h3 className="text-2xl sm:text-3xl font-bold text-white">{work.company}</h3>
                          </div>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-300">
                            <span className="font-semibold text-lg">{work.position}</span>
                            <span className="hidden sm:inline text-gray-500">•</span>
                            <span className="text-blue-400">{work.duration}</span>
                            <span className="hidden sm:inline text-gray-500">•</span>
                            <span className="text-gray-400">{work.location}</span>
                          </div>
                        </div>
                        <div className={`px-3 py-1 rounded-full text-sm font-medium ${colorClasses.bg} ${colorClasses.text} border ${colorClasses.border}`}>
                          {work.type.charAt(0).toUpperCase() + work.type.slice(1)}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                        {work.description}
                      </p>

                      {/* Content Grid */}
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                        
                        {/* Projects & Achievements */}
                        <div className="space-y-6">
                          <div>
                            <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                              <Briefcase className="w-5 h-5 text-blue-400" />
                              Key Projects
                            </h4>
                            <ul className="space-y-2">
                              {work.projects.map((project, idx) => (
                                <li key={idx} className="text-gray-300 flex items-start gap-2">
                                  <span className="text-blue-400 mt-1">•</span>
                                  <span>{project}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                              Achievements
                            </h4>
                            <ul className="space-y-2">
                              {work.achievements.map((achievement, idx) => (
                                <li key={idx} className="text-gray-300 flex items-start gap-2">
                                  <span className="text-emerald-400 mt-1">•</span>
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                            <Settings className="w-5 h-5 text-purple-400" />
                            Technologies Used
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {work.technologies.map((tech, idx) => (
                              <span
                                key={idx}
                                className={`px-3 py-1.5 text-sm font-medium rounded-lg border transition-all duration-300 cursor-default transform hover:scale-105 ${colorClasses.bg} ${colorClasses.text} ${colorClasses.border} ${colorClasses.hover}`}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {activeTab === "projects" && (
            <ProjectSection isVisible={isVisible} />
          )}
        </div>
      </div>
    </section>
  );
};

export default MyWorkSection;