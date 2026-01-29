/**
 * Providers Component (Client)
 * ----------------------------
 * Wraps the app with all client-side providers.
 * - ThemeProvider for dark/light mode
 * - Toaster for toast notifications
 */

"use client";

import { ThemeProvider } from "@/context/ThemeContext";
import { Toaster } from "react-hot-toast";

export default function Providers({ children }) {
  return (
    <ThemeProvider>
      {children}
      <Toaster
        position="bottom-right"
        toastOptions={{
          // Default options for all toasts
          duration: 4000,
          style: {
            background: "#1a1a1a",
            color: "#fff",
            borderRadius: "12px",
            padding: "16px",
            fontSize: "14px",
          },
          // Custom styles for different toast types
          success: {
            style: {
              border: "1px solid #0ec14c",
            },
            iconTheme: {
              primary: "#0ec14c",
              secondary: "#fff",
            },
          },
          error: {
            style: {
              border: "1px solid #ef4444",
            },
            iconTheme: {
              primary: "#ef4444",
              secondary: "#fff",
            },
          },
        }}
      />
    </ThemeProvider>
  );
}
