/**
 * 404 page
 * ---------
 * Returns a real 404 status and offers crawlable routes back into the site
 * instead of a dead end.
 */

import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/ui/PageHeader";

export const metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

const DESTINATIONS = [
  { label: "Home", description: "Ali Reza Habibi — Software Engineer", href: "/" },
  { label: "About", description: "Biography, experience, and education", href: "/about" },
  { label: "Projects", description: "Case studies of shipped work", href: "/projects" },
  { label: "Contact", description: "Start a conversation", href: "/#contact" },
];

export default function NotFound() {
  return (
    <div>
      <Header />

      <main className="md:w-full md:max-w-[1400px] m-auto pt-20 pb-20">
        <PageHeader
          eyebrow="Error 404"
          title="Page not found"
          lead="That page does not exist, or it may have moved. Here is where you might have been heading."
        />

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-12 max-w-3xl">
          {DESTINATIONS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="surface surface-hover p-5 flex items-center justify-between gap-3 group"
              >
                <span className="flex flex-col">
                  <span className="text-(--text) font-semibold group-hover:text-(--primary) transition-colors">
                    {item.label}
                  </span>
                  <span className="text-sm opacity-80">{item.description}</span>
                </span>
                <FiArrowUpRight className="text-(--primary) shrink-0" />
              </Link>
            </li>
          ))}
        </ul>
      </main>

      <Footer />
    </div>
  );
}
