import ProjectSection from "../components/projectSection.jsx";

const MyWorkSection = () => {
  return (
    <section id="work-section" className="pt-24 pb-20">
      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        <p className="text-xs uppercase tracking-[0.16em] text-graphite-faint">Projects</p>
        <h1 className="mt-3 font-serif text-4xl text-graphite-ink sm:text-5xl">
          All projects
        </h1>
        <div className="mt-10"><ProjectSection /></div>
      </div>
    </section>
  );
};

export default MyWorkSection;
