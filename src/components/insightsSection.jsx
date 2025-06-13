const insights = [
  {
    title: "How I Built a GraphQL-Powered Expense Tracker",
    description:
      "A deep dive into Graphell — my journey building a data-driven platform to analyze spending using GraphQL and AI.",
    image: "/insights/graphell-blog.png",
    tags: ["GraphQL", "AI", "Productivity"],
    link: "#",
    date: "June 2025",
  },
  {
    title: "Scaling Dropshipping with Shopify & Liquid",
    description:
      "Lessons from developing Goodslockup, a performant storefront for modern e-commerce workflows.",
    image: "/insights/goodslockup-blog.png",
    tags: ["Shopify", "E-commerce", "Design"],
    link: "#",
    date: "May 2025",
  },
  {
    title: "Designing Hyperlocal Ride Experiences",
    description:
      "Breaking down how we approached UX, location APIs, and reliability in building RideNow for tier-2 cities.",
    image: "/insights/ridenow-blog.png",
    tags: ["UX", "React Native", "Case Study"],
    link: "#",
    date: "April 2025",
  },
];

const InsightsSection = () => {
  return (
    <section
      id="insights"
      className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-24 relative overflow-hidden"
    >
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-[-50px] right-[-50px] w-[300px] h-[300px] bg-yellow-500 opacity-10 blur-[120px] rounded-full z-0" />
      <div className="absolute bottom-[-50px] left-[-50px] w-[300px] h-[300px] bg-pink-600 opacity-10 blur-[120px] rounded-full z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent mb-4">
            Insights
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            Explore my thoughts, experiences, and experiments from the world of tech, design, and productivity.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {insights.map((post, idx) => (
            <div
              key={idx}
              className="group bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Blog Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300" />
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">
                <span className="text-sm text-gray-400">{post.date}</span>
                <h3 className="text-xl font-semibold text-white">{post.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{post.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded-full bg-yellow-600/10 text-yellow-300 border border-yellow-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Read More Link */}
                <div className="pt-4">
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-pink-400 hover:text-white transition-colors duration-200 text-sm font-medium"
                  >
                    Read More →
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
            className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-yellow-500 to-pink-600 text-white font-semibold hover:scale-105 transition-transform"
          >
            Let’s Talk Ideas
          </a>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;