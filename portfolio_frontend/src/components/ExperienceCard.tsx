export type Experience = {
  company: string;
  role: string;
  period: string;
  location?: string;
  highlights: string[];
  tech?: string[];
};

/**
 * PUBLIC_INTERFACE
 * ExperienceCard renders a single experience entry as a styled card.
 */
export default function ExperienceCard({ experience }: { experience: Experience }) {
  const { company, role, period, location, highlights, tech } = experience;
  return (
    <article className="card p-6 h-full">
      <header className="mb-2">
        <h3 className="text-lg font-semibold">{role}</h3>
        <p className="text-muted">
          {company} • {period}
          {location ? ` • ${location}` : ""}
        </p>
      </header>
      <ul className="list-disc pl-5 space-y-2 text-[15px] text-muted">
        {highlights.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>
      {tech && tech.length > 0 ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {tech.map((t) => (
            <span className="badge" key={t}>
              {t}
            </span>
          ))}
        </div>
      ) : null}
    </article>
  );
}
