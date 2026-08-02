/**
 * PageHeader (Server)
 * Consistent title block for every sub-page: kicker, h1, lead paragraph,
 * and the same ambient glow the homepage sections use.
 */

export default function PageHeader({ eyebrow, title, lead, children }) {
  return (
    <header className="relative flex flex-col gap-5">
      <span
        aria-hidden="true"
        className="glow bg-(--primary) -top-16 -left-10"
      />

      {eyebrow && <p className="eyebrow">{eyebrow}</p>}

      <h1 className="text-4xl md:text-6xl font-bold text-(--text)">{title}</h1>

      {lead && <p className="md:text-xl text-base measure">{lead}</p>}

      {children}
    </header>
  );
}
