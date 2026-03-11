"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/language-context";
import { ThemeToggle } from "./theme-toggle";
import { LanguageToggle } from "./language-toggle";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X, LockKeyhole } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { key: "nav.services", href: "/#services" },
  { key: "nav.about", href: "/a-propos" },
  { key: "nav.contact", href: "/#contact" },
];

export function Header() {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const headerBg = useTransform(
    scrollY,
    [0, 80],
    ["rgba(26,43,60,0)", "rgba(10,20,32,0.96)"]
  );
  const headerBorder = useTransform(
    scrollY,
    [0, 80],
    ["rgba(212,175,55,0)", "rgba(212,175,55,0.18)"]
  );

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{ backgroundColor: headerBg, borderBottomColor: headerBorder }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
            >
              <img
                src="/logo.png"
                alt="Fidsmart Solutions"
                className="h-12 lg:h-14 w-auto object-contain dark:invert transition-all"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className="text-sm font-medium tracking-wide text-white/70 hover:text-white transition-colors duration-300 relative group"
              >
                {t(link.key)}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Controls */}
          <div className="flex items-center gap-3">
            {/* Client Portal CTA */}
            <motion.a
              href="/portail-client"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-sm border border-[#D4AF37]/60 text-[#D4AF37] text-xs font-semibold tracking-widest uppercase hover:bg-[#D4AF37]/10 transition-colors duration-300"
            >
              <LockKeyhole className="w-3.5 h-3.5" strokeWidth={1.5} />
              {t("nav.clientportal")}
            </motion.a>

            <div className="hidden md:flex items-center gap-2">
              <LanguageToggle />
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-sm border border-white/20 text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-[#0d1e2e] border-b border-[#D4AF37]/20"
        >
          <nav className="flex flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-white/70 hover:text-white hover:bg-white/5 px-4 py-3 rounded-sm transition-colors duration-200"
              >
                {t(link.key)}
              </Link>
            ))}
            <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between px-4">
              <a
                href="/portail-client"
                className="inline-flex items-center gap-2 text-[#D4AF37] text-xs font-semibold tracking-widest uppercase"
              >
                <LockKeyhole className="w-3.5 h-3.5" strokeWidth={1.5} />
                {t("nav.clientportal")}
              </a>
              <div className="flex items-center gap-2">
                <LanguageToggle />
                <ThemeToggle />
              </div>
            </div>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
