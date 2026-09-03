import { Linkedin, Github, Twitter } from "lucide-react";

const workTech = [
  "JavaScript",
  "React",
  "Remix",
  "Shopify Liquid",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Node.js",
  "MongoDB",
  "Git",
  "Figma",
];

const AboutMeSection = () => {
  return (
    <section id="about-section" className="pt-24 pb-20">
      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        <p className="text-xs uppercase tracking-[0.16em] text-graphite-faint">About</p>
        <h1 className="mt-3 font-serif text-4xl text-graphite-ink sm:text-5xl">
          Frontend developer in Bengaluru
        </h1>

        <div className="mt-12 grid gap-12 lg:grid-cols-12">
          <div className="space-y-5 text-graphite-mute lg:col-span-8">
            <p className="text-lg text-graphite-ink">
              I build fast, readable web experiences — mostly Shopify and React.
            </p>
            <p>
              I work as SDE 1 at Marmeto, shipping storefronts and product UI with
              Liquid, React, and modern frontend tools.
            </p>
            <p>
              I care about clean interfaces, measurable performance, and code
              that other people can actually maintain.
            </p>

            <div className="flex gap-2 pt-2">
              <a
                href="https://www.linkedin.com/in/bhatiaarpit"
                className="rounded-full border border-graphite-line p-2 text-graphite-mute hover:text-graphite-ink"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/bhatiaarpit"
                className="rounded-full border border-graphite-line p-2 text-graphite-mute hover:text-graphite-ink"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://x.com/arpit_bhatia_"
                className="rounded-full border border-graphite-line p-2 text-graphite-mute hover:text-graphite-ink"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-4">
            <h2 className="text-xs uppercase tracking-[0.16em] text-graphite-faint">
              Tools
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {workTech.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-graphite-line px-3 py-1 text-sm text-graphite-mute"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutMeSection;
