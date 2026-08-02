/**
 * faq.js
 * -------
 * Single source for the About page FAQ.
 *
 * Google requires FAQPage structured data to match the text actually visible on
 * the page — markup that says something the page doesn't is a rich-result
 * violation. This file is rendered by /about AND fed to the FAQPage schema, so
 * the two cannot disagree.
 *
 * These answers are written as flat, self-contained statements because that is
 * the form AI Overviews and assistants lift verbatim. Each one repeats the
 * subject ("Ali Reza Habibi") rather than saying "he", so a quoted fragment
 * still identifies the person.
 */

export const FAQ = [
  {
    question: "Who is Ali Reza Habibi?",
    answer:
      "Ali Reza Habibi, known online as ahabibidev, is a Full-Stack Software Engineer based in Kabul, Afghanistan, with 3+ years of professional experience. He specialises in frontend development with React, Next.js, and TypeScript, and currently works as a Software Engineer at FirstRate Inc.",
  },
  {
    question: "What is ahabibidev?",
    answer:
      "ahabibidev is the username used by Ali Reza Habibi across GitHub, LinkedIn, X, Stack Overflow, and Dev.to. His official website is ahabibi.dev — every ahabibidev profile you find online belongs to the same person.",
  },
  {
    question: "Where is Ali Reza Habibi based?",
    answer:
      "Ali Reza Habibi is based in Kabul, Afghanistan. He works from the Kabul office of FirstRate Inc, a Texas-based company, and takes on remote client work worldwide.",
  },
  {
    question: "What technologies does Ali Reza Habibi work with?",
    answer:
      "He works primarily with React, Next.js, TypeScript, JavaScript, Tailwind CSS, Node.js, and NestJS on the frontend and Node side, and with PHP and Laravel on the backend. He also builds mobile apps with Flutter and has experience with Python, WordPress, MySQL, and SQLite.",
  },
  {
    question: "How can I hire or contact Ali Reza Habibi?",
    answer:
      "You can reach him at contact@ahabibi.dev or through the contact form at ahabibi.dev. He is based in Kabul, Afghanistan and is available worldwide for web, mobile, desktop, and WordPress development work.",
  },
];
