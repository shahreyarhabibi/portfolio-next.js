/**
 * SectionHeading (Server)
 * The same underlined heading SectionTitles renders on the homepage, minus the
 * theme-context blur blob — so sub-pages can stay server components.
 */

export default function SectionHeading({ as: Tag = "h2", children, id }) {
  return (
    <Tag id={id} className="rule font-bold text-(--text) md:text-3xl text-2xl">
      {children}
    </Tag>
  );
}
