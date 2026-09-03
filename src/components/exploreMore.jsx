import { Github, ExternalLink } from "lucide-react";

const exploreCards = [
  {
    title: "Open source",
    description: "Forks and community work.",
    link: "https://github.com/bhatiaarpit?tab=repositories&type=fork",
  },
  {
    title: "Experiments",
    description: "Small builds with new tools.",
    link: "https://github.com/bhatiaarpit?tab=repositories",
  },
  {
    title: "Side projects",
    description: "Weekend and hackathon work.",
    link: "https://github.com/bhatiaarpit?tab=repositories",
  },
];

const ExploreMore = () => {
  return (
    <section id="explore" className="pt-24 pb-20">
      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        <p className="text-xs uppercase tracking-[0.16em] text-graphite-faint">More</p>
        <h1 className="mt-3 font-serif text-4xl text-graphite-ink sm:text-5xl">
          Other work
        </h1>
        <p className="mt-4 max-w-xl text-graphite-mute">
          Experiments and repositories beyond the main case studies.
        </p>

        <ul className="mt-12 divide-y divide-graphite-line border-y border-graphite-line">
          {exploreCards.map((card) => (
            <li key={card.title} className="flex flex-wrap items-baseline justify-between gap-4 py-6">
              <div>
                <h2 className="text-graphite-ink">{card.title}</h2>
                <p className="mt-1 text-sm text-graphite-mute">{card.description}</p>
              </div>
              <a
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-graphite-mute hover:text-graphite-ink"
              >
                Open <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://github.com/bhatiaarpit"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-graphite-ink px-5 py-3 text-sm font-medium text-graphite"
        >
          <Github className="h-4 w-4" aria-hidden="true" />
          GitHub
        </a>
      </div>
    </section>
  );
};

export default ExploreMore;
