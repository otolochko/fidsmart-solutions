"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Clock, Users, Shield } from "lucide-react";

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.65, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function AboutPage() {
  const { t } = useLanguage();

  const details = [
    { key: "about.location", icon: MapPin, delay: 0 },
    { key: "about.hours", icon: Clock, delay: 0.1 },
    { key: "about.meetings", icon: Users, delay: 0.2 },
  ];

  return (
    <div className="relative">
      {/* ── HERO ── */}
      <section className="relative h-[52vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/about-hero.png"
          alt="À propos de Fidsmart Solutions"
          fill
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(36,36,35,0.82) 0%, rgba(36,36,35,0.70) 60%, rgba(36,36,35,0.90) 100%)",
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F5CB5C]/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F5CB5C]/25 to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div
              className="inline-flex items-center justify-center w-14 h-14 rounded-sm border border-[#F5CB5C]/40 mb-6"
              style={{ backgroundColor: "rgba(245,203,92,0.1)" }}
            >
              <Shield className="w-6 h-6 text-[#F5CB5C]" strokeWidth={1.5} />
            </div>

            <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-white leading-tight mb-5">
              {t("about.hero.title")}
              <br />
              <span style={{ color: "#F5CB5C" }}>Fidsmart Solutions</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-lg sm:text-xl font-medium text-foreground/80 leading-relaxed mb-5">
              {t("about.hero.subtitle")}
            </p>
            <p className="text-base text-foreground/70 leading-relaxed">
              {t("about.description")}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── INFO GRID ── */}
      <section className="pb-16 lg:pb-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-3">
            {details.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.key}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: item.delay }}
                  className="flex items-start gap-4 p-5 bg-card border border-border rounded-sm hover:border-[#F5CB5C]/30 transition-colors duration-300"
                >
                  <div
                    className="w-6 h-6 shrink-0 rounded-sm flex items-center justify-center mt-0.5"
                    style={{
                      backgroundColor: "rgba(245,203,92,0.12)",
                      border: "1px solid rgba(245,203,92,0.35)",
                    }}
                  >
                    <Icon className="w-3.5 h-3.5 text-[#F5CB5C]" strokeWidth={2} />
                  </div>
                  <div>
                    <span className="text-foreground font-medium text-sm">
                      {t(`${item.key}.title`)}
                    </span>
                    <p className="text-muted text-xs mt-1 leading-relaxed">
                      {t(`${item.key}.detail`)}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 lg:py-24 bg-[#242423]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="block w-8 h-px bg-[#F5CB5C]/50" />
              <span className="text-[#F5CB5C] text-[10px] font-semibold tracking-[0.25em] uppercase">
                Prendre contact
              </span>
              <span className="block w-8 h-px bg-[#F5CB5C]/50" />
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
              Prêt à propulser votre entreprise?
            </h2>
            <p className="text-white/50 text-sm leading-relaxed mb-8 max-w-md mx-auto">
              Découvrez comment notre expertise peut faire la différence pour votre gestion fiduciaire et administrative.
            </p>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold tracking-wide rounded-sm transition-all duration-300 group"
                style={{ backgroundColor: "#F5CB5C", color: "#242423" }}
              >
                {t("nav.contact")}
                <ArrowRight
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  strokeWidth={2}
                />
              </Link>
            </motion.div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
