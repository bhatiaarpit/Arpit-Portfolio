import { ArrowUpRight, Code2 } from "lucide-react";
import { FaDocker, FaFigma, FaGitAlt, FaNodeJs, FaPython, FaReact, FaShopify } from "react-icons/fa";
import { SiExpress, SiFramer, SiGraphql, SiNextdotjs, SiOpenai, SiPostgresql, SiPrisma, SiTailwindcss, SiTypescript } from "react-icons/si";
import { TbBrandThreejs } from "react-icons/tb";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import activities from "../data/activities.json";
import projects from "../data/projects.json";

const tech = [
  { name: "React", icon: FaReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Shopify", icon: FaShopify },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "Node.js", icon: FaNodeJs },
  { name: "GraphQL", icon: SiGraphql },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Framer", icon: SiFramer },
  { name: "Three.js", icon: TbBrandThreejs },
  { name: "Figma", icon: FaFigma },
  { name: "Git", icon: FaGitAlt },
  { name: "Python", icon: FaPython },
  { name: "Docker", icon: FaDocker },
  { name: "Prisma", icon: SiPrisma },
  { name: "Express", icon: SiExpress },
  { name: "OpenAI", icon: SiOpenai },
];
const getProjectForActivity = (activity) =>
  projects.find((project) => project.title === activity.title);

const ActivityCard = ({ activity }) => {
  const project = getProjectForActivity(activity);
  const image = project?.image || "/og-image.png";
  return (
    <motion.li whileHover={{ y: -4 }} transition={{ duration: 0.2 }} className={`group min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl transition-colors hover:border-white/25 hover:bg-white/[0.08] ${activity.index >= 8 ? "hidden lg:block" : ""}`}>
      <Link to={activity.href} className="flex h-full flex-col" aria-label={`Open ${activity.title}`}>
        <img src={image} alt={`${activity.title} preview`} className="h-28 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-32" />
        <div className="flex h-full flex-col p-4 sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <ArrowUpRight size={16} className="text-graphite-faint transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-graphite-ink" aria-hidden="true" />
        </div>
        <span className="mt-5 text-[10px] uppercase tracking-[0.16em] text-graphite-faint">{activity.type}</span>
        <h3 className="mt-2 text-sm font-medium leading-snug text-graphite-ink sm:text-base">{activity.title}</h3>
        <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-graphite-mute">{activity.description}</p>
        <span className="mt-auto pt-5 text-[10px] uppercase tracking-[0.12em] text-graphite-faint">{activity.date}</span>
        </div>
      </Link>
    </motion.li>
  );
};

const BentoGrid = () => (
  <section id="overview" aria-labelledby="overview-heading" className="border-t border-graphite-line pb-24 pt-10 sm:pt-14">
    <div className="mx-auto max-w-6xl px-5 sm:px-8">
      <h2 id="overview-heading" className="sr-only">Home overview</h2>
      <div className="grid gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,7fr)] lg:gap-8">
        <div className="min-w-0">
          <div className="mb-5 flex items-end justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-graphite-faint">Tech I work with</p>
              <p className="mt-2 text-sm text-graphite-mute">Tools I use to turn ideas into products.</p>
            </div>
            <Code2 size={18} className="text-graphite-ink" aria-hidden="true" />
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] py-5 backdrop-blur-xl">
            <motion.div className="flex w-max gap-3 px-4" animate={{ x: [0, -720] }} transition={{ duration: 24, repeat: Infinity, ease: "linear" }}>
              {[...tech, ...tech].map((item, index) => {
                const TechIcon = item.icon;
                return <span key={`${item.name}-${index}`} title={item.name} className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-lg text-graphite-mute grayscale transition-colors hover:bg-white/10 hover:text-graphite-ink"><TechIcon aria-hidden="true" /></span>;
              })}
            </motion.div>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-graphite to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-graphite to-transparent" />
          </div>
          <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.16em] text-graphite-faint">Now</p>
            <p className="mt-3 text-sm leading-relaxed text-graphite-mute">Building thoughtful e-commerce experiences, useful tools, and interfaces that feel clear on every screen.</p>
          </div>
        </div>
        <div className="min-w-0">
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-graphite-faint">What is happening</p>
              <p className="mt-2 text-sm text-graphite-mute">Projects, writing, work, and community in one place.</p>
            </div>
            <Link to="/more" className="shrink-0 text-sm text-graphite-mute hover:text-graphite-ink">Explore more</Link>
          </div>
          <motion.ul layout className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
            {activities.map((activity, index) => <ActivityCard key={`${activity.type}-${activity.title}`} activity={{ ...activity, index }} />)}
          </motion.ul>
          <Link to="/more" className="mt-6 inline-flex text-sm text-graphite-mute underline-offset-4 hover:text-graphite-ink hover:underline">Explore all activity</Link>
        </div>
      </div>
    </div>
  </section>
);

export default BentoGrid;
