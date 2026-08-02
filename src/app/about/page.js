/**
 * About page (Server Component)
 * ------------------------------
 * The entity page. This is the URL that should answer "who is ahabibidev" and
 * "who is Ali Reza Habibi" — written as plain factual prose because that is
 * what AI Overviews and LLMs extract. The FAQ block is mirrored in FAQPage
 * structured data (see lib/schema.js).
 */

import Image from "next/image";
import Link from "next/link";
import { FiDownload, FiMail, FiArrowUpRight } from "react-icons/fi";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PageHeader from "@/components/ui/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import { aboutGraph } from "@/lib/schema";
import {
  PERSON,
  EXPERIENCE,
  EDUCATION,
  SOCIAL_PROFILES,
  SKILLS,
} from "@/data/site";

export const metadata = {
  title: "About Ali Reza Habibi (ahabibidev)",
  description:
    "Ali Reza Habibi, known online as ahabibidev, is a Full-Stack Software Engineer with 3+ years of experience specializing in frontend development with React, Next.js, and TypeScript. Biography, work history, education, and contact details.",
  alternates: { canonical: "/about" },
  openGraph: {
    type: "profile",
    title: "About Ali Reza Habibi (ahabibidev)",
    description:
      "Biography, work history, and education of Ali Reza Habibi — Full-Stack Software Engineer.",
    url: "/about",
  },
};

const FAQ = [
  {
    question: "Who is Ali Reza Habibi?",
    answer:
      "Ali Reza Habibi, known online as ahabibidev, is a Full-Stack Software Engineer with 3+ years of professional experience. He specialises in frontend development with React, Next.js, and TypeScript, and currently works as a Software Engineer at FirstRate Inc.",
  },
  {
    question: "What is ahabibidev?",
    answer:
      "ahabibidev is the username used by Ali Reza Habibi across GitHub, LinkedIn, X, and other developer platforms. His official website is ahabibi.dev — every ahabibidev profile you find online belongs to the same person.",
  },
  {
    question: "What technologies does Ali Reza Habibi work with?",
    answer:
      "He works primarily with React, Next.js, TypeScript, JavaScript, Tailwind CSS, Node.js, and NestJS, and has additional experience with Flutter, PHP, Python, and WordPress.",
  },
  {
    question: "How can I hire or contact Ali Reza Habibi?",
    answer:
      "You can reach him at contact@ahabibi.dev or through the contact form on this site. He is available worldwide for web, mobile, desktop, and WordPress development work.",
  },
];

