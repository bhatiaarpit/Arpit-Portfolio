import { useState, useEffect } from "react";
import ProjectSection from "../components/projectSection.jsx";

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
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6z" />
        </svg>
      )
    },
    { 
      id: "projects", 
      label: "Projects",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
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
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white my-6">
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
                              <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                              </svg>
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
                              <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
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
                            <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
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

        {/* Call to Action */}
        <div className={`mt-16 text-center transition-all duration-1000 transform delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="rounded-2xl p-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to work together?
            </h3>
            <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
              I'm always excited to take on new challenges and collaborate on innovative projects. Let's create something amazing!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="px-8 py-3 bg-gray-800/50 hover:bg-gray-700/50 text-white font-semibold rounded-lg border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300"
              >
                View Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyWorkSection;