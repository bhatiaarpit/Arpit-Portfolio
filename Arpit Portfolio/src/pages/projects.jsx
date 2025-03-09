import { useState, useEffect } from "react";
import { Folder, FolderOpen, File, Github, ChevronDown } from "lucide-react";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [expanded, setExpanded] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    fetch("/data/projects.json") // Adjust path if needed
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Error loading projects:", err));
  }, []);

  if (!projects.length) return <p className="text-center text-gray-500">Loading...</p>;

  return (
    <section className="flex flex-col md:flex-row h-auto min-h-screen bg-gray-900 text-gray-300 font-mono">
      {/* Sidebar / Dropdown for mobile */}
      <aside className="md:w-1/4 bg-gray-800 border-b md:border-r border-gray-700 p-4">
        {/* Mobile Toggle Button */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)} 
          className="flex md:hidden items-center justify-between w-full text-green-400 text-lg border-b border-gray-700 pb-2"
        >
          Projects <ChevronDown size={16} className={`${menuOpen ? "rotate-180" : ""} transition-transform`} />
        </button>

        {/* Sidebar Menu */}
        <div className={`${menuOpen ? "block" : "hidden"} md:block`}>
          <button onClick={() => setExpanded(!expanded)} className="flex items-center text-green-400 mt-3">
            {expanded ? <FolderOpen size={16} /> : <Folder size={16} />}
            <span className="ml-2">projects</span>
          </button>
          <ul className={`ml-4 mt-2 ${expanded ? "block" : "hidden"}`}>
            {projects.map((proj) => (
              <li key={proj.id} className="flex items-center text-gray-400 hover:text-white py-1">
                <File size={14} className="mr-2" /> {proj.name}
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 sm:p-6">
        <h1 className="text-lg sm:text-xl text-green-400">/** Projects */</h1>
        <p className="text-gray-400">// A selection of my work.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {projects.map((proj) => (
            <div key={proj.id} className="bg-gray-800 p-4 rounded-lg border border-gray-700 shadow-md">
              <h2 className="text-lg text-orange-400">Project {proj.id} // _{proj.name}</h2>
              <img src={proj.image} alt={proj.name} className="mt-2 rounded-lg object-cover w-full h-40 sm:h-48" />
              <p className="text-gray-400 mt-2">{proj.description}</p>
              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center mt-4 bg-gray-700 text-green-400 px-4 py-2 rounded hover:bg-gray-600"
              >
                <Github size={16} className="mr-2" /> view-project-on-gitHub
              </a>
            </div>
          ))}
        </div>
      </main>
    </section>
  );
};

export default Projects;
