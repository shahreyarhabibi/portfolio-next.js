/**
 * Project detail page (Server Component)
 * ---------------------------------------
 * One indexable URL per project. This is where the site gains real crawlable
 * surface area: each page targets its own query set and links back to the
 * homepage with "Ali Reza Habibi" as anchor text.
 */

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiGithub, FiExternalLink, FiArrowLeft, FiArrowRight } from "react-icons/fi";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PageHeader from "@/components/ui/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects, getProjectBySlug } from "@/data/projects";
import { projectGraph } from "@/lib/schema";
import { PERSON } from "@/data/site";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) return { title: "Project not found" };

  const description = project.longDescription ?? project.description;

  return {
    title: `${project.title} — ${project.category}`,
    description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      type: "article",
      title: `${project.title} — Project by ${PERSON.name}`,
      description,
      url: `/projects/${project.slug}`,
      images: [{ url: project.image, alt: project.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — Project by ${PERSON.name}`,
      description,
      images: [project.image],
    },
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  // Previous / next for sequential navigation between case studies
  const index = projects.findIndex((item) => item.slug === project.slug);
  const previous = index > 0 ? projects[index - 1] : null;
  const next = index < projects.length - 1 ? projects[index + 1] : null;

  const facts = [
    { label: "Role", value: project.role },
    { label: "Year", value: project.year },
    { label: "Type", value: project.category },
  ];

  return (
    <div>
      <JsonLd data={projectGraph(project)} />
      <Header />

      <main className="md:w-full md:max-w-[1400px] m-auto pt-10 pb-20">
        <Breadcrumbs
          trail={[
            { label: "Home", href: "/" },
            { label: "Projects", href: "/projects" },
            { label: project.title },
          ]}
        />

        <article className="flex flex-col gap-12">
          <PageHeader
            eyebrow={`${project.category} · ${project.year}`}
            title={project.title}
            lead={project.longDescription ?? project.description}
          >
            <div className="flex flex-wrap gap-4 pt-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-(--primary) text-white font-medium transition-transform duration-300 hover:scale-105"
                >
                  <FiExternalLink />
                  Visit live site
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-(--primary) text-(--primary) font-medium transition-colors duration-300 hover:bg-(--primary) hover:text-white"
                >
                  <FiGithub />
                  View source
                </a>
              )}
            </div>
          </PageHeader>

          {/* Cover image */}
          <div className="relative w-full aspect-video overflow-hidden rounded-2xl surface">
            <Image
              src={project.image}
              alt={`Screenshot of ${project.title}`}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1400px"
              className="object-cover"
            />
          </div>

          {/* Facts strip */}
          <dl className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {facts.map((fact) => (
              <div key={fact.label} className="surface p-5">
                <dt className="text-xs uppercase tracking-wider opacity-70">
                  {fact.label}
                </dt>
                <dd className="text-(--text) font-semibold mt-1">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
            {/* Highlights */}
            {project.highlights?.length > 0 && (
              <section className="lg:col-span-2 flex flex-col gap-6">
                <SectionHeading>What it does</SectionHeading>
                <ul className="flex flex-col gap-3">
                  {project.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-3 md:text-lg"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2.5 w-1.5 h-1.5 rounded-full bg-(--primary) shrink-0"
                      />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Tech stack */}
            <section className="flex flex-col gap-6">
              <SectionHeading>Tech stack</SectionHeading>
              <ul className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <li key={tech} className="chip">
                    {tech}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Prev / next */}
          <nav
            aria-label="More projects"
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4"
          >
            {previous ? (
              <Link
                href={`/projects/${previous.slug}`}
                className="surface surface-hover p-5 flex items-center gap-3 group"
              >
                <FiArrowLeft className="text-(--primary) shrink-0" />
                <span className="flex flex-col">
                  <span className="text-xs uppercase tracking-wider opacity-70">
                    Previous
                  </span>
                  <span className="text-(--text) font-semibold group-hover:text-(--primary) transition-colors">
                    {previous.title}
                  </span>
                </span>
              </Link>
            ) : (
              <span />
            )}

            {next && (
              <Link
                href={`/projects/${next.slug}`}
                className="surface surface-hover p-5 flex items-center justify-end gap-3 text-right group"
              >
                <span className="flex flex-col">
                  <span className="text-xs uppercase tracking-wider opacity-70">
                    Next
                  </span>
                  <span className="text-(--text) font-semibold group-hover:text-(--primary) transition-colors">
                    {next.title}
                  </span>
                </span>
                <FiArrowRight className="text-(--primary) shrink-0" />
              </Link>
            )}
          </nav>

          {/* CTA */}
          <section className="surface p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl md:text-3xl font-bold text-(--text)">
                Have something similar in mind?
              </h2>
              <p>
                {PERSON.name} is available for web, mobile, and desktop work.
              </p>
            </div>
            <Link
              href="/#contact"
              className="inline-flex shrink-0 items-center justify-center px-6 py-3 rounded-full bg-(--primary) text-white font-medium transition-transform duration-300 hover:scale-105"
            >
              Get in touch
            </Link>
          </section>

          <p className="text-sm">
            <Link href="/projects" className="hover:text-(--primary)">
              ← All projects
            </Link>
          </p>
        </article>
      </main>

      <Footer />
    </div>
  );
}
