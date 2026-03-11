"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import { motion } from "framer-motion";

const footerLinks = [
  { key: "nav.home", href: "/" },
  { key: "nav.services", href: "/#services" },
  { key: "nav.about", href: "/a-propos" },
  { key: "nav.contact", href: "/contact" },
];

const serviceLinks = [
  { key: "nav.service.fiscalite", href: "/fiscalite" },
  { key: "nav.service.comptabilite", href: "/comptabilite" },
  { key: "nav.service.creation", href: "/creation-d-entreprise" },
  { key: "nav.service.administratif", href: "/administratif" },
  { key: "nav.service.frontaliers", href: "/frontaliers" },
  { key: "nav.service.offres", href: "/offres-etendues" },
];

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="inline-block mb-4">
              <img
                src="/logo.png"
                alt="Fidsmart Solutions Logo"
                className="h-14 w-auto object-contain dark:invert"
              />
            </Link>
            <p className="text-muted text-sm leading-relaxed">
              Fidsmart Solutions - Votre partenaire de confiance pour la gestion d&apos;entreprise en Suisse.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-semibold text-foreground mb-4">Navigation</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-accent transition-colors duration-300"
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-semibold text-foreground mb-4">{t("nav.services")}</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-accent transition-colors duration-300"
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex items-center justify-center">
          <p className="text-sm text-muted">
            © {currentYear} Fidsmart Solutions. {t("footer.rights")}.
          </p>
        </div>
      </div>
    </footer>
  );
}
