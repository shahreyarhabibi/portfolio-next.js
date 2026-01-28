import { BiSun, BiMoon } from "react-icons/bi";
import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext.jsx";
import NavIcons from "./NavIcons";
import logo from "../../assets/logo.svg";
import HomeIcon from "../../assets/icons/HomeIcon.jsx";
import AboutIcon from "../../assets/icons/AboutIcon.jsx";
import ExperienceIcon from "../../assets/icons/ExperienceIcon.jsx";
import ServicesIcon from "../../assets/icons/ServicesIcon.jsx";
import ContactIcon from "../../assets/icons/MailIcon.jsx";

export default function Header() {
  const { isLight, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="md:w-300 md:m-auto z-10">
      <nav className="flex justify-center md:justify-between gap-50 items-center px-8 mt-6">
        <img
          className={`w-18 h-18 md:w-15 md:h-15 transition duration-300 ${
            isLight ? "filter invert" : ""
          }`}
          src={logo}
          alt=""
        />
        <ul
          className={`z-10 md:pb-3 md:pt-3 fixed left-1/2 -translate-x-1/2 bottom-10 md:bottom-auto bg-(--navbarbackground) md:backdrop-blur-xs backdrop-blur-lg flex border border-(--navbarborder) rounded-4xl py-3 px-6 gap-6 shadow-md`}
        >
          <NavIcons title="Home" link="#" Icon={HomeIcon} />
          <NavIcons title="About Me" link="#about" Icon={AboutIcon} />
          <NavIcons
            title="Experience"
            link="#experience"
            Icon={ExperienceIcon}
          />
          <NavIcons title="Services" link="#services" Icon={ServicesIcon} />
          <NavIcons title="Contact Me" link="#contact" Icon={ContactIcon} />
        </ul>
        <button
          onClick={toggleTheme}
          className={`relative h-9 md:w-15 rounded-full transition-colors duration-500 flex items-center justify-start px-1 shadow-md ${
            isLight
              ? "bg-(--primary) shadow-[0_0_12px_var(--primary)]"
              : "bg-zinc-600"
          }`}
          aria-label={isLight ? "Switch to Dark Mode" : "Switch to Light Mode"}
        >
          <span
            className={`w-7 h-7 bg-white/90 rounded-full shadow-md transform transition-all duration-500 flex items-center justify-center text-lg md:mr-0 mr-8 ${
              isLight
                ? "translate-x-8 md:translate-x-6 shadow-[0_0_10px_var(--primary)]"
                : "translate-x-0"
            }`}
          >
            {isLight ? <BiSun /> : <BiMoon className="fill-black/90" />}
          </span>
        </button>
      </nav>
    </header>
  );
}
