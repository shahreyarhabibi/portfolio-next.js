/**
 * NavIcons Component (Server)
 * ----------------------------
 * Individual navigation link with icon.
 *
 * Server Component - no hooks or browser APIs used.
 *
 * The label is rendered as visually-hidden text (not just a `title` tooltip) so
 * the link has real anchor text for screen readers and crawlers.
 */

export default function NavIcons({ link, Icon, title }) {
  return (
    <li>
      <a href={link} title={title} className="flex items-center">
        <Icon className="w-6 h-6 fill-(--text) contrast-50 duration-300 transition-all hover:fill-gray-500" />
        <span className="sr-only">{title}</span>
      </a>
    </li>
  );
}
