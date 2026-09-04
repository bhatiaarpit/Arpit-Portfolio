import { Eye } from "lucide-react";
import projects from "../data/projects.json";

const ProjectsSection = () => {
  return (
    <section id="projects" aria-label="Projects">
      <ul className="grid gap-8 sm:grid-cols-2">
        {projects.map((project) => (
          <li
            key={project.title}
            className="overflow-hidden rounded-xl border border-graphite-line bg-graphite-raised"
          >
            <img
              src={project.image}
              alt={`${project.title} preview`}
              className="h-44 w-full object-cover"
            />
            <div className="space-y-3 p-5">
              <h3 className="text-lg text-graphite-ink">{project.title}</h3>
              <p className="text-sm text-graphite-mute">{project.description}</p>
              <ul className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
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
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-graphite-ink hover:underline"
                >
                  <Eye size={16} aria-hidden="true" />
                  Live demo
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-graphite-mute hover:text-graphite-ink"
                >
                  <Eye size={16} aria-hidden="true" />
                  Source code
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
