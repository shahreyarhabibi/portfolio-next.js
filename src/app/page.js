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

export default function Home() {
  return (
    <div>
      <Header />

      <main>
        <BotpressChat />
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ServicesSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
