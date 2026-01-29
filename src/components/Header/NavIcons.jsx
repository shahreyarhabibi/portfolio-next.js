/**
 * NavIcons Component (Server)
 * ----------------------------
 * Individual navigation link with icon.
 *
 * Server Component - no hooks or browser APIs used.
 */

export default function NavIcons({ link, Icon, ...props }) {
  return (
    <li>
      <a {...props} href={link}>
        <Icon className="w-6 h-6 fill-(--text) contrast-50 duration-300 transition-all hover:fill-gray-500" />
      </a>
    </li>
  );
}
