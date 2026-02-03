"use client";

import { useLanguage } from "@/lib/language-context";
import { motion } from "framer-motion";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 p-1 rounded-full bg-card border border-border">
      <motion.button
        onClick={() => setLanguage("fr")}
        className={`px-3 py-1 text-sm font-medium rounded-full transition-colors duration-300 ${
          language === "fr"
            ? "bg-accent text-accent-foreground"
            : "text-muted hover:text-foreground"
        }`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        aria-label="Switch to French"
      >
        FR
      </motion.button>
      <motion.button
        onClick={() => setLanguage("en")}
        className={`px-3 py-1 text-sm font-medium rounded-full transition-colors duration-300 ${
          language === "en"
            ? "bg-accent text-accent-foreground"
            : "text-muted hover:text-foreground"
        }`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        aria-label="Switch to English"
      >
        EN
      </motion.button>
    </div>
  );
}
