export type Education = {
  institution: string;
  degree: string;
  period: string;
  details?: string[];
};

/**
 * PUBLIC_INTERFACE
 * EducationCard renders a single education entry as a styled card.
 */
export default function EducationCard({ education }: { education: Education }) {
  const { institution, degree, period, details } = education;
  return (
    <article className="card p-6 h-full">
      <header className="mb-2">
        <h3 className="text-lg font-semibold">{degree}</h3>
        <p className="text-muted">
          {institution} • {period}
        </p>
      </header>
      {details && details.length > 0 ? (
        <ul className="list-disc pl-5 space-y-2 text-[15px] text-muted">
          {details.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
