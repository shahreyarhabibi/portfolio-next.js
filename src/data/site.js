/**
 * site.js
 * --------
 * Single source of truth for every SEO surface (metadata, JSON-LD, sitemap,
 * robots, llms.txt). Change a value here and it propagates everywhere.
 */

export const SITE_URL = "https://ahabibi.dev";

export const PERSON = {
  name: "Ali Reza Habibi",
  givenName: "Ali Reza",
  familyName: "Habibi",
  handle: "ahabibidev",
  jobTitle: "Software Engineer",
  email: "contact@ahabibi.dev",
  image: `${SITE_URL}/images/ali-reza-habibi.webp`,
  // Persian spellings people actually type. Keep these to real name variants —
  // single-word entries like "علی" are too generic and dilute the entity.
  alternateNames: [
    "ahabibidev",
    "ahabibi.dev",
    "Alireza Habibi",
    "علی رضا حبیبی",
    "علی‌رضا حبیبی",
    "علیرضا حبیبی",
  ],
};

/**
 * Every profile that represents the SAME person.
 *
 * This list is how Google merges "ahabibidev on GitHub", "ahabibidev on Fiverr"
 * and "ahabibi.dev" into ONE entity. Each of these profiles must ALSO link back
 * to https://ahabibi.dev for the signal to be reciprocal — see SEO-CHECKLIST.md.
 *
 * Leave a url as "" if you do not have that profile; empty entries are dropped.
 */
export const SOCIAL_PROFILES = [
  { label: "GitHub", url: "https://github.com/ahabibidev" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/ahabibidev" },
  { label: "X", url: "https://x.com/ahabibidev" },
  // TODO: paste your real profile URLs here — these are the exact pages that
  // currently outrank your site, so naming them is what ties them back to you.
  { label: "Fiverr", url: "" },
  { label: "Stack Overflow", url: "" },
  { label: "Dev.to", url: "" },
  { label: "Upwork", url: "" },
].filter((profile) => profile.url);

export const SAME_AS = SOCIAL_PROFILES.map((profile) => profile.url);

export const EMPLOYER = {
  name: "FirstRate Inc",
  url: "https://firstrate.com",
};

export const EDUCATION = [
  {
    name: "Kabul University",
    url: "https://ku.edu.af",
    degree: "BSc in Software Engineering",
    years: "2023 - 2025",
  },
  {
    name: "Afghan Institute of Technology",
    url: "",
    degree: "Diploma in Information Systems",
    years: "2020 - 2022",
  },
  {
    name: "Hope Worldwide Afghanistan",
    url: "",
    degree: "DEL (Diploma in English Language)",
    years: "2013 - 2014",
  },
];

export const EXPERIENCE = [
  {
    company: "FirstRate Inc",
    url: "https://firstrate.com",
    role: "Software Engineer",
    location: "TX, USA | Kabul Office",
    years: "Nov 2025 - Present",
    current: true,
  },
  {
    company: "Ulearna Educational Center",
    url: "",
    role: "Front-End Instructor",
    location: "Kabul, Afghanistan",
    years: "Aug 2024 - Sept 2025",
  },
  {
    company: "Ulearna Technologies",
    url: "https://ulearna.com",
    role: "Full-Stack Developer",
    location: "Dubai, UAE",
    years: "Jun 2024 - May 2025",
  },
  {
    company: "MOWJ Pty Ltd",
    url: "https://mowjglobal.com",
    role: "WordPress Developer & Graphic Designer",
    location: "Sydney, Australia",
    years: "Jan 2025 - Jun 2025",
  },
];

export const SKILLS = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "NestJS",
  "Tailwind CSS",
  "Flutter",
  "PHP",
  "Python",
  "WordPress",
  "Frontend Development",
  "Full-Stack Development",
  "Web Performance",
  "Responsive Web Design",
];
