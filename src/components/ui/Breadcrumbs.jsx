/**
 * Breadcrumbs (Server)
 * Mirrors the BreadcrumbList emitted in structured data.
 * The final entry is rendered as plain text and marked aria-current.
 */

import Link from "next/link";

export default function Breadcrumbs({ trail }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm mb-10">
      <ol className="flex flex-wrap items-center gap-2">
        {trail.map((crumb, index) => {
          const isLast = index === trail.length - 1;

          return (
            <li key={crumb.label} className="flex items-center gap-2">
              {isLast ? (
                <span className="text-(--text)" aria-current="page">
                  {crumb.label}
                </span>
              ) : (
                <>
                  <Link
                    href={crumb.href}
                    className="hover:text-(--primary) transition-colors"
                  >
                    {crumb.label}
                  </Link>
                  <span aria-hidden="true" className="opacity-40">
                    /
                  </span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
