const insights = [
  {
    title: "How I Built a GraphQL-Powered Expense Tracker",
    description:
      "Building Graphell: GraphQL, data, and a practical spending dashboard.",
    tags: ["GraphQL", "AI"],
    link: "#",
    date: "June 2025",
  },
  {
    title: "Scaling Dropshipping with Shopify & Liquid",
    description: "Notes from a performant Shopify storefront workflow.",
    tags: ["Shopify"],
    link: "#",
    date: "May 2025",
  },
  {
    title: "Designing Hyperlocal Ride Experiences",
    description: "UX and location APIs for RideNow in tier-2 cities.",
    tags: ["UX"],
    link: "#",
    date: "April 2025",
  },
];

const InsightsSection = () => {
  return (
    <section id="insights" className="pt-24 pb-20">
      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        <p className="text-xs uppercase tracking-[0.16em] text-graphite-faint">Writing</p>
        <h1 className="mt-3 font-serif text-4xl text-graphite-ink sm:text-5xl">
          Insights
        </h1>
        <p className="mt-4 max-w-xl text-graphite-mute">
          Short notes on products I’ve built.
        </p>

        <ul className="mt-12 divide-y divide-graphite-line border-y border-graphite-line">
          {insights.map((post) => (
            <li key={post.title} className="py-8">
              <p className="text-sm text-graphite-faint">{post.date}</p>
              <h2 className="mt-2 text-xl text-graphite-ink">{post.title}</h2>
              <p className="mt-2 text-sm text-graphite-mute">{post.description}</p>
              <p className="mt-3 text-xs text-graphite-faint">{post.tags.join(" · ")}</p>
              {post.link !== "#" && (
                <a
                  href={post.link}
                  className="mt-4 inline-block text-sm text-graphite-ink underline-offset-4 hover:underline"
                >
                  Read
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default InsightsSection;
