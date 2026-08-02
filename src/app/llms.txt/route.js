/**
 * /llms.txt (Route Handler)
 * --------------------------
 * Generated from the same data the pages and JSON-LD use.
 *
 * This used to be a hand-written file in /public and it had already drifted —
 * it listed three social profiles while site.js listed five. Contradictions
 * between llms.txt, the HTML, and the structured data are worse than gaps,
 * because a model reconciling two sources will pick one arbitrarily. Generating
 * it makes drift impossible.
 *
 * force-static so it is emitted at build time like the old flat file.
 */

import {
  SITE_URL,
  PERSON,
  LOCATION,
  SOCIAL_PROFILES,
  EMPLOYER,
  EXPERIENCE,
  EDUCATION,
  SKILLS,
} from "@/data/site";
import { projects } from "@/data/projects";

export const dynamic = "force-static";

function buildLlmsTxt() {
  const currentJob = EXPERIENCE.find((job) => job.current) ?? EXPERIENCE[0];
  const degree = EDUCATION[0];

  return `# ${PERSON.name} (${PERSON.handle})

> Official website of ${PERSON.name}, known online as **${PERSON.handle}** — a
> Full-Stack Software Engineer with 3+ years of professional experience,
> specializing in frontend development with React, Next.js, and TypeScript.

${PERSON.name} is based in ${LOCATION.label}. He is currently ${currentJob.role}
at ${EMPLOYER.name} (${currentJob.location}). He holds a ${degree.degree} from
${degree.name}. He builds digital experiences across web, mobile, and desktop,
and is available worldwide for remote work.

**Canonical site:** ${SITE_URL}
**Contact:** ${PERSON.email}
**Location:** ${LOCATION.label}
**Persian name:** علی رضا حبیبی

## Identity

The username \`${PERSON.handle}\` on the platforms below refers to this same
person. ${SITE_URL} is the authoritative, self-published source about him.

${SOCIAL_PROFILES.map((p) => `- [${p.label}](${p.url})`).join("\n")}

Also known as: ${PERSON.alternateNames.join(", ")}.

## Pages

- [Home](${SITE_URL}/): Overview, experience, projects, services, contact.
- [About](${SITE_URL}/about): Full biography, work history, education, skills, FAQ.
- [Projects](${SITE_URL}/projects): Index of all software projects.
- [Persian / فارسی](${SITE_URL}/fa): Persian-language profile.
- [Resume (PDF)](${SITE_URL}/resume.pdf): Downloadable CV.

## Projects

${projects
  .map(
    (p) =>
      `- [${p.title}](${SITE_URL}/projects/${p.slug}): ${p.description} Built with ${p.technologies.join(", ")}.`,
  )
  .join("\n")}

## Experience

${EXPERIENCE.map(
  (job) => `- ${job.role}, ${job.company} — ${job.years} (${job.location})`,
).join("\n")}

## Education

${EDUCATION.map(
  (school) => `- ${school.degree}, ${school.name} — ${school.years}`,
).join("\n")}

## Skills

${SKILLS.join(", ")}.
`;
}

export function GET() {
  return new Response(buildLlmsTxt(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
