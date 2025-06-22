import { Eye, Github } from "lucide-react";

const projects = [
  {
    title: "MoovieMate",
    description: "A movie search and details app powered by a modern UI and external APIs.",
    tech: ["React", "TMDB API", "Tailwind CSS"],
    image: "/Projects/1.png",
    demo: "https://mooviemate.vercel.app/",
    code: "https://github.com/bhatiaarpit/MoovieMate",
  },
  {
    title: "Lallan - Lucknow Based Chatbot",
    description: "A chatbot tailored for Lucknow, built using advanced LLMs.",
    tech: ["React", "Vite", "Tailwind CSS"],
    image: "/Projects/5.png",
    demo: "https://lallanrag.vercel.app/",
    code: "https://github.com/bhatiaarpit/",
  },
  {
    title: "On The Go",
    description: "A travel planning website that simplifies itineraries and bookings.",
    tech: ["React", "Tailwind CSS"],
    image: "/Projects/2.png",
    demo: "https://onthegotravel.netlify.app/",
    code: "https://github.com/bhatiaarpit/Onthego",
  },
  {
    title: "Face - Signup/Login",
    description: "A minimalistic login/signup interface for authentication workflows.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/Projects/8.png",
    demo: "#",
    code: "https://github.com/bhatiaarpit/Face-Login-Signup",
  },
  {
    title: "Ray-Ban Website",
    description: "An eCommerce front-end inspired by Ray-Ban's branding.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/Projects/4.png",
    demo: "https://bhatiaarpit.github.io/Ray-ban-project/",
    code: "https://github.com/bhatiaarpit/Ray-ban-project",
  },
  {
    title: "NewspaperNow",
    description: "A simple newspaper-style blog layout built with responsive design.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/Projects/6.png",
    demo: "https://bhatiaarpit.github.io/NewspaperNOW/",
    code: "https://github.com/bhatiaarpit/NewspaperNOW",
  },
  {
    title: "Web Chatty",
    description: "A real-time web-based chat application.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/Projects/7.png",
    demo: "#",
    code: "https://github.com/bhatiaarpit/WebChatty",
  },
  {
    title: "Terminal Saga",
    description: "An e-learning terminal interface styled for developers.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/Projects/9.png",
    demo: "https://bhatiaarpit.github.io/TerminalSAGA-E-Learning-Website/",
    code: "https://github.com/bhatiaarpit/TerminalSAGA-E-Learning-Website",
  },
  {
    title: "Vanify - Online Music Player",
    description: "A front-end music player web app for streaming audio content.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/Projects/3.png",
    demo: "https://bhatiaarpit.github.io/Vanify_Online_Music_player/",
    code: "https://github.com/bhatiaarpit/Vanify_Online_Music_player",
  }
];

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-32 relative overflow-hidden"
    >
      {/* Enhanced Decorative Blur Backgrounds */}
      <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] bg-sky-500 opacity-10 blur-[150px] rounded-full z-0" />
      <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] bg-emerald-500 opacity-10 blur-[150px] rounded-full z-0" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-cyan-400 opacity-5 blur-[100px] rounded-full z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Enhanced Header Section */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="text-sky-400 text-sm font-medium tracking-wider uppercase mb-2 block">
              Portfolio
            </span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-sky-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
              My Work
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-500 to-emerald-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            A curated collection of projects showcasing my expertise in building 
            <span className="text-sky-400 font-medium"> high-performing</span>, 
            <span className="text-emerald-400 font-medium"> user-focused</span> digital experiences.
          </p>
        </div>

        {/* Enhanced Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-sky-500/10 transition-all duration-500 overflow-hidden hover:-translate-y-2"
            >
              {/* Enhanced Project Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Floating Action Buttons */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-sky-500/80 backdrop-blur-sm rounded-full hover:bg-sky-500 transition-colors duration-200"
                  >
                    <Eye size={16} className="text-white" />
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-emerald-500/80 backdrop-blur-sm rounded-full hover:bg-emerald-500 transition-colors duration-200"
                  >
                    <Github size={16} className="text-white" />
                  </a>
                </div>
              </div>

              {/* Enhanced Content */}
              <div className="p-8 space-y-5">
                <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Enhanced Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1.5 rounded-full bg-gradient-to-r from-sky-500/10 to-emerald-500/10 text-cyan-300 border border-sky-500/20 hover:border-sky-400/40 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Enhanced Actions */}
                <div className="flex justify-between items-center pt-6 border-t border-white/10">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sky-400 hover:text-sky-300 transition-all duration-200 hover:scale-105"
                  >
                    <Eye size={18} />
                    <span className="text-sm font-medium">Live Demo</span>
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-all duration-200 hover:scale-105"
                  >
                    <Github size={18} />
                    <span className="text-sm font-medium">Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <div className="mt-24 text-center">
          <div className="inline-block">
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-sky-500 via-emerald-500 to-cyan-500 text-white font-semibold hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/25"
            >
              <span>Let's Build Something Amazing Together</span>
              <div className="w-2 h-2 bg-white rounded-full group-hover:animate-pulse"></div>
            </a>
          </div>
          <p className="text-gray-500 text-sm mt-4">
            Ready to turn your ideas into reality?
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;