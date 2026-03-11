"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/language-context";
import { LanguageToggle } from "./language-toggle";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Menu, X, ChevronDown, FileText, Calculator, Building2, FolderOpen, ArrowLeftRight, Sparkles } from "lucide-react";
import { useState, useRef } from "react";

const serviceDropdownItems = [
  { key: "nav.service.fiscalite", href: "/fiscalite", icon: FileText },
  { key: "nav.service.comptabilite", href: "/comptabilite", icon: Calculator },
  { key: "nav.service.creation", href: "/creation-d-entreprise", icon: Building2 },
  { key: "nav.service.administratif", href: "/administratif", icon: FolderOpen },
  { key: "nav.service.frontaliers", href: "/frontaliers", icon: ArrowLeftRight },
  { key: "nav.service.offres", href: "/offres-etendues", icon: Sparkles },
];

const otherNavLinks = [
  { key: "nav.about", href: "/a-propos" },
  { key: "nav.contact", href: "/#contact" },
];

export function Header() {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const { scrollY } = useScroll();
  const headerBg = useTransform(
    scrollY,
    [0, 80],
    ["rgba(51,53,51,0)", "rgba(36,36,35,0.96)"]
  );
  const headerBorder = useTransform(
    scrollY,
    [0, 80],
    ["rgba(245,203,92,0)", "rgba(245,203,92,0.18)"]
  );

  function openDropdown() {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setDropdownOpen(true);
  }
  function closeDropdown() {
    dropdownTimeout.current = setTimeout(() => setDropdownOpen(false), 120);
  }

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
            <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.2 }}>
              <img
                src="/logo.png"
                alt="Fidsmart Solutions"
                className="h-12 lg:h-14 w-auto object-contain dark:invert transition-all"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {/* Services dropdown */}
            <div
              className="relative"
              onMouseEnter={openDropdown}
              onMouseLeave={closeDropdown}
            >
              <button className="flex items-center gap-1 text-sm font-medium tracking-wide text-white/70 hover:text-white transition-colors duration-300 relative group">
                {t("nav.services")}
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                  strokeWidth={2}
                />
                <span className="absolute -bottom-1 left-0 w-full h-px bg-[#F5CB5C] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.97 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    onMouseEnter={openDropdown}
                    onMouseLeave={closeDropdown}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-[#2a2a28]/95 backdrop-blur-md border border-[#F5CB5C]/20 shadow-2xl shadow-black/40"
                    style={{ borderRadius: "2px" }}
                  >
                    {/* Top gold rule */}
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-[#F5CB5C]/50 to-transparent" />

                    <div className="py-2">
                      {serviceDropdownItems.map((item, i) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.key}
                            href={item.href}
                            onClick={() => setDropdownOpen(false)}
                            className="flex items-center gap-3 px-4 py-2.5 text-white/65 hover:text-white hover:bg-white/5 transition-colors duration-150 group/item"
                          >
                            <div className="w-7 h-7 shrink-0 flex items-center justify-center rounded-sm border border-[#F5CB5C]/0 group-hover/item:border-[#F5CB5C]/30 transition-colors duration-150"
                              style={{ backgroundColor: "rgba(245,203,92,0)" }}
                            >
                              <Icon className="w-3.5 h-3.5 text-[#F5CB5C]/60 group-hover/item:text-[#F5CB5C] transition-colors duration-150" strokeWidth={1.5} />
                            </div>
                            <span className="text-sm font-medium">{t(item.key)}</span>
                          </Link>
                        );
                      })}
                    </div>

                    <div className="h-px w-full bg-gradient-to-r from-transparent via-[#F5CB5C]/20 to-transparent" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Other nav links */}
            {otherNavLinks.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className="text-sm font-medium tracking-wide text-white/70 hover:text-white transition-colors duration-300 relative group"
              >
                {t(link.key)}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#F5CB5C] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Controls */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2">
              <LanguageToggle />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-sm border border-white/20 text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
          className="md:hidden bg-[#1c1c1b] border-b border-[#F5CB5C]/20"
        >
          <nav className="flex flex-col gap-1 px-4 py-4">
            {/* Services accordion */}
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="flex items-center justify-between text-base font-medium text-white/70 hover:text-white hover:bg-white/5 px-4 py-3 rounded-sm transition-colors duration-200 w-full text-left"
            >
              {t("nav.services")}
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                strokeWidth={2}
              />
            </button>

            {mobileServicesOpen && (
              <div className="pl-4 border-l border-[#F5CB5C]/20 ml-4 mb-1">
                {serviceDropdownItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.key}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-3 text-sm text-white/60 hover:text-white px-4 py-2.5 hover:bg-white/5 rounded-sm transition-colors duration-150"
                    >
                      <Icon className="w-4 h-4 text-[#F5CB5C]/70 shrink-0" strokeWidth={1.5} />
                      {t(item.key)}
                    </Link>
                  );
                })}
              </div>
            )}

            {otherNavLinks.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-white/70 hover:text-white hover:bg-white/5 px-4 py-3 rounded-sm transition-colors duration-200"
              >
                {t(link.key)}
              </Link>
            ))}

            <div className="mt-3 pt-3 border-t border-white/10 flex justify-end px-4">
              <LanguageToggle />
            </div>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
