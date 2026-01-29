/**
 * ThemeContext.jsx
 * -----------------
 * Provides theme state (light/dark mode) to the entire app.
 *
 * Client Component because:
 * - Uses useState and useEffect hooks
 * - Manipulates DOM (document.documentElement)
 * - createContext requires client-side rendering
 *
 * FIXED: Added .Provider to ThemeContext JSX
 */

"use client";

import { createContext, useState, useEffect } from "react";

// Create the context with a default value
export const ThemeContext = createContext({
  isLight: false,
  toggleTheme: () => {},
});

/**
 * ThemeProvider Component
 * Wraps the app and provides theme context to all children
 */
export function ThemeProvider({ children }) {
  // Dark mode by default (isLight = false)
  const [isLight, setIsLight] = useState(false);

  // Toggle between light and dark mode
  const toggleTheme = () => setIsLight((prev) => !prev);

  // Update <html> class whenever theme changes
  useEffect(() => {
    const html = document.documentElement;

    if (isLight) {
      html.classList.add("light");
    } else {
      html.classList.remove("light");
    }
  }, [isLight]);

  return (
    <ThemeContext.Provider value={{ isLight, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
