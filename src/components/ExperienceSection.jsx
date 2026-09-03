import ExperienceCard from "./ExperienceCard";

const ExperienceSection = ({ experiences }) => {
  return (
    <section className="mt-20 border-t border-graphite-line pt-16" aria-labelledby="experience-heading">
      <h2 id="experience-heading" className="font-serif text-3xl text-graphite-ink">
        Experience
      </h2>
      <ol className="mt-10 space-y-0">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={experience.company + experience.period}
            experience={experience}
            index={index}
          />
        ))}
      </ol>
      <div className="mt-12">
        <a
          href="https://drive.google.com/file/d/1UaChAJQPNYH8Uh2dOKvdALgdLyxb22pf/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex rounded-full border border-graphite-line px-5 py-2.5 text-sm text-graphite-ink hover:bg-graphite-raised"
        >
          Download resume
        </a>
      </div>
    </section>
  );
};

export default ExperienceSection;
