export default function NavIcons({ link, Icon, ...props }) {
  return (
    <li>
      <a {...props} href={link}>
        <Icon
          className={`w-6 h-6 fill-(--text) contrast-50 duration-300 transition-all hover:fill-gray-500 `}
        />
      </a>
    </li>
  );
}
