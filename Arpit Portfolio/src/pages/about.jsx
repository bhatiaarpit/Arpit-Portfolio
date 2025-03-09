import { useState, useEffect } from "react";
import { Mail, Phone, Github, Linkedin, ChevronDown, ChevronRight } from "lucide-react";

const About = () => {
  const [data, setData] = useState(null);
  const [isExpanded, setIsExpanded] = useState({
    bio: true,
    interests: false,
    education: false,
  });

  useEffect(() => {
    fetch("/data/about.json") // Adjust path if needed
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch data");
        return response.json();
      })
      .then((json) => setData(json))
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  if (!data) return <p className="text-center text-gray-500">Loading...</p>;

  return (
    <section className="flex flex-col md:flex-row h-auto min-h-screen bg-gray-900 text-gray-300 font-mono">
      {/* Sidebar - Personal Info */}
      <aside className="w-full md:w-1/3 lg:w-1/4 bg-gray-800 border-b md:border-b-0 md:border-r border-gray-700 p-4 space-y-4">
        <h2 className="text-green-400 text-lg">📁 Personal Info</h2>

        {/* Collapsible Sections */}
        <div className="space-y-2">
          {Object.keys(data.personal_info).map((section) => (
            <div key={section}>
              <button
                onClick={() => setIsExpanded((prev) => ({ ...prev, [section]: !prev[section] }))}
                className="flex items-center w-full text-left text-gray-400 hover:text-white"
              >
                {isExpanded[section] ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                <span className="ml-2 capitalize">{section}</span>
              </button>
              {isExpanded[section] && (
                <p className="text-sm text-gray-500 ml-6">{data.personal_info[section]}</p>
              )}
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-700 pt-4">
          <h2 className="text-green-400">📞 Contacts</h2>
          <p className="flex items-center mt-1">
            <Mail className="mr-2 text-green-400" size={16} /> {data.contacts.email}
          </p>
          <p className="flex items-center">
            <Phone className="mr-2 text-green-400" size={16} /> {data.contacts.phone}
          </p>
          <div className="flex mt-2 space-x-4">
            <a href={data.contacts.github} target="_blank" rel="noopener noreferrer">
              <Github className="text-gray-400 hover:text-white cursor-pointer" size={20} />
            </a>
            <a href={data.contacts.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin className="text-gray-400 hover:text-white cursor-pointer" size={20} />
            </a>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Bio Section */}
        <h1 className="text-xl text-green-400">/** About {data.name} */</h1>
        <p className="text-gray-400">// Welcome to my portfolio.</p>

        {data.bio.map((item, index) => (
          <p key={index} className="mt-2 text-gray-300">
            <span className="text-orange-400">[{item.title}]</span> {item.description}
          </p>
        ))}

        {/* Skills Section */}
        <div className="mt-6 bg-gray-800 p-4 rounded-lg border border-gray-700">
          <h2 className="text-lg text-blue-400">// Programming Languages & Tools</h2>
          <p className="text-sm text-gray-500">@{data.username} - Updated {data.skills.updated} ago</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 mt-2">
            {data.skills.languages.map((tech) => (
              <span key={tech} className="bg-gray-700 px-2 py-1 rounded text-white text-sm">{tech}</span>
            ))}
          </div>
        </div>

        {/* OS & Other Tools */}
        <div className="mt-4 bg-gray-800 p-4 rounded-lg border border-gray-700">
          <h2 className="text-lg text-blue-400">// Operating Systems & Tools</h2>
          <p className="text-sm text-gray-500">@{data.username} - Updated {data.os.updated} ago</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 mt-2">
            {data.os.list.map((os) => (
              <span key={os} className="bg-gray-700 px-2 py-1 rounded text-white text-sm">{os}</span>
            ))}
          </div>
        </div>
      </main>
    </section>
  );
};

export default About;
