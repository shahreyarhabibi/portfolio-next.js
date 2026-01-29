/**
 * BotpressChat Component (Client)
 * Loads Botpress webchat via external scripts
 */

"use client";

import { useEffect } from "react";

export default function BotpressChat() {
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.src = "https://cdn.botpress.cloud/webchat/v3.4/inject.js";
    script1.async = true;
    document.body.appendChild(script1);

    script1.onload = () => {
      const script2 = document.createElement("script");
      script2.src =
        "https://files.bpcontent.cloud/2025/12/02/05/20251202055904-LJ3O0CX8.js";
      document.body.appendChild(script2);
    };

    script1.onerror = () => {
      console.error("Failed to load Botpress webchat library");
    };

    return () => {
      const scripts = document.querySelectorAll(
        'script[src*="botpress"], script[src*="bpcontent"]',
      );
      scripts.forEach((script) => script.remove());
    };
  }, []);

  return null;
}
