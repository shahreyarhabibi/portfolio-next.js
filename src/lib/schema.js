/**
 * schema.js
 * ----------
 * Schema.org builders emitted as JSON-LD.
 *
 * Everything lives in ONE @graph with stable @id values so Google resolves a
 * single "Ali Reza Habibi" entity instead of several disconnected nodes. The
 * Person node is the anchor; every page points back at it.
 */

import {
  SITE_URL,
  PERSON,
  LOCATION,
  SAME_AS,
  EMPLOYER,
  EDUCATION,
  EXPERIENCE,
  SKILLS,
} from "@/data/site";
import { projects } from "@/data/projects";
import { FAQ } from "@/data/faq";

// Stable node identifiers — these are what glue the graph together.
export const PERSON_ID = `${SITE_URL}/#person`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const EMPLOYER_ID = `${EMPLOYER.url}/#organization`;

export function personNode() {
  return {
    "@type": "Person",
    "@id": PERSON_ID,
    name: PERSON.name,
    givenName: PERSON.givenName,
    familyName: PERSON.familyName,
    alternateName: PERSON.alternateNames,
    url: SITE_URL,
    mainEntityOfPage: { "@id": `${SITE_URL}/#webpage` },
    image: {
      "@type": "ImageObject",
      url: PERSON.image,
      caption: `${PERSON.name} — ${PERSON.jobTitle}`,
    },
    jobTitle: PERSON.jobTitle,
    description: `Full-Stack Software Engineer based in ${LOCATION.label} with 3+ years of experience specialising in frontend development with React, Next.js, and TypeScript.`,
    email: `mailto:${PERSON.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: LOCATION.city,
      addressCountry: LOCATION.countryCode,
    },
    homeLocation: {
      "@type": "Place",
      name: LOCATION.label,
      address: {
        "@type": "PostalAddress",
        addressLocality: LOCATION.city,
        addressCountry: LOCATION.countryCode,
      },
    },
    knowsAbout: SKILLS,
    knowsLanguage: [
      { "@type": "Language", name: "English" },
      { "@type": "Language", name: "Persian (Dari)" },
    ],
    worksFor: { "@id": EMPLOYER_ID },
    hasOccupation: EXPERIENCE.map((job) => ({
      "@type": "Occupation",
      name: job.role,
      occupationLocation: { "@type": "Place", name: job.location },
    })),
    alumniOf: EDUCATION.map((school) => ({
      "@type": "EducationalOrganization",
      name: school.name,
      ...(school.url ? { url: school.url } : {}),
    })),
    // The identity signal: every profile below is the same person as this node.
    sameAs: SAME_AS,
  };
}

export function employerNode() {
  return {
    "@type": "Organization",
    "@id": EMPLOYER_ID,
    name: EMPLOYER.name,
    url: EMPLOYER.url,
  };
}

export function websiteNode() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: PERSON.name,
    alternateName: PERSON.alternateNames,
    url: SITE_URL,
    inLanguage: ["en", "fa"],
    publisher: { "@id": PERSON_ID },
    author: { "@id": PERSON_ID },
    copyrightHolder: { "@id": PERSON_ID },
  };
}

/**
 * ProfilePage is the correct type for a personal homepage — it tells Google
 * "this page IS the profile of that Person", which a plain WebPage does not.
 */
export function profilePageNode({
  url = SITE_URL,
  id = `${SITE_URL}/#webpage`,
  name,
  description,
  inLanguage = "en",
} = {}) {
  return {
    "@type": "ProfilePage",
    "@id": id,
    url,
    name: name ?? `${PERSON.name} — ${PERSON.jobTitle}`,
    description,
    inLanguage,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": PERSON_ID },
    mainEntity: { "@id": PERSON_ID },
    primaryImageOfPage: { "@type": "ImageObject", url: PERSON.image },
  };
}

export function webPageNode({ url, id, name, description, breadcrumb }) {
  return {
    "@type": "WebPage",
    "@id": id,
    url,
    name,
    description,
    inLanguage: "en",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": PERSON_ID },
    ...(breadcrumb ? { breadcrumb: { "@id": `${url}#breadcrumb` } } : {}),
  };
}

