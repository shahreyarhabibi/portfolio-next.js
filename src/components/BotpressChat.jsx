import { useEffect } from "react";

export default function BotpressChat() {
  useEffect(() => {
    // First script (Botpress webchat library)
    const script1 = document.createElement("script");
    script1.src = "https://cdn.botpress.cloud/webchat/v3.4/inject.js";
    script1.async = true;
    document.body.appendChild(script1);

    // Wait for first script to load, then add the second
    script1.onload = () => {
      const script2 = document.createElement("script");
      script2.src =
        "https://files.bpcontent.cloud/2025/12/02/05/20251202055904-LJ3O0CX8.js";
      document.body.appendChild(script2);
    };

    // Optional: handle loading errors
    script1.onerror = () => {
      console.error("Failed to load Botpress webchat library");
    };

    // Cleanup scripts on unmount
    return () => {
      const scripts = document.querySelectorAll(
        'script[src*="botpress"], script[src*="bpcontent"]',
      );
      scripts.forEach((script) => script.remove());
    };
  }, []);

  return null;
}
