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
      className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-24 relative overflow-hidden"
    >
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-[-50px] right-[-50px] w-[300px] h-[300px] bg-blue-500 opacity-10 blur-[120px] rounded-full z-0" />
      <div className="absolute bottom-[-50px] left-[-50px] w-[300px] h-[300px] bg-purple-600 opacity-10 blur-[120px] rounded-full z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
            My Work
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            A selection of projects where I’ve built high-performing, user-focused digital experiences.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300" />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded-full bg-blue-600/10 text-blue-300 border border-blue-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex justify-between items-center pt-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-blue-400 hover:text-white transition-colors duration-200"
                  >
                    <Eye size={16} />
                    <span className="text-sm">Demo</span>
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-purple-400 hover:text-white transition-colors duration-200"
                  >
                    <Github size={16} />
                    <span className="text-sm">Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <a
            href="#contact"
            className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:scale-105 transition-transform"
          >
            Let’s Build Something Together
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;