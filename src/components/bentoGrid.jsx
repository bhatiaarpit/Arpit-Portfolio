import { Link } from "react-router-dom";
import GitHubCalendar from "react-github-calendar";
import projects from "../data/projects.json";
import experiences from "../data/experience.json";

const workAreas = [
  "Frontend development",
  "Shopify storefronts",
  "Full-stack apps",
  "Gen AI integrations",
];

const tech = [
  "React",
  "Next.js",
  "TypeScript",
  "Shopify",
  "Tailwind",
  "Node.js",
  "GraphQL",
  "PostgreSQL",
];

const BentoGrid = () => {
  return (
    <section
      id="overview"
      aria-labelledby="overview-heading"
      className="border-t border-graphite-line pb-24 pt-6"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2 id="overview-heading" className="sr-only">
          Overview
        </h2>

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="space-y-10 lg:col-span-4">
            <div>
              <h3 className="text-xs uppercase tracking-[0.16em] text-graphite-faint">
                Focus
              </h3>
              <ul className="mt-4 space-y-2 text-graphite-mute">
                {workAreas.map((area) => (
                  <li key={area}>{area}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-[0.16em] text-graphite-faint">
                Stack
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {tech.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-graphite-line px-3 py-1 text-sm text-graphite-mute"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-10 lg:col-span-8">
            <div>
              <div className="mb-4 flex items-baseline justify-between">
                <h3 className="text-xs uppercase tracking-[0.16em] text-graphite-faint">
                  Selected work
                </h3>
                <Link
                  to="/my-work"
                  className="text-sm text-graphite-mute hover:text-graphite-ink"
                >
                  All work
                </Link>
              </div>
              <ul className="divide-y divide-graphite-line border-y border-graphite-line">
                {projects.slice(0, 5).map((item) => (
                  <li key={item.id}>
                    <Link
                      to="/my-work#projects"
                      className="flex items-baseline justify-between gap-4 py-4 hover:text-white"
                    >
                      <span className="min-w-0 break-words text-graphite-ink">{item.name}</span>
                      <span className="shrink-0 text-sm text-graphite-faint">View project</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="mb-4 flex items-baseline justify-between">
                <h3 className="text-xs uppercase tracking-[0.16em] text-graphite-faint">
                  Experience
                </h3>
                <Link to="/experience" className="text-sm text-graphite-mute hover:text-graphite-ink">
                  Full history
                </Link>
              </div>
              <ul className="divide-y divide-graphite-line border-y border-graphite-line">
                {experiences.slice(0, 3).map((item) => (
                  <li key={`${item.company}-${item.period}`}>
                    <Link to="/experience" className="flex items-baseline justify-between gap-4 py-4 hover:text-white">
                      <span className="text-graphite-ink">{item.role} · {item.company}</span>
                      <span className="shrink-0 text-sm text-graphite-faint">{item.period}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-xs uppercase tracking-[0.16em] text-graphite-faint">
                GitHub
              </h3>
              <div className="overflow-x-auto github-scroll">
                <div className="min-w-[420px]">
                  <GitHubCalendar
                    username="bhatiaarpit"
                    blockSize={11}
                    blockMargin={3}
                    fontSize={12}
                    colorScheme="dark"
                    theme={{
                      dark: ["#1a1a1a", "#3d3d3d", "#6b6b6b", "#a3a3a3", "#e5e5e5"],
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
