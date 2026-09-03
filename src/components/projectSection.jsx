import { Eye } from "lucide-react";
import projects from "../data/projects.json";

const ProjectsSection = () => {
  return (
    <section id="projects" aria-label="Projects">
      <ul className="grid gap-8 sm:grid-cols-2">
        {projects.map((project) => (
          <li
            key={project.id}
            className="overflow-hidden rounded-xl border border-graphite-line bg-graphite-raised"
          >
            <img
              src={project.image}
              alt={`${project.name} preview`}
              className="h-44 w-full object-cover grayscale"
            />
            <div className="space-y-3 p-5">
              <h3 className="text-lg text-graphite-ink">{project.name}</h3>
              <p className="text-sm text-graphite-mute">{project.description}</p>
              <ul className="flex flex-wrap gap-2">
                <li className="text-xs text-graphite-faint">Project</li>
                {project.tech?.map((tech) => (
                  <li
                    key={tech}
                    className="text-xs text-graphite-faint"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
              <div className="flex gap-4 pt-2 text-sm">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-graphite-ink hover:underline"
                >
                  <Eye size={16} aria-hidden="true" />
                  View project
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
