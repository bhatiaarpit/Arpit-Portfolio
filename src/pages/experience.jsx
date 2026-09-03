import ExperienceSection from "../components/ExperienceSection.jsx";
import experiences from "../data/experience.json";

const Experience = () => {
  return (
    <section className="pt-24 pb-20">
      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        <p className="text-xs uppercase tracking-[0.16em] text-graphite-faint">Experience</p>
        <h1 className="mt-3 font-serif text-4xl text-graphite-ink sm:text-5xl">
          Where I have worked
        </h1>
        <ExperienceSection experiences={experiences} />
      </div>
    </section>
  );
};

export default Experience;