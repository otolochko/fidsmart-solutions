"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import Image from "next/image";
import { useRef, useState } from "react";
import {
  FileText,
  Calculator,
  Building2,
  MapPin,
  Settings,
  Users,
  Globe,
  Megaphone,
  ArrowRight,
  Check,
  Mail,
  Phone,
  Clock,
  ChevronDown,
} from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const mainServices = [
  { key: "services.fiscalite", icon: FileText, delay: 0 },
  { key: "services.comptabilite", icon: Calculator, delay: 0.07 },
  { key: "services.creation", icon: Building2, delay: 0.14 },
  { key: "services.domiciliation", icon: MapPin, delay: 0.21 },
  { key: "services.gestion", icon: Settings, delay: 0.28 },
  { key: "services.rh", icon: Users, delay: 0.35 },
];

const complementaryServices = [
  { key: "complementary.traduction", icon: Globe, delay: 0 },
  { key: "complementary.marketing", icon: Megaphone, delay: 0.07 },
];

const expertiseAdvantages = [
  "expertise.adv1",
  "expertise.adv2",
  "expertise.adv3",
  "expertise.adv4",
  "expertise.adv5",
  "expertise.adv6",
];

// ─── Fade-in wrapper ──────────────────────────────────────────────────────────

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
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Section label ────────────────────────────────────────────────────────────

