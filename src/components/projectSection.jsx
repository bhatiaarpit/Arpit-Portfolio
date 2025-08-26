import { Eye, Github } from "lucide-react";

const projects = [
  {
    title: "Graphell",
    description:
      "A robust full-stack task tracking and team collaboration platform featuring real-time updates, secure authentication, and cloud deployment. Built with modern scalable technologies for performance and maintainability.",
    tech: ["Next.js", "TypeScript", "Node.js", "Prisma ORM", "PostgreSQL", "AWS S3", "JWT", "REST API"],
    image: "/Projects/11.png",
    demo: "https://github.com/bhatiaarpit/GraphellProject",
    code: "https://github.com/bhatiaarpit/GraphellProject",
  },
  {
    title: "GDG Lucknow",
    description:
      "An official community website for Google Developer Group Lucknow, designed with responsive layouts, smooth animations, and optimized for high performance using static generation.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    image: "/Projects/12.png",
    demo: "https://gdg.lucknow.dev/",
    code: "https://github.com/bhatiaarpit/gdg_lucknow",
  },
  {
    title: "Twitter UI Clone",
    description:
      "A clean, responsive frontend clone of Twitter with dynamic image uploads and hashtag-based filtering, offering an intuitive user interface using modern React tools.",
    tech: ["React.js", "Tailwind CSS", "React Hooks"],
    image: "/Projects/10.png",
    demo: "https://cloned-twitter.vercel.app/",
    code: "https://github.com/bhatiaarpit/Twitter-Clone",
  },
  {
    title: "MoovieMate",
    description:
      "A movie discovery and browsing app powered by The Movie Database (TMDB) API, allowing users to search, view ratings, and get detailed information with a polished UI.",
    tech: ["React.js", "TMDB API", "Tailwind CSS", "Axios"],
    image: "/Projects/1.png",
    demo: "https://mooviemate.vercel.app/",
    code: "https://github.com/bhatiaarpit/MoovieMate",
  },
  {
    title: "Lallan - Lucknow Based Chatbot",
    description:
      "A localized chatbot tailored for Lucknow users, integrating advanced language models with a user-friendly interface. Designed for easy deployment and fast interactions.",
    tech: ["React.js", "Vite", "Tailwind CSS", "LLMs", "OpenAI API"],
    image: "/Projects/5.png",
    demo: "https://lallanrag.vercel.app/",
    code: "https://github.com/bhatiaarpit/",
  },
  {
    title: "On The Go",
    description:
      "A travel planning platform that helps users create and manage itineraries, discover destinations, and explore travel options — all in one place.",
    tech: ["React.js", "Tailwind CSS", "React Router"],
    image: "/Projects/2.png",
    demo: "https://onthegotravel.netlify.app/",
    code: "https://github.com/bhatiaarpit/Onthego",
  },
  {
    title: "Face - Signup/Login",
    description:
      "A minimalistic authentication UI with responsive design and smooth transitions, built to serve as a template for login and signup flows.",
    tech: ["HTML5", "CSS3", "Vanilla JavaScript", "Form Validation"],
    image: "/Projects/8.png",
    demo: "#",
    code: "https://github.com/bhatiaarpit/Face-Login-Signup",
  },
  {
    title: "Ray-Ban Website",
    description:
      "An eCommerce landing page inspired by Ray-Ban's branding, featuring interactive product displays and elegant UI components.",
    tech: ["HTML5", "CSS3", "JavaScript (DOM Manipulation)", "Responsive Design"],
    image: "/Projects/4.png",
    demo: "https://bhatiaarpit.github.io/Ray-ban-project/",
    code: "https://github.com/bhatiaarpit/Ray-ban-project",
  },
  {
    title: "NewspaperNow",
    description:
      "A retro-themed blog layout designed to mimic a newspaper, with clear typographic hierarchy and mobile responsiveness.",
    tech: ["HTML5", "CSS3", "JavaScript", "Flexbox/Grid"],
    image: "/Projects/6.png",
    demo: "https://bhatiaarpit.github.io/NewspaperNOW/",
    code: "https://github.com/bhatiaarpit/NewspaperNOW",
  },
  {
    title: "Web Chatty",
    description:
      "A browser-based real-time chat app enabling multiple users to interact via WebSockets. Emphasizes UI simplicity and user interaction.",
    tech: ["HTML5", "CSS3", "JavaScript", "WebSockets (planned)"],
    image: "/Projects/7.png",
    demo: "#",
    code: "https://github.com/bhatiaarpit/WebChatty",
  },
  {
    title: "Terminal Saga",
    description:
      "A developer-focused e-learning platform styled like a terminal interface, enhancing the coding experience for students and self-learners.",
    tech: ["HTML5", "CSS3", "JavaScript", "Custom Terminal UI"],
    image: "/Projects/9.png",
    demo: "https://bhatiaarpit.github.io/TerminalSAGA-E-Learning-Website/",
    code: "https://github.com/bhatiaarpit/TerminalSAGA-E-Learning-Website",
  },
  {
    title: "Vanify - Online Music Player",
    description:
      "An elegant front-end music player web application with playlist and audio controls, optimized for seamless music streaming UX.",
    tech: ["HTML5", "CSS3", "JavaScript", "Audio API"],
    image: "/Projects/3.png",
    demo: "https://bhatiaarpit.github.io/Vanify_Online_Music_player/",
    code: "https://github.com/bhatiaarpit/Vanify_Online_Music_player",
  }
];

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className=" text-white relative overflow-hidden"
    >
      {/* Enhanced Decorative Blur Backgrounds */}
      <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] bg-sky-500 opacity-10 blur-[150px] rounded-full z-0" />
      <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] bg-emerald-500 opacity-10 blur-[150px] rounded-full z-0" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-cyan-400 opacity-5 blur-[100px] rounded-full z-0" />

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
    </section>
  );
};

export default ProjectsSection;