"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import Image from "next/image";
import { ArrowRight, MapPin, Clock, Users, Shield } from "lucide-react";

export default function AboutPage() {
  const { t } = useLanguage();

  const details = [
    {
      key: "about.location",
      icon: MapPin,
      delay: 0,
    },
    {
      key: "about.hours",
      icon: Clock,
      delay: 0.1,
    },
    {
      key: "about.meetings",
      icon: Users,
      delay: 0.2,
    },
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/about-hero.png"
          alt="About Fidsmart Solutions"
          fill
          className="object-cover brightness-[0.4]"
          priority
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-display font-bold mb-6 flex flex-col items-center gap-2 leading-tight"
          >
            <span>{t("about.hero.title")}</span>
            <span className="text-accent underline decoration-2 underline-offset-8">Fidsmart Solutions</span>
          </motion.h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 lg:py-32 bg-background relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full mb-8">
              <Shield className="w-6 h-6 text-accent" />
            </div>
            <p className="text-xl sm:text-2xl font-medium text-foreground leading-relaxed mb-8">
              {t("about.hero.subtitle")}
            </p>
            <p className="text-lg text-muted leading-relaxed">
              {t("about.description")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Info Grid Section */}
      <section className="py-20 bg-card/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {details.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.key}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: item.delay }}
                  className="bg-card p-8 rounded-3xl border border-border text-center hover:border-accent/40 transition-all group"
                >
                  <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-display font-bold mb-3">
                    {t(`${item.key}.title`)}
                  </h3>
                  <p className="text-muted leading-relaxed">
                    {t(`${item.key}.detail`)}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/20 rounded-3xl p-10 lg:p-20 flex flex-col items-center text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
              Prêt à propulser votre entreprise?
            </h2>
            <p className="text-lg text-muted max-w-2xl mb-10">
              Découvrez comment notre expertise peut faire la différence pour votre gestion fiduciaire et administrative.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-accent text-accent-foreground font-bold rounded-full hover:brightness-110 transition-all group scale-110 shadow-xl shadow-accent/20"
            >
              {t("nav.contact")}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
