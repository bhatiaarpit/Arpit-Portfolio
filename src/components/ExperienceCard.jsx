const ExperienceCard = ({ experience }) => {
  return (
    <li className="grid gap-2 border-b border-graphite-line py-8 sm:grid-cols-[9rem_1fr] sm:gap-8">
      <p className="text-sm text-graphite-faint">{experience.period}</p>
      <div>
        <h3 className="text-graphite-ink">
          {experience.role}
          <span className="text-graphite-mute"> · {experience.company}</span>
        </h3>
        <p className="mt-1 text-xs uppercase tracking-wide text-graphite-faint">
          {experience.type}
        </p>
        <p className="mt-3 text-sm text-graphite-mute">{experience.description}</p>
      </div>
    </li>
  );
};

export default ExperienceCard;
