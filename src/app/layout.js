import { Analytics } from "@vercel/analytics/next";
import { Vazirmatn } from "next/font/google";
import Providers from "@/components/Providers";
import "./globals.css";
import { SITE_URL } from "@/data/site";

/**
 * Persian webfont. next/font self-hosts this at build time, so there is no
 * runtime request to Google and no CSP entry needed. Applied via the
 * [lang="fa"] rule in globals.css.
 */
const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-vazirmatn",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(SITE_URL),

  // Name first, then the username people actually search for. Sub-pages append
  // to this via the template.
  title: {
    default: "Ali Reza Habibi (ahabibidev) — Software Engineer",
    template: "%s | Ali Reza Habibi",
  },
  description:
    "Official site of Ali Reza Habibi (ahabibidev) — Full-Stack Software Engineer based in Kabul, Afghanistan with 3+ years of experience specializing in frontend development. Building seamless digital experiences across web, mobile, and desktop using React, Next.js, and TypeScript.",

  keywords: [
    "Ali Reza Habibi",
    "ahabibidev",
    "ahabibi.dev",
    "علی رضا حبیبی",
    "علی‌رضا حبیبی",
    "Software Engineer",
    "Full-Stack Developer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Ali Reza Habibi Developer",
  ],

  applicationName: "Ali Reza Habibi",
  authors: [{ name: "Ali Reza Habibi", url: SITE_URL }],
  creator: "Ali Reza Habibi",
  publisher: "Ali Reza Habibi",
  category: "technology",

  // ✅ Canonical + language alternates (hreflang)
  alternates: {
    canonical: SITE_URL,
    languages: {
      en: SITE_URL,
      fa: `${SITE_URL}/fa`,
      "x-default": SITE_URL,
    },
  },

  // ✅ Explicit crawl directives. max-image-preview:large is what makes Google
  // show your photo/thumbnail in results and AI Overviews instead of nothing.
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  // Add your Search Console HTML-tag token here if you are not verified by DNS.
  // verification: { google: "your-token" },

  icons: {
    shortcut: "/favicon.ico",
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" }, // Google
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.png", sizes: "450x450", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" }, // browser tab
    ],
    apple: "/apple-touch-icon.png",
  },

  // ✅ Open Graph (Facebook, LinkedIn, etc.)
  openGraph: {
    title: "Ali Reza Habibi (ahabibidev) — Software Engineer",
    description:
      "Full-Stack Software Engineer with 3+ years of experience specializing in Frontend development.",
    type: "profile",
    firstName: "Ali Reza",
    lastName: "Habibi",
    username: "ahabibidev",
    url: `${SITE_URL}/`,
    siteName: "Ali Reza Habibi",
    locale: "en_US",
    alternateLocale: ["fa_IR"],
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 627,
        alt: "Ali Reza Habibi — Software Engineer",
      },
    ],
  },

  // ✅ Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Ali Reza Habibi (ahabibidev) — Software Engineer",
    description:
      "Full-Stack Software Engineer with 3+ years of experience specializing in Frontend development.",
    images: ["/og-image.png"],
    creator: "@ahabibidev",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={vazirmatn.variable} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'light') {
                    document.documentElement.classList.add('light');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
