/**
 * sitemap.js
 * -----------
 * Generated from the same data the pages use, so a new project automatically
 * appears in the sitemap.
 *
 * Two things that are easy to get wrong and are deliberate here:
 *  1. Each <loc> matches its page's canonical EXACTLY, trailing slash included.
 *     A sitemap URL that disagrees with the canonical wastes crawl budget.
 *  2. hreflang is only declared for "/" and "/fa", which are genuine
 *     translations of each other. /about and /projects have no Persian
 *     equivalent, so claiming one would be a false signal.
 *
 * Note: Google ignores <changefreq> and <priority> entirely — only <loc> and
 * <lastmod> are used, and <lastmod> is only trusted when accurate.
 */

import { SITE_URL } from "@/data/site";
import { projects } from "@/data/projects";

// Next normalises the root canonical to the slashless origin, so the sitemap
// uses the identical string. ("https://ahabibi.dev" and ".../" are the same URL
// per RFC 3986, but emitting one form everywhere keeps the signals unambiguous.)
const HOME_URL = SITE_URL;
const FA_URL = `${SITE_URL}/fa`;

const LANGUAGE_PAIR = {
  languages: {
    en: HOME_URL,
    fa: FA_URL,
    "x-default": HOME_URL,
  },
};

export default function sitemap() {
  const lastModified = new Date();

  return [
    {
      url: HOME_URL,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      alternates: LANGUAGE_PAIR,
    },
    {
      url: FA_URL,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: LANGUAGE_PAIR,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/projects`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...projects.map((project) => ({
      url: `${SITE_URL}/projects/${project.slug}`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.6,
    })),
  ];
}
