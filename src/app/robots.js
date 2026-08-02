/**
 * robots.js
 * ----------
 * AI crawlers are explicitly allowed. Getting cited by ChatGPT, Perplexity, and
 * Google's AI surfaces requires those bots to be able to read the site — they
 * are separate user agents from Googlebot and are worth naming.
 */

import { SITE_URL } from "@/data/site";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        // Answer-engine crawlers — allowed so the site can be cited as a source
        userAgent: [
          "GPTBot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "PerplexityBot",
          "ClaudeBot",
          "Claude-Web",
          "Google-Extended",
          "Applebot-Extended",
          "Bingbot",
        ],
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
