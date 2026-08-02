/**
 * Projects index (Server Component)
 * ----------------------------------
 * Crawlable hub that links to every project detail page. The homepage grid is
 * client-filtered; this page is plain server-rendered links so crawlers always
 * see the full set.
 */

import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PageHeader from "@/components/ui/PageHeader";
import { projects } from "@/data/projects";
import { projectsIndexGraph } from "@/lib/schema";
import { PERSON } from "@/data/site";

export const metadata = {
  title: "Projects",
  description: `Software projects built by ${PERSON.name} (${PERSON.handle}) — web applications, progressive web apps, management systems, and WordPress builds using React, Next.js, TypeScript, and PHP.`,
  alternates: { canonical: "/projects" },
  openGraph: {
    title: `Projects — ${PERSON.name}`,
    description: `Software projects built by ${PERSON.name} (${PERSON.handle}).`,
    url: "/projects",
  },
};

export default function ProjectsIndexPage() {
  const featured = projects.filter((project) => project.featured);
  const rest = projects.filter((project) => !project.featured);

  return (
    <div>
      <JsonLd data={projectsIndexGraph()} />
      <Header />

      <main className="md:w-full md:max-w-[1400px] m-auto pt-10 pb-20">
        <Breadcrumbs
          trail={[{ label: "Home", href: "/" }, { label: "Projects" }]}
        />

        <PageHeader
          eyebrow={`${projects.length} case studies`}
          title="Projects"
          lead={`A selection of software ${PERSON.name} has designed and built — finance tooling, real-time price tracking, healthcare administration, and agency websites.`}
        />

        <section className="pt-14 flex flex-col gap-6">
          <h2 className="sr-only">Featured projects</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((project) => (
              <ProjectListItem key={project.slug} project={project} featured />
            ))}
          </ul>
        </section>

        {rest.length > 0 && (
          <section className="pt-10 flex flex-col gap-6">
            <h2 className="sr-only">More projects</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((project) => (
                <ProjectListItem key={project.slug} project={project} />
              ))}
            </ul>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}

function ProjectListItem({ project, featured = false }) {
  return (
    <li className="surface surface-hover overflow-hidden flex flex-col group">
      <Link href={`/projects/${project.slug}`} className="flex flex-col h-full">
        <div className="relative w-full aspect-video overflow-hidden">
          <Image
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {featured && (
            <span className="absolute top-3 right-3 px-3 py-1 text-xs font-semibold bg-(--primary) text-white rounded-full">
              Featured
            </span>
          )}
        </div>

        <div className="p-5 flex flex-col gap-3 grow">
          <p className="eyebrow">{project.category}</p>

          <h3 className="text-xl font-bold text-(--text) group-hover:text-(--primary) transition-colors flex items-center gap-1.5">
            {project.title}
            <FiArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
          </h3>

          <p className="text-sm text-(--color) grow">{project.description}</p>

          <ul className="flex flex-wrap gap-2 pt-1">
            {project.technologies.map((tech) => (
              <li key={tech} className="chip">
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </Link>
    </li>
  );
}