export function breadcrumbNode(url, trail) {
  return {
    "@type": "BreadcrumbList",
    "@id": `${url}#breadcrumb`,
    itemListElement: trail.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
}

export function projectNode(project) {
  const url = `${SITE_URL}/projects/${project.slug}`;

  return {
    "@type": "SoftwareApplication",
    "@id": `${url}#project`,
    name: project.title,
    url,
    description: project.longDescription ?? project.description,
    applicationCategory: "WebApplication",
    operatingSystem: "Web browser",
    image: `${SITE_URL}${project.image}`,
    dateCreated: project.year,
    author: { "@id": PERSON_ID },
    creator: { "@id": PERSON_ID },
    keywords: project.technologies.join(", "),
    ...(project.liveUrl ? { installUrl: project.liveUrl } : {}),
    ...(project.githubUrl ? { codeRepository: project.githubUrl } : {}),
  };
}

/**
 * Nodes every page repeats. The Person references the employer via @id, so the
 * Organization node has to travel with it — otherwise `worksFor` points at a
 * node that is defined nowhere in the document.
 */
function baseNodes() {
  return [personNode(), employerNode(), websiteNode()];
}

/** Homepage graph: person + site + profile page + a list of the work. */
export function homeGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      ...baseNodes(),
      profilePageNode({
        description:
          "Portfolio of Ali Reza Habibi (ahabibidev), a Full-Stack Software Engineer based in Kabul, Afghanistan, specialising in frontend development with React, Next.js, and TypeScript.",
      }),
      {
        "@type": "ItemList",
        "@id": `${SITE_URL}/#projects`,
        name: `Projects by ${PERSON.name}`,
        itemListElement: projects.map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: project.title,
          url: `${SITE_URL}/projects/${project.slug}`,
        })),
      },
    ],
  };
}

export function projectGraph(project) {
  const url = `${SITE_URL}/projects/${project.slug}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      ...baseNodes(),
      webPageNode({
        url,
        id: `${url}#webpage`,
        name: `${project.title} — Project by ${PERSON.name}`,
        description: project.longDescription ?? project.description,
        breadcrumb: true,
      }),
      breadcrumbNode(url, [
        { name: "Home", url: SITE_URL },
        { name: "Projects", url: `${SITE_URL}/projects` },
        { name: project.title, url },
      ]),
      projectNode(project),
    ],
  };
}

export function projectsIndexGraph() {
  const url = `${SITE_URL}/projects`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      ...baseNodes(),
      {
        "@type": "CollectionPage",
        "@id": `${url}#webpage`,
        url,
        name: `Projects — ${PERSON.name}`,
        description: `Software projects built by ${PERSON.name} (${PERSON.handle}), including web applications, progressive web apps, and management systems.`,
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": PERSON_ID },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        mainEntity: {
          "@type": "ItemList",
          itemListElement: projects.map((project, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: project.title,
            url: `${SITE_URL}/projects/${project.slug}`,
          })),
        },
      },
      breadcrumbNode(url, [
        { name: "Home", url: SITE_URL },
        { name: "Projects", url },
      ]),
    ],
  };
}

export function aboutGraph() {
  const url = `${SITE_URL}/about`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      ...baseNodes(),
      webPageNode({
        url,
        id: `${url}#webpage`,
        name: `About ${PERSON.name} — Software Engineer`,
        description: `Biography, work history, and education of ${PERSON.name} (${PERSON.handle}), a Full-Stack Software Engineer.`,
        breadcrumb: true,
      }),
      breadcrumbNode(url, [
        { name: "Home", url: SITE_URL },
        { name: "About", url },
      ]),
      {
        // Built from @/data/faq so this markup can never drift from the text
        // actually rendered on /about.
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: FAQ.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };
}

export function persianGraph() {
  const url = `${SITE_URL}/fa`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      ...baseNodes(),
      profilePageNode({
        url,
        id: `${url}#webpage`,
        name: "علی رضا حبیبی — مهندس نرم‌افزار",
        description:
          "علی رضا حبیبی (ahabibidev)، مهندس نرم‌افزار فول‌استک مقیم کابل، افغانستان با تخصص در توسعه فرانت‌اند با React، Next.js و TypeScript.",
        inLanguage: "fa",
      }),
    ],
  };
}
