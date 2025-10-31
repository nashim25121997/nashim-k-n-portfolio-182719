import { ReactNode } from "react";

/**
 * PUBLIC_INTERFACE
 * Section component provides consistent section spacing and headings.
 */
export default function Section({
  id,
  title,
  description,
  children,
}: {
  id: string;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="section">
      <div className="container">
        <header className="mb-4">
          <h2 className="text-xl font-semibold">{title}</h2>
          {description ? <p className="text-muted mt-1">{description}</p> : null}
        </header>
        {children}
      </div>
    </section>
  );
}