function SectionLabel({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 justify-center mb-5">
      <span className="block w-8 h-px bg-[#D4AF37]" />
      <span className="text-[#D4AF37] text-[10px] font-semibold tracking-[0.25em] uppercase">
        {text}
      </span>
      <span className="block w-8 h-px bg-[#D4AF37]" />
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function Home() {
  const { t } = useLanguage();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const [formState, setFormState] = useState({ name: "", email: "", message: "" });

  return (
    <div className="relative bg-[#fdfbf7] dark:bg-[#0f1520]">

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative min-h-screen -mt-16 lg:-mt-20 flex items-center justify-center overflow-hidden"
      >
        {/* Parallax background image */}
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <Image
            src="/hero-image.png"
            alt="Geneva lakefront"
            fill
            className="object-cover"
            priority
            quality={90}
          />
        </motion.div>

        {/* Gradient overlay — deep navy with subtle gradient direction */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,20,35,0.88) 0%, rgba(0,0,0,0.55) 50%, rgba(10,20,35,0.88) 100%)",
          }}
        />

        {/* Subtle grain texture */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
          }}
        />

        {/* Gold thin top rule */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />

        {/* Content */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center justify-center gap-3 mb-10"
          >
            <span className="block w-8 h-px bg-[#D4AF37]/60" />
            <span className="text-[#D4AF37]/80 text-[10px] font-semibold tracking-[0.3em] uppercase">
              {t("hero.badge")}
            </span>
            <span className="block w-8 h-px bg-[#D4AF37]/60" />
          </motion.div>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-display font-bold leading-[0.92] mb-8"
          >
            <span className="block text-white text-[clamp(3.5rem,10vw,8rem)]">
              {t("hero.headline1")}
            </span>
            <span
              className="block text-[clamp(3.5rem,10vw,8rem)]"
              style={{ color: "#D4AF37" }}
            >
              {t("hero.headline2")}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            {t("hero.subtitle2")}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            {/* Ghost */}
            <motion.a
              href="#services"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 text-white text-sm font-medium tracking-wide rounded-sm hover:border-white/60 hover:bg-white/5 transition-all duration-300"
            >
              {t("hero.cta.services")}
            </motion.a>

            {/* Solid gold */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02, backgroundColor: "#c9a227" }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold tracking-wide rounded-sm transition-all duration-300 group"
              style={{ backgroundColor: "#D4AF37", color: "#0f1a24" }}
            >
              {t("hero.cta.contact")}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-5 h-5 text-white/30" strokeWidth={1.5} />
          </motion.div>
        </motion.div>

        {/* Bottom gold rule */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
      </section>

      {/* ── STATS STRIP ──────────────────────────────────────────────── */}
      <section className="bg-[#1A2B3C] border-b border-[#D4AF37]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {[
              { label: t("stats.since.label"), value: t("stats.since.value") },
              { label: t("stats.clients.label"), value: t("stats.clients.value") },
              { label: t("stats.services.label"), value: t("stats.services.value") },
              { label: t("stats.languages.label"), value: t("stats.languages.value") },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`py-8 px-6 text-center ${
                  i < 3 ? "border-r border-[#D4AF37]/10" : ""
                }`}
              >
                <div
                  className="font-display font-bold text-3xl sm:text-4xl mb-1"
                  style={{ color: "#D4AF37" }}
                >
                  {stat.value}
                </div>
                <div className="text-white/50 text-xs tracking-wide uppercase">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────────── */}
      <section
        id="services"
        className="py-24 lg:py-36 bg-[#fdfbf7] dark:bg-[#0f1520]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <SectionLabel text={t("services.section.label")} />
            <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-[#1A2B3C] dark:text-white mb-5 leading-tight">
              {t("services.title")}
            </h2>
            <p className="text-[#1A2B3C]/60 dark:text-white/50 max-w-xl mx-auto text-base leading-relaxed">
              {t("services.section.subtitle")}
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#e5e7eb] dark:bg-[#D4AF37]/10">
            {mainServices.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.key}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.55, delay: service.delay }}
                  whileHover={{ y: -4 }}
                  className="group bg-white dark:bg-[#0f1520] p-8 lg:p-10 transition-all duration-300 hover:shadow-xl hover:shadow-[#1A2B3C]/5 dark:hover:shadow-black/20 relative overflow-hidden"
                >
                  {/* Gold accent bar on hover */}
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-[#D4AF37] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                  <div className="w-12 h-12 rounded-sm border border-[#D4AF37]/30 group-hover:border-[#D4AF37]/70 flex items-center justify-center mb-6 transition-colors duration-300">
                    <Icon
                      className="w-5 h-5 text-[#D4AF37]"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="font-display font-bold text-xl text-[#1A2B3C] dark:text-white mb-3">
                    {t(service.key)}
                  </h3>
                  <p className="text-sm text-[#1A2B3C]/55 dark:text-white/45 leading-relaxed">
                    {t(`${service.key}.desc`)}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-[#D4AF37] text-xs font-semibold tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>En savoir plus</span>
                    <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Complementary services */}
          <div className="mt-px grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#e5e7eb] dark:bg-[#D4AF37]/10">
            {complementaryServices.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.key}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: service.delay }}
                  whileHover={{ y: -4 }}
                  className="group bg-white dark:bg-[#0f1520] p-8 lg:p-10 transition-all duration-300 hover:shadow-xl relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-[#D4AF37] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 shrink-0 rounded-sm border border-[#D4AF37]/30 group-hover:border-[#D4AF37]/70 flex items-center justify-center transition-colors duration-300">
                      <Icon className="w-5 h-5 text-[#D4AF37]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-xl text-[#1A2B3C] dark:text-white mb-2">
                        {t(service.key)}
                      </h3>
                      <p className="text-sm text-[#1A2B3C]/55 dark:text-white/45 leading-relaxed">
                        {t(`${service.key}.desc`)}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SWISS ADVANTAGE ──────────────────────────────────────────── */}
      <section className="bg-[#1A2B3C] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
            {/* Left — image */}
            <div className="relative overflow-hidden min-h-[380px] lg:min-h-0">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80"
                alt="Professional Geneva office"
                fill
                className="object-cover"
              />
              {/* Dark navy overlay */}
              <div className="absolute inset-0 bg-[#1A2B3C]/40" />

              {/* Decorative corner accents */}
              <div className="absolute top-8 left-8 w-16 h-16 border-t border-l border-[#D4AF37]/50" />
              <div className="absolute bottom-8 right-8 w-16 h-16 border-b border-r border-[#D4AF37]/50" />

              {/* Floating badge */}
              <div className="absolute bottom-10 left-10 bg-[#1A2B3C]/90 backdrop-blur-sm border border-[#D4AF37]/30 px-5 py-4">
                <div className="text-[#D4AF37] font-display font-bold text-2xl">
                  2022
                </div>
                <div className="text-white/60 text-xs tracking-widest uppercase mt-0.5">
                  Fondé à Genève
                </div>
              </div>
            </div>

            {/* Right — content */}
            <div className="px-8 py-16 lg:px-16 lg:py-20 flex flex-col justify-center">
              <FadeIn>
                <div className="flex items-center gap-3 mb-6">
                  <span className="block w-8 h-px bg-[#D4AF37]/60" />
                  <span className="text-[#D4AF37] text-[10px] font-semibold tracking-[0.25em] uppercase">
                    {t("expertise.section.label")}
                  </span>
                </div>
                <h2 className="font-display font-bold text-4xl sm:text-5xl text-white leading-tight mb-5">
                  {t("expertise.title")}
                </h2>
                <p className="text-white/50 text-sm leading-relaxed mb-10 max-w-md">
                  {t("expertise.subtitle")}
                </p>

                <ul className="space-y-4">
                  {expertiseAdvantages.map((key, i) => (
                    <motion.li
                      key={key}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.07 }}
                      className="flex items-start gap-4"
                    >
                      <div
                        className="w-5 h-5 shrink-0 rounded-sm flex items-center justify-center mt-0.5"
                        style={{ backgroundColor: "rgba(212,175,55,0.15)", border: "1px solid rgba(212,175,55,0.4)" }}
                      >
                        <Check className="w-3 h-3 text-[#D4AF37]" strokeWidth={2.5} />
                      </div>
                      <span className="text-white/75 text-sm leading-snug">
                        {t(key)}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-10">
                  <motion.a
                    href="/a-propos"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 text-[#D4AF37] text-sm font-semibold tracking-wide group"
                  >
                    En savoir plus sur Fidsmart
                    <ArrowRight
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      strokeWidth={2}
                    />
                  </motion.a>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>



      {/* ── CONTACT ──────────────────────────────────────────────────── */}
      <section
        id="contact"
        className="py-24 lg:py-36 bg-[#fdfbf7] dark:bg-[#0f1520]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <SectionLabel text={t("contact.section.label")} />
            <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-[#1A2B3C] dark:text-white mb-5 leading-tight">
              {t("contact.title")}
            </h2>
            <p className="text-[#1A2B3C]/55 dark:text-white/45 max-w-lg mx-auto text-base leading-relaxed">
              {t("contact.subtitle")}
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[#e5e7eb] dark:bg-[#D4AF37]/10">
            {/* Map placeholder */}
            <FadeIn className="bg-white dark:bg-[#0f1520] p-8 lg:p-10 flex flex-col gap-6">
              {/* Styled map mockup */}
              <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden bg-[#1A2B3C]">
                {/* Map grid lines */}
                <svg
                  className="absolute inset-0 w-full h-full opacity-20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <pattern
                      id="mapgrid"
                      width="40"
                      height="40"
                      patternUnits="userSpaceOnUse"
                    >
                      <path
                        d="M 40 0 L 0 0 0 40"
                        fill="none"
                        stroke="#D4AF37"
                        strokeWidth="0.5"
                      />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#mapgrid)" />
                  {/* Simulated road lines */}
                  <line x1="20%" y1="0" x2="40%" y2="100%" stroke="#D4AF37" strokeWidth="1" opacity="0.6" />
                  <line x1="55%" y1="0" x2="70%" y2="100%" stroke="#D4AF37" strokeWidth="1" opacity="0.6" />
                  <line x1="0" y1="35%" x2="100%" y2="45%" stroke="#D4AF37" strokeWidth="1.5" opacity="0.5" />
                  <line x1="0" y1="65%" x2="100%" y2="70%" stroke="#D4AF37" strokeWidth="1" opacity="0.4" />
                  <line x1="0" y1="15%" x2="100%" y2="25%" stroke="#D4AF37" strokeWidth="0.8" opacity="0.3" />
                </svg>

                {/* Location label */}
                <div className="absolute top-3 left-3 bg-[#1A2B3C]/80 backdrop-blur-sm border border-[#D4AF37]/30 px-3 py-1.5">
                  <span className="text-[#D4AF37] text-[10px] tracking-widest font-semibold uppercase">
                    Genève, Suisse
                  </span>
                </div>

                {/* Pulsing pin */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <motion.div
                    animate={{ scale: [1, 1.6, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute w-10 h-10 rounded-full"
                    style={{ backgroundColor: "rgba(212,175,55,0.2)" }}
                  />
                  <div
                    className="w-5 h-5 rounded-full border-2 border-[#D4AF37] flex items-center justify-center relative z-10"
                    style={{ backgroundColor: "rgba(212,175,55,0.3)" }}
                  >
                    <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                  </div>
                  <div className="w-px h-4 bg-[#D4AF37]" />
                </div>
              </div>

              {/* Contact details */}
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 shrink-0 rounded-sm border border-[#D4AF37]/30 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-[#D4AF37]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-[10px] text-[#1A2B3C]/40 dark:text-white/35 uppercase tracking-wider mb-0.5">
                      Adresse
                    </div>
                    <div className="text-sm text-[#1A2B3C] dark:text-white/80 font-medium">
                      {t("contact.address")}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 shrink-0 rounded-sm border border-[#D4AF37]/30 flex items-center justify-center">
                    <Phone className="w-4 h-4 text-[#D4AF37]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-[10px] text-[#1A2B3C]/40 dark:text-white/35 uppercase tracking-wider mb-0.5">
                      Téléphone
                    </div>
                    <a
                      href={`tel:${t("contact.phone")}`}
                      className="text-sm text-[#1A2B3C] dark:text-white/80 font-medium hover:text-[#D4AF37] transition-colors"
                    >
                      {t("contact.phone")}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 shrink-0 rounded-sm border border-[#D4AF37]/30 flex items-center justify-center">
                    <Clock className="w-4 h-4 text-[#D4AF37]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-[10px] text-[#1A2B3C]/40 dark:text-white/35 uppercase tracking-wider mb-0.5">
                      Horaires
                    </div>
                    <div className="text-sm text-[#1A2B3C] dark:text-white/80 font-medium">
                      {t("contact.hours")}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 shrink-0 rounded-sm border border-[#D4AF37]/30 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-[#D4AF37]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-[10px] text-[#1A2B3C]/40 dark:text-white/35 uppercase tracking-wider mb-0.5">
                      Email
                    </div>
                    <a
                      href={`mailto:${t("contact.email")}`}
                      className="text-sm text-[#1A2B3C] dark:text-white/80 font-medium hover:text-[#D4AF37] transition-colors"
                    >
                      {t("contact.email")}
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Contact form */}
            <FadeIn delay={0.1} className="bg-white dark:bg-[#0f1520] p-8 lg:p-10">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="space-y-6 h-full flex flex-col justify-between"
              >
                <div className="space-y-5">
                  <div>
                    <label className="block text-[10px] font-semibold tracking-[0.2em] uppercase text-[#1A2B3C]/50 dark:text-white/40 mb-2">
                      {t("contact.form.name")}
                    </label>
                    <input
                      type="text"
                      value={formState.name}
                      onChange={(e) =>
                        setFormState((s) => ({ ...s, name: e.target.value }))
                      }
                      placeholder={t("contact.form.placeholder.name")}
                      className="w-full px-4 py-3 bg-transparent border border-[#e5e7eb] dark:border-[#D4AF37]/15 text-[#1A2B3C] dark:text-white text-sm placeholder:text-[#1A2B3C]/30 dark:placeholder:text-white/25 outline-none focus:border-[#D4AF37]/60 transition-colors duration-300 rounded-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-semibold tracking-[0.2em] uppercase text-[#1A2B3C]/50 dark:text-white/40 mb-2">
                      {t("contact.form.email")}
                    </label>
                    <input
                      type="email"
                      value={formState.email}
                      onChange={(e) =>
                        setFormState((s) => ({ ...s, email: e.target.value }))
                      }
                      placeholder={t("contact.form.placeholder.email")}
                      className="w-full px-4 py-3 bg-transparent border border-[#e5e7eb] dark:border-[#D4AF37]/15 text-[#1A2B3C] dark:text-white text-sm placeholder:text-[#1A2B3C]/30 dark:placeholder:text-white/25 outline-none focus:border-[#D4AF37]/60 transition-colors duration-300 rounded-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-semibold tracking-[0.2em] uppercase text-[#1A2B3C]/50 dark:text-white/40 mb-2">
                      {t("contact.form.message")}
                    </label>
                    <textarea
                      rows={6}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState((s) => ({ ...s, message: e.target.value }))
                      }
                      placeholder={t("contact.form.placeholder.message")}
                      className="w-full px-4 py-3 bg-transparent border border-[#e5e7eb] dark:border-[#D4AF37]/15 text-[#1A2B3C] dark:text-white text-sm placeholder:text-[#1A2B3C]/30 dark:placeholder:text-white/25 outline-none focus:border-[#D4AF37]/60 transition-colors duration-300 rounded-sm resize-none"
                    />
                  </div>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 text-sm font-semibold tracking-wider uppercase transition-colors duration-300 rounded-sm flex items-center justify-center gap-2 group"
                  style={{ backgroundColor: "#D4AF37", color: "#0f1a24" }}
                >
                  {t("contact.form.submit")}
                  <ArrowRight
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    strokeWidth={2}
                  />
                </motion.button>
              </form>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
