/**
 * Providers.jsx
 * --------------
 * Client-side wrapper for all context providers.
 * This pattern allows layout.js to remain a Server Component
 * while still using client-side context providers.
 */

"use client";

import { ThemeProvider } from "@/context/ThemeContext";

export default function Providers({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