export default function AboutPage() {
  return (
    <div>
      <JsonLd data={aboutGraph()} />
      <Header />

      <main className="md:w-full md:max-w-[1400px] m-auto pt-10 pb-20">
        <Breadcrumbs
          trail={[{ label: "Home", href: "/" }, { label: "About" }]}
        />

        {/* Intro */}
        <div className="flex flex-col-reverse md:flex-row gap-10 md:gap-16 items-start">
          <div className="flex flex-col gap-6 md:w-2/3">
            <PageHeader
              eyebrow="Software Engineer"
              title={`About ${PERSON.name}`}
            />

            <div className="flex flex-col gap-4 measure md:text-lg">
              <p>
                <strong className="text-(--text)">Ali Reza Habibi</strong> —
                known online as{" "}
                <strong className="text-(--text)">ahabibidev</strong> — is a
                Full-Stack Software Engineer with 3+ years of professional
                experience, specialising in frontend development. He builds
                seamless digital experiences across web, mobile, and desktop
                using React, Next.js, and TypeScript.
              </p>
              <p>
                He is currently a Software Engineer at{" "}
                <a
                  href="https://firstrate.com"
                  className="text-(--text) font-semibold hover:text-(--primary) transition-colors"
                >
                  FirstRate Inc
                </a>
                , where he works on complex problems that demand thoughtful
                architecture and clear communication. Previously he taught
                front-end development at Ulearna Educational Center in Kabul,
                built full-stack products for Ulearna Technologies in Dubai, and
                delivered WordPress and design work for MOWJ Pty Ltd in Sydney.
              </p>
              <p>
                He holds a BSc in Software Engineering from Kabul University.
                His work spans personal finance tooling, real-time price
                tracking, hospital administration systems, and agency websites —
                all documented on the{" "}
                <Link
                  href="/projects"
                  className="text-(--primary) hover:underline"
                >
                  projects page
                </Link>
                .
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-(--primary) text-white font-medium transition-transform duration-300 hover:scale-105"
              >
                <FiMail />
                Get in touch
              </Link>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-(--text) text-(--text) font-medium transition-colors duration-300 hover:bg-(--text) hover:text-(--background)"
              >
                <FiDownload />
                Download resume
              </a>
            </div>
          </div>

          <div className="md:w-1/3 w-full max-w-sm mx-auto md:mx-0">
            <Image
              src="/images/ali-reza-habibi.webp"
              alt="Portrait of Ali Reza Habibi, Software Engineer"
              width={400}
              height={500}
              priority
              className="rounded-3xl w-full"
            />
          </div>
        </div>

        {/* Experience + Education */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 pt-20">
          <section className="flex flex-col gap-6">
            <SectionHeading>Work experience</SectionHeading>
            <ol className="flex flex-col gap-4">
              {EXPERIENCE.map((job) => (
                <li key={`${job.company}-${job.years}`} className="surface p-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg font-bold text-(--text)">
                      {job.role}
                    </h3>
                    {job.current && (
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-(--primary) text-white">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-(--text) mt-1">
                    {job.url ? (
                      <a
                        href={job.url}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="inline-flex items-center gap-1 hover:text-(--primary) transition-colors"
                      >
                        {job.company}
                        <FiArrowUpRight className="text-sm" />
                      </a>
                    ) : (
                      job.company
                    )}
                  </p>
                  <p className="text-sm opacity-80 mt-1">
                    {job.years} · {job.location}
                  </p>
                </li>
              ))}
            </ol>
          </section>

          <section className="flex flex-col gap-6">
            <SectionHeading>Education</SectionHeading>
            <ol className="flex flex-col gap-4">
              {EDUCATION.map((school) => (
                <li key={school.name} className="surface p-5">
                  <h3 className="text-lg font-bold text-(--text)">
                    {school.degree}
                  </h3>
                  <p className="text-(--text) mt-1">{school.name}</p>
                  <p className="text-sm opacity-80 mt-1">{school.years}</p>
                </li>
              ))}
            </ol>
          </section>
        </div>

        {/* Skills */}
        <section className="flex flex-col gap-6 pt-20">
          <SectionHeading>Skills and technologies</SectionHeading>
          <ul className="flex flex-wrap gap-2">
            {SKILLS.map((skill) => (
              <li key={skill} className="chip">
                {skill}
              </li>
            ))}
          </ul>
        </section>

        {/* Profiles — the reciprocal half of the sameAs signal */}
        <section className="flex flex-col gap-6 pt-20">
          <SectionHeading>Profiles elsewhere</SectionHeading>
          <p className="measure">
            The following accounts all belong to Ali Reza Habibi (ahabibidev):
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SOCIAL_PROFILES.map((profile) => (
              <li key={profile.url}>
                <a
                  href={profile.url}
                  rel="me noopener noreferrer"
                  target="_blank"
                  className="surface surface-hover p-5 flex items-center justify-between gap-3 group"
                >
                  <span className="flex flex-col">
                    <span className="text-(--text) font-semibold group-hover:text-(--primary) transition-colors">
                      {profile.label}
                    </span>
                    <span className="text-sm opacity-80 break-all">
                      {profile.url.replace(/^https?:\/\/(www\.)?/, "")}
                    </span>
                  </span>
                  <FiArrowUpRight className="text-(--primary) shrink-0" />
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* FAQ — mirrors the FAQPage structured data */}
        <section className="flex flex-col gap-6 pt-20">
          <SectionHeading>Frequently asked questions</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {FAQ.map((item) => (
              <div key={item.question} className="surface p-6 flex flex-col gap-2">
                <h3 className="text-lg font-bold text-(--text)">
                  {item.question}
                </h3>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
