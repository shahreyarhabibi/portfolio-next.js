/**
 * Footer Component (Server)
 * Internal links, identity links, and the language switch.
 *
 * The language link always offers the OTHER language — on /fa it reads
 * "English", not "فارسی".
 *
 * The `rel="me"` attributes are deliberate: they are the standard way to assert
 * "this profile is the same person as this site", which is exactly the signal
 * needed for GitHub/LinkedIn/X results to resolve back to ahabibi.dev.
 */

import Link from "next/link";
import { SOCIAL_PROFILES, PERSON } from "@/data/site";

const CONTENT = {
  en: {
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Projects", href: "/projects" },
      { label: "Contact", href: "/#contact" },
    ],
    switch: { label: "فارسی", href: "/fa", lang: "fa" },
    connect: "Connect",
    rights: "All Rights Reserved",
  },
  fa: {
    links: [
      { label: "خانه", href: "/fa" },
      { label: "درباره من", href: "/fa#about" },
      { label: "پروژه‌ها", href: "/fa#projects" },
      { label: "تماس", href: "/fa#contact" },
    ],
    switch: { label: "English", href: "/", lang: "en" },
    connect: "شبکه‌های اجتماعی",
    rights: "تمامی حقوق محفوظ است",
  },
};

export default function Footer({ locale = "en" }) {
  const t = CONTENT[locale] ?? CONTENT.en;
  const name = locale === "fa" ? "علی رضا حبیبی" : PERSON.name;

  return (
    <footer className="md:w-full md:max-w-[1400px] m-auto md:mb-5 mb-25 pt-16">
      <div className="divider" />

      <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8">
        <nav aria-label="Footer">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            {t.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-(--primary) transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={t.switch.href}
                hrefLang={t.switch.lang}
                lang={t.switch.lang}
                className="text-(--text) font-medium hover:text-(--primary) transition-colors"
              >
                {t.switch.label}
              </Link>
            </li>
          </ul>
        </nav>

        <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm">
          {SOCIAL_PROFILES.map((profile) => (
            <li key={profile.url}>
              <a
                href={profile.url}
                rel="me noopener noreferrer"
                target="_blank"
                className="hover:text-(--primary) transition-colors"
              >
                {profile.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <p className="text-sm text-center pt-8">
        © {new Date().getFullYear()} |{" "}
        <span className="text-(--text)">{name}</span> | {t.rights}
      </p>
    </footer>
  );
}
