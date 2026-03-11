"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import Image from "next/image";
import { useRef, useState } from "react";
import Link from "next/link";
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
  CalendarDays,
} from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

// href: null = no dedicated page, string = links to page
const mainServices = [
  { key: "services.fiscalite", icon: FileText, delay: 0, href: "/fiscalite" },
  { key: "services.comptabilite", icon: Calculator, delay: 0.07, href: "/comptabilite" },
  { key: "services.creation", icon: Building2, delay: 0.14, href: "/creation-d-entreprise" },
  { key: "services.domiciliation", icon: MapPin, delay: 0.21, href: null },
  { key: "services.gestion", icon: Settings, delay: 0.28, href: null },
  { key: "services.rh", icon: Users, delay: 0.35, href: null },
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
      <span className="block w-8 h-px bg-[#F5CB5C]" />
      <span className="text-[#F5CB5C] text-[10px] font-semibold tracking-[0.25em] uppercase">
        {text}
      </span>
      <span className="block w-8 h-px bg-[#F5CB5C]" />
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
    <div className="relative bg-[#E8EDDF] dark:bg-[#333533]">

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
              "linear-gradient(to bottom, rgba(36,36,35,0.88) 0%, rgba(36,36,35,0.55) 50%, rgba(36,36,35,0.88) 100%)",
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
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F5CB5C]/40 to-transparent" />

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
            <span className="block w-8 h-px bg-[#F5CB5C]/60" />
            <span className="text-[#F5CB5C]/80 text-[10px] font-semibold tracking-[0.3em] uppercase">
              {t("hero.badge")}
            </span>
            <span className="block w-8 h-px bg-[#F5CB5C]/60" />
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
              style={{ color: "#F5CB5C" }}
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
              whileHover={{ scale: 1.02, backgroundColor: "#e8b84b" }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold tracking-wide rounded-sm transition-all duration-300 group"
              style={{ backgroundColor: "#F5CB5C", color: "#242423" }}
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
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F5CB5C]/30 to-transparent" />
      </section>

      {/* ── STATS STRIP ──────────────────────────────────────────────── */}
      <section className="bg-[#242423] border-b border-[#F5CB5C]/15">
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
                  i < 3 ? "border-r border-[#F5CB5C]/10" : ""
                }`}
              >
                <div
                  className="font-display font-bold text-3xl sm:text-4xl mb-1"
                  style={{ color: "#F5CB5C" }}
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
        className="py-24 lg:py-36 bg-[#E8EDDF] dark:bg-[#333533]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <SectionLabel text={t("services.section.label")} />
            <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-[#242423] dark:text-white mb-5 leading-tight">
              {t("services.title")}
            </h2>
            <p className="text-[#242423]/60 dark:text-white/50 max-w-xl mx-auto text-base leading-relaxed">
              {t("services.section.subtitle")}
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#CFDBD5] dark:bg-[#F5CB5C]/10">
            {mainServices.map((service) => {
              const Icon = service.icon;
              const cardContent = (
                <>
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-[#F5CB5C] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  <div className="w-12 h-12 rounded-sm border border-[#F5CB5C]/30 group-hover:border-[#F5CB5C]/70 flex items-center justify-center mb-6 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-[#F5CB5C]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display font-bold text-xl text-[#242423] dark:text-white mb-3">
                    {t(service.key)}
                  </h3>
                  <p className="text-sm text-[#242423]/55 dark:text-white/45 leading-relaxed">
                    {t(`${service.key}.desc`)}
                  </p>
                  {service.href && (
                    <div className="mt-6 flex items-center gap-2 text-[#F5CB5C] text-xs font-semibold tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span>En savoir plus</span>
                      <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
                    </div>
                  )}
                </>
              );

              const className =
                "group bg-white dark:bg-[#333533] p-8 lg:p-10 transition-all duration-300 hover:shadow-xl hover:shadow-[#242423]/5 dark:hover:shadow-black/20 relative overflow-hidden";

              return service.href ? (
                <motion.div
                  key={service.key}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.55, delay: service.delay }}
                  whileHover={{ y: -4 }}
                >
                  <Link href={service.href} className={`block ${className}`}>
                    {cardContent}
                  </Link>
                </motion.div>
              ) : (
                <motion.div
                  key={service.key}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.55, delay: service.delay }}
                  whileHover={{ y: -4 }}
                  className={className}
                >
                  {cardContent}
                </motion.div>
              );
            })}
          </div>

          {/* Complementary services header */}
          <FadeIn className="mt-16 mb-8 text-center">
            <SectionLabel text={t("complementary.title")} />
            <p className="text-[#242423]/55 dark:text-white/45 text-sm max-w-lg mx-auto">
              {t("complementary.subtitle")}
            </p>
          </FadeIn>

          {/* Complementary services */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#CFDBD5] dark:bg-[#F5CB5C]/10">
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
                >
                  <Link
                    href="/offres-etendues"
                    className="group bg-white dark:bg-[#333533] p-8 lg:p-10 transition-all duration-300 hover:shadow-xl relative overflow-hidden flex items-start gap-6 block"
                  >
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-[#F5CB5C] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    <div className="w-12 h-12 shrink-0 rounded-sm border border-[#F5CB5C]/30 group-hover:border-[#F5CB5C]/70 flex items-center justify-center transition-colors duration-300">
                      <Icon className="w-5 h-5 text-[#F5CB5C]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-xl text-[#242423] dark:text-white mb-2">
                        {t(service.key)}
                      </h3>
                      <p className="text-sm text-[#242423]/55 dark:text-white/45 leading-relaxed">
                        {t(`${service.key}.desc`)}
                      </p>
                      <div className="mt-4 flex items-center gap-2 text-[#F5CB5C] text-xs font-semibold tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span>En savoir plus</span>
                        <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SWISS ADVANTAGE ──────────────────────────────────────────── */}
      <section className="bg-[#242423] overflow-hidden">
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
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-[#242423]/40" />

              {/* Decorative corner accents */}
              <div className="absolute top-8 left-8 w-16 h-16 border-t border-l border-[#F5CB5C]/50" />
              <div className="absolute bottom-8 right-8 w-16 h-16 border-b border-r border-[#F5CB5C]/50" />

              {/* Floating badge */}
              <div className="absolute bottom-10 left-10 bg-[#242423]/90 backdrop-blur-sm border border-[#F5CB5C]/30 px-5 py-4">
                <div className="text-[#F5CB5C] font-display font-bold text-2xl">
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
                  <span className="block w-8 h-px bg-[#F5CB5C]/60" />
                  <span className="text-[#F5CB5C] text-[10px] font-semibold tracking-[0.25em] uppercase">
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
                        style={{ backgroundColor: "rgba(245,203,92,0.15)", border: "1px solid rgba(245,203,92,0.4)" }}
                      >
                        <Check className="w-3 h-3 text-[#F5CB5C]" strokeWidth={2.5} />
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
                    className="inline-flex items-center gap-2 text-[#F5CB5C] text-sm font-semibold tracking-wide group"
                  >
                    {t("expertise.learn.more")}
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
        className="py-24 lg:py-36 bg-[#E8EDDF] dark:bg-[#333533]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <SectionLabel text={t("contact.section.label")} />
            <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-[#242423] dark:text-white mb-5 leading-tight">
              {t("contact.title")}
            </h2>
            <p className="text-[#242423]/55 dark:text-white/45 max-w-lg mx-auto text-base leading-relaxed">
              {t("contact.subtitle")}
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[#CFDBD5] dark:bg-[#F5CB5C]/10">
            {/* Map placeholder */}
            <FadeIn className="bg-white dark:bg-[#333533] p-8 lg:p-10 flex flex-col gap-6">
              {/* Google Maps embed */}
              <div className="relative w-full aspect-[16/7] rounded-sm overflow-hidden">
                <iframe
                  src="https://maps.google.com/maps?q=Chemin+du+Pr%C3%A9-Fleuri+1-3,+1228+Plan-Les-Ouates,+Switzerland&output=embed&z=15"
                  style={{ border: 0, width: "100%", height: "100%", display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Fidsmart Solutions — Plan-Les-Ouates"
                />
              </div>

              {/* Contact details */}
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 shrink-0 rounded-sm border border-[#F5CB5C]/30 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-[#F5CB5C]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-[10px] text-[#242423]/40 dark:text-white/35 uppercase tracking-wider mb-0.5">
                      Adresse
                    </div>
                    <div className="text-sm text-[#242423] dark:text-white/80 font-medium">
                      {t("contact.address")}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 shrink-0 rounded-sm border border-[#F5CB5C]/30 flex items-center justify-center">
                    <Phone className="w-4 h-4 text-[#F5CB5C]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-[10px] text-[#242423]/40 dark:text-white/35 uppercase tracking-wider mb-0.5">
                      Téléphone
                    </div>
                    <a
                      href={`tel:${t("contact.phone")}`}
                      className="text-sm text-[#242423] dark:text-white/80 font-medium hover:text-[#F5CB5C] transition-colors"
                    >
                      {t("contact.phone")}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 shrink-0 rounded-sm border border-[#F5CB5C]/30 flex items-center justify-center">
                    <Clock className="w-4 h-4 text-[#F5CB5C]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-[10px] text-[#242423]/40 dark:text-white/35 uppercase tracking-wider mb-0.5">
                      Horaires
                    </div>
                    <div className="text-sm text-[#242423] dark:text-white/80 font-medium">
                      {t("contact.hours")}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 shrink-0 rounded-sm border border-[#F5CB5C]/30 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-[#F5CB5C]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-[10px] text-[#242423]/40 dark:text-white/35 uppercase tracking-wider mb-0.5">
                      Email
                    </div>
                    <a
                      href={`mailto:${t("contact.email")}`}
                      className="text-sm text-[#242423] dark:text-white/80 font-medium hover:text-[#F5CB5C] transition-colors"
                    >
                      {t("contact.email")}
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Contact form */}
            <FadeIn delay={0.1} className="bg-white dark:bg-[#333533] p-8 lg:p-10">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="space-y-6 h-full flex flex-col justify-between"
              >
                <div className="space-y-5">
                  <div>
                    <label className="block text-[10px] font-semibold tracking-[0.2em] uppercase text-[#242423]/50 dark:text-white/40 mb-2">
                      {t("contact.form.name")}
                    </label>
                    <input
                      type="text"
                      value={formState.name}
                      onChange={(e) =>
                        setFormState((s) => ({ ...s, name: e.target.value }))
                      }
                      placeholder={t("contact.form.placeholder.name")}
                      className="w-full px-4 py-3 bg-transparent border border-[#CFDBD5] dark:border-[#F5CB5C]/15 text-[#242423] dark:text-white text-sm placeholder:text-[#242423]/30 dark:placeholder:text-white/25 outline-none focus:border-[#F5CB5C]/60 transition-colors duration-300 rounded-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-semibold tracking-[0.2em] uppercase text-[#242423]/50 dark:text-white/40 mb-2">
                      {t("contact.form.email")}
                    </label>
                    <input
                      type="email"
                      value={formState.email}
                      onChange={(e) =>
                        setFormState((s) => ({ ...s, email: e.target.value }))
                      }
                      placeholder={t("contact.form.placeholder.email")}
                      className="w-full px-4 py-3 bg-transparent border border-[#CFDBD5] dark:border-[#F5CB5C]/15 text-[#242423] dark:text-white text-sm placeholder:text-[#242423]/30 dark:placeholder:text-white/25 outline-none focus:border-[#F5CB5C]/60 transition-colors duration-300 rounded-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-semibold tracking-[0.2em] uppercase text-[#242423]/50 dark:text-white/40 mb-2">
                      {t("contact.form.message")}
                    </label>
                    <textarea
                      rows={7}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState((s) => ({ ...s, message: e.target.value }))
                      }
                      placeholder={t("contact.form.placeholder.message")}
                      className="w-full px-4 py-3 bg-transparent border border-[#CFDBD5] dark:border-[#F5CB5C]/15 text-[#242423] dark:text-white text-sm placeholder:text-[#242423]/30 dark:placeholder:text-white/25 outline-none focus:border-[#F5CB5C]/60 transition-colors duration-300 rounded-sm resize-none"
                    />
                  </div>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 text-sm font-semibold tracking-wider uppercase transition-colors duration-300 rounded-sm flex items-center justify-center gap-2 group"
                  style={{ backgroundColor: "#F5CB5C", color: "#242423" }}
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

          {/* Booking CTA */}
          <FadeIn delay={0.15} className="mt-px">
            <div className="bg-white dark:bg-[#2a2a28] border border-[#F5CB5C]/20 px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div
                  className="w-10 h-10 shrink-0 rounded-sm flex items-center justify-center"
                  style={{ backgroundColor: "rgba(245,203,92,0.12)", border: "1px solid rgba(245,203,92,0.35)" }}
                >
                  <CalendarDays className="w-4 h-4 text-[#F5CB5C]" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#242423] dark:text-white">
                    {t("contact.booking.title")}
                  </p>
                  <p className="text-xs text-[#242423]/50 dark:text-white/45 mt-0.5">
                    {t("contact.booking.subtitle")}
                  </p>
                </div>
              </div>
              <Link
                href="/rendez-vous"
                className="shrink-0 inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold tracking-wide rounded-sm transition-all duration-300 group"
                style={{ backgroundColor: "#F5CB5C", color: "#242423" }}
              >
                {t("contact.booking.cta")}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
