/**
 * Header Component (Client)
 * --------------------------
 * Navigation header with theme toggle.
 *
 * Client Component because:
 * - Uses useContext for theme
 * - Has onClick handler for theme toggle
 *
 * Every nav item points at a section of the current locale's landing page, so
 * the bar behaves consistently wherever it is rendered. From a sub-page such as
 * /about the links are root-absolute and jump back to the right section.
 */

"use client";

import { AiOutlineCode } from "react-icons/ai";
import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { BiSun, BiMoon } from "react-icons/bi";
import { ThemeContext } from "@/context/ThemeContext";
import NavIcons from "./NavIcons";

// Icon imports - using @/icons alias
import HomeIcon from "@/icons/HomeIcon";
import AboutIcon from "@/icons/AboutIcon";
import ExperienceIcon from "@/icons/ExperienceIcon";
import ServicesIcon from "@/icons/ServicesIcon";
import ContactIcon from "@/icons/MailIcon";

const LABELS = {
  en: {
    home: "Home",
    about: "About Me",
    experience: "Experience",
    projects: "Projects",
    services: "Services",
    contact: "Contact Me",
    logo: "Ali Reza Habibi — Home",
    toDark: "Switch to Dark Mode",
    toLight: "Switch to Light Mode",
  },
  fa: {
    home: "خانه",
    about: "درباره من",
    experience: "تجربه کاری",
    projects: "پروژه‌ها",
    services: "خدمات",
    contact: "تماس",
    logo: "علی رضا حبیبی — خانه",
    toDark: "تغییر به حالت تاریک",
    toLight: "تغییر به حالت روشن",
  },
};

export default function Header({ locale = "en" }) {
  const { isLight, toggleTheme } = useContext(ThemeContext);
  const t = LABELS[locale] ?? LABELS.en;

  // Landing page for this locale — every section link hangs off it.
  const base = locale === "fa" ? "/fa" : "/";
  const section = (id) => (base === "/" ? `/#${id}` : `${base}#${id}`);

  return (
    <header className="md:w-full md:max-w-350 md:m-auto z-10">
      <nav className="flex justify-between items-center md:px-0 mt-6">
        {/* Logo - using next/image, links home from every page */}
        <Link href={base} aria-label={t.logo}>
          <Image
            src="/logo.svg"
            alt="Ali Reza Habibi Logo"
            width={72}
            height={72}
            className={`w-18 h-18 md:w-15 md:h-15 transition duration-300 ${
              isLight ? "filter invert" : ""
            }`}
            priority
          />
        </Link>

        {/* Navigation Links */}
        <ul className="z-10 md:pb-3 md:pt-3 fixed md:left-1/2 left-3/7 -translate-x-1/2 bottom-9  md:bottom-auto bg-(--navbarbackground) md:backdrop-blur-xs backdrop-blur-lg flex border border-(--navbarborder) rounded-4xl py-3 px-6 md:gap-6 gap-5 shadow-md">
          <NavIcons title={t.home} link={base} Icon={HomeIcon} />
          <NavIcons title={t.about} link={section("about")} Icon={AboutIcon} />
          <NavIcons
            title={t.experience}
            link={section("experience")}
            Icon={ExperienceIcon}
          />
          <NavIcons
            title={t.projects}
            link={section("projects")}
            Icon={AiOutlineCode}
          />
          <NavIcons
            title={t.services}
            link={section("services")}
            Icon={ServicesIcon}
          />
          <NavIcons
            title={t.contact}
            link={section("contact")}
            Icon={ContactIcon}
          />
        </ul>

        {/* Theme Toggle Button — geometry lives in globals.css so the knob
            slides toward the inline-end in both LTR and RTL. */}
        <button
          type="button"
          onClick={toggleTheme}
          data-on={isLight ? "true" : "false"}
          className={`theme-toggle shadow-md ${
            isLight
              ? "bg-(--primary) shadow-[0_0_12px_var(--primary)]"
              : "bg-zinc-600"
          }`}
          aria-label={isLight ? t.toDark : t.toLight}
          aria-pressed={isLight}
        >
          <span className="theme-toggle__knob">
            {isLight ? <BiSun /> : <BiMoon className="fill-black/90" />}
          </span>
        </button>
      </nav>
    </header>
  );
}
