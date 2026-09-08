import { ArrowUpRight } from "lucide-react";
import { FaDocker, FaFigma, FaGitAlt, FaNodeJs, FaPython, FaReact, FaShopify } from "react-icons/fa";
import { SiExpress, SiFramer, SiGraphql, SiMongodb, SiNextdotjs, SiOpenai, SiPostgresql, SiPrisma, SiRedis, SiTailwindcss, SiTypescript } from "react-icons/si";
import { TbBrandThreejs } from "react-icons/tb";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import GitHubCalendar from "react-github-calendar";
import activities from "../data/activities.json";
import projects from "../data/projects.json";

const tech = [
  { name: "React", icon: FaReact, color: "text-[#61dafb]" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  { name: "TypeScript", icon: SiTypescript, color: "text-[#3178c6]" },
  { name: "Shopify", icon: FaShopify, color: "text-[#96bf48]" },
  { name: "Tailwind", icon: SiTailwindcss, color: "text-[#06b6d4]" },
  { name: "Node.js", icon: FaNodeJs, color: "text-[#339933]" },
  { name: "GraphQL", icon: SiGraphql, color: "text-[#e10098]" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#4169e1]" },
  { name: "MongoDB", icon: SiMongodb, color: "text-[#47a248]" },
  { name: "Redis", icon: SiRedis, color: "text-[#dc382d]" },
  { name: "Express", icon: SiExpress, color: "text-gray-300" },
  { name: "Python", icon: FaPython, color: "text-[#3776ab]" },
  { name: "Prisma", icon: SiPrisma, color: "text-white" },
  { name: "Three.js", icon: TbBrandThreejs, color: "text-white" },
  { name: "Framer", icon: SiFramer, color: "text-[#0055ff]" },
  { name: "Figma", icon: FaFigma, color: "text-[#f24e1e]" },
  { name: "Git", icon: FaGitAlt, color: "text-[#f05032]" },
  { name: "OpenAI", icon: SiOpenai, color: "text-white" },
];
const getProjectForActivity = (activity) =>
  projects.find((project) => project.title === activity.title);

const techRows = [tech.slice(0, 9), tech.slice(9)];

const TechCarousel = () => (
  <div className="relative overflow-hidden">
    <div className="space-y-3">
      {techRows.map((row, rowIndex) => (
        <motion.div
          key={rowIndex}
          className="flex w-max gap-2"
          animate={{ x: rowIndex === 0 ? [0, -430] : [-430, 0] }}
          transition={{ duration: rowIndex === 0 ? 22 : 26, repeat: Infinity, ease: "linear" }}
        >
          {[...row, ...row].map((item, index) => {
            const TechIcon = item.icon;
            return (
              <span
                key={`${item.name}-${index}`}
                title={item.name}
                className="flex h-16 w-14 min-w-14 flex-col items-center justify-center gap-1 rounded-xl border border-white/10 bg-white/[0.05] text-[10px] text-graphite-mute transition-colors hover:bg-white/10"
              >
                <TechIcon className={`text-xl ${item.color}`} aria-hidden="true" />
                <span className="truncate px-1">{item.name}</span>
              </span>
            );
          })}
        </motion.div>
      ))}
    </div>
    <div className="pointer-events-none absolute inset-y-0 left-0 w-5 bg-gradient-to-r from-graphite-raised to-transparent" />
    <div className="pointer-events-none absolute inset-y-0 right-0 w-5 bg-gradient-to-l from-graphite-raised to-transparent" />
  </div>
);

const GitHubActivity = () => (
  <div className="mt-7 border-t border-graphite-line pt-6">
    <div className="mb-4 flex items-center justify-between">
      <p className="text-xs uppercase tracking-[0.16em] text-graphite-faint">GitHub activity</p>
      <span className="text-[10px] text-graphite-faint">@bhatiaarpit</span>
    </div>
    <div className="overflow-hidden rounded-xl border border-white/10 bg-black p-3">
      <div className="w-max max-w-none">
        <GitHubCalendar
          username="bhatiaarpit"
          colorScheme="dark"
          theme={{ dark: ["#111111", "#3a3a3a", "#666666", "#999999", "#f4f4f4"] }}
          hideTotalCount
          hideColorLegend
          fontSize={10}
          blockSize={9}
          blockMargin={2}
        />
      </div>
    </div>
  </div>
);

const ActivityCard = ({ activity }) => {
  const project = getProjectForActivity(activity);
  const image = project?.image || "/og-image.png";
  return (
    <motion.li whileHover={{ y: -4 }} transition={{ duration: 0.2 }} className={`group relative min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl transition-colors hover:border-white/25 hover:bg-white/[0.08] ${activity.index >= 8 ? "hidden lg:block" : ""}`}>
      <Link to={activity.href} className="flex h-full flex-col" aria-label={`Open ${activity.title}`}>
        <img src={image} alt={`${activity.title} preview`} className="h-36 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-32" />
        <div className="flex h-full flex-col p-3 pr-10 sm:p-4 sm:pr-10">
        <span className="text-[9px] uppercase tracking-[0.16em] text-graphite-faint">{activity.type}</span>
        <h3 className="mt-1.5 text-sm font-medium leading-snug text-graphite-ink sm:text-base">{activity.title}</h3>
        <p className="mt-1.5 line-clamp-2 text-xs leading-[1.45] text-graphite-mute">{activity.description}</p>
        {project?.tech && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.tech.slice(0, 3).map((technology) => (
              <span key={technology} className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-1 text-[9px] leading-none text-graphite-faint">
                {technology}
              </span>
            ))}
          </div>
        )}
        <span className="mt-3 text-[9px] uppercase tracking-[0.12em] text-graphite-faint">{activity.date}</span>
        </div>
        <ArrowUpRight size={15} className="absolute bottom-4 right-4 text-graphite-faint transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-graphite-ink" aria-hidden="true" />
      </Link>
    </motion.li>
  );
};

const BentoGrid = () => (
  <section id="overview" aria-labelledby="overview-heading" className="border-t border-graphite-line pb-24 pt-10 sm:pt-14">
    <div className="mx-auto max-w-none px-4 sm:px-6">
      <h2 id="overview-heading" className="sr-only">Home overview</h2>
      <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,7fr)] lg:gap-8">
        <div className="min-w-0 lg:sticky lg:top-6 lg:self-start">
          <div className="mb-5">
            <p className="text-xs uppercase tracking-[0.16em] text-graphite-faint">Tech I work with</p>
            <p className="mt-2 text-sm text-graphite-mute">Tools I use to turn ideas into products.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-xl sm:p-5">
            <TechCarousel />
            <GitHubActivity />
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-xs uppercase tracking-[0.16em] text-graphite-faint">Now</p>
              <p className="mt-3 text-sm leading-relaxed text-graphite-mute">Building thoughtful e-commerce experiences, useful tools, and interfaces that feel clear on every screen.</p>
            </div>
          </div>
        </div>
        <div className="min-w-0">
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-graphite-faint">What is happening</p>
              <p className="mt-2 text-sm text-graphite-mute">Projects, writing, work, and community in one place.</p>
            </div>
          </div>
          <motion.ul layout className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
            {activities.map((activity, index) => <ActivityCard key={`${activity.type}-${activity.title}`} activity={{ ...activity, index }} />)}
          </motion.ul>
          <Link
            to="/more"
            className="mx-auto mt-6 flex w-fit items-center gap-2 rounded-2xl border border-graphite-line bg-graphite-raised px-5 py-2.5 text-sm text-graphite-ink transition-colors hover:border-graphite-mute hover:bg-graphite-hover"
          >
            Explore more
            <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default BentoGrid;
