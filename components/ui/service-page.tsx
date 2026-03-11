"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export interface ServiceFeature {
  text: string;
  description?: string;
}

export interface ServicePageProps {
  iconSlot: React.ReactNode;
  title: string;
  subtitle: string;
  intro: string[];
  features?: ServiceFeature[];
  secondarySection?: {
    title: string;
    intro?: string[];
    features: ServiceFeature[];
  };
  note?: string;
}

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

export function ServicePage({
  iconSlot,
  title,
  subtitle,
  intro,
  features,
  secondarySection,
  note,
}: ServicePageProps) {
  return (
    <div className="relative">
      {/* ── HERO ── */}
      <section className="relative h-[52vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/about-hero.png"
          alt={title}
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
            {/* Icon badge */}
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-sm border border-[#F5CB5C]/40 mb-6"
              style={{ backgroundColor: "rgba(245,203,92,0.1)" }}>
              {iconSlot}
            </div>

            <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-white leading-tight mb-5">
              {title}
            </h1>

            <div className="flex items-center justify-center gap-3 mb-0">
              <span className="block w-8 h-px bg-[#F5CB5C]/50" />
              <p className="text-white/65 text-sm sm:text-base max-w-xl leading-relaxed">
                {subtitle}
              </p>
              <span className="block w-8 h-px bg-[#F5CB5C]/50" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            {intro.map((para, i) => (
              <p
                key={i}
                className={`text-foreground/80 leading-relaxed ${
                  i === 0 ? "text-lg sm:text-xl font-medium mb-5" : "text-base mb-4"
                }`}
              >
                {para}
              </p>
            ))}
          </FadeIn>
        </div>
      </section>

      {/* ── FEATURES ── */}
      {features && features.length > 0 && (
        <section className="pb-16 lg:pb-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="flex items-center gap-3 mb-8">
                <span className="block w-8 h-px bg-[#F5CB5C]" />
                <span className="text-[#F5CB5C] text-[10px] font-semibold tracking-[0.25em] uppercase">
                  Nos prestations
                </span>
              </div>
            </FadeIn>

            <div className="grid gap-3">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  className="flex items-start gap-4 p-5 bg-card border border-border rounded-sm hover:border-[#F5CB5C]/30 transition-colors duration-300"
                >
                  <div
                    className="w-6 h-6 shrink-0 rounded-sm flex items-center justify-center mt-0.5"
                    style={{
                      backgroundColor: "rgba(245,203,92,0.12)",
                      border: "1px solid rgba(245,203,92,0.35)",
                    }}
                  >
                    <Check className="w-3.5 h-3.5 text-[#F5CB5C]" strokeWidth={2.5} />
                  </div>
                  <div>
                    <span className="text-foreground font-medium text-sm leading-snug">
                      {feature.text}
                    </span>
                    {feature.description && (
                      <p className="text-muted text-xs mt-1 leading-relaxed">
                        {feature.description}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── SECONDARY SECTION ── */}
      {secondarySection && (
        <section className="py-16 lg:py-24 bg-card/40 border-y border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="block w-8 h-px bg-[#F5CB5C]" />
                <span className="text-[#F5CB5C] text-[10px] font-semibold tracking-[0.25em] uppercase">
                  {secondarySection.title}
                </span>
              </div>
              {secondarySection.intro?.map((para, i) => (
                <p key={i} className="text-foreground/75 text-base leading-relaxed mb-3">
                  {para}
                </p>
              ))}
            </FadeIn>

            <div className="grid gap-3">
              {secondarySection.features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  className="flex items-start gap-4 p-5 bg-card border border-border rounded-sm hover:border-[#F5CB5C]/30 transition-colors duration-300"
                >
                  <div
                    className="w-6 h-6 shrink-0 rounded-sm flex items-center justify-center mt-0.5"
                    style={{
                      backgroundColor: "rgba(245,203,92,0.12)",
                      border: "1px solid rgba(245,203,92,0.35)",
                    }}
                  >
                    <Check className="w-3.5 h-3.5 text-[#F5CB5C]" strokeWidth={2.5} />
                  </div>
                  <div>
                    <span className="text-foreground font-medium text-sm leading-snug">
                      {feature.text}
                    </span>
                    {feature.description && (
                      <p className="text-muted text-xs mt-1 leading-relaxed">
                        {feature.description}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── NOTE ── */}
      {note && (
        <section className="py-12 bg-background">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <p className="text-muted text-sm leading-relaxed italic border-l-2 border-[#F5CB5C]/40 pl-5">
                {note}
              </p>
            </FadeIn>
          </div>
        </section>
      )}

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
              Discutons de votre projet
            </h2>
            <p className="text-white/50 text-sm leading-relaxed mb-8 max-w-md mx-auto">
              Notre équipe vous répond dans les 24 heures ouvrables.
            </p>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold tracking-wide rounded-sm transition-all duration-300 group"
                style={{ backgroundColor: "#F5CB5C", color: "#242423" }}
              >
                Nous contacter
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
