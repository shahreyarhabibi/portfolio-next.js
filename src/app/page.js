/**
 * Home Page (Server Component)
 * -----------------------------
 * Main landing page - NO "use client" needed!
 * Server Components can import Client Components.
 */

import Header from "@/components/Header/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ServicesSection from "@/components/Services/ServicesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BotpressChat from "@/components/BotpressChat";
import ProjectsSection from "@/components/Projects/ProjectsSection";
import JsonLd from "@/components/JsonLd";
import { homeGraph } from "@/lib/schema";
import { SITE_URL } from "@/data/site";

export const metadata = {
  // Overrides the layout template so the homepage title stays name-first.
  title: {
    absolute: "Ali Reza Habibi (ahabibidev) — Software Engineer",
  },
  // `alternates` REPLACES the layout's object rather than merging into it, so
  // the language map has to be repeated here or the homepage loses its
  // hreflang tags entirely.
  alternates: {
    canonical: SITE_URL,
    languages: {
      en: SITE_URL,
      fa: `${SITE_URL}/fa`,
      "x-default": SITE_URL,
    },
  },
};

export default function Home() {
  return (
    <div>
      <JsonLd data={homeGraph()} />
      <Header />
      <main>
        <BotpressChat />
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
