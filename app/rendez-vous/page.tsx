"use client";

import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const CALENDAR_EMBED_URL =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1vNJeSlyNtLCUPFCNtHGsj3DDl8_TcuYGXiT1UhZRZ4KogfuK_IzRdxRV3lQtBHDMNIzXdztlr?embed=true";

export default function RendezVousPage() {
  const { language } = useLanguage();

  return (
    <div className="relative">
      {/* ── HERO ── */}
      <section className="relative py-28 lg:py-36 bg-[#242423] flex items-center justify-center overflow-hidden">
        {/* Subtle grid texture */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.04]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#F5CB5C" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

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
              <CalendarDays className="w-6 h-6 text-[#F5CB5C]" strokeWidth={1.5} />
            </div>

            <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-white leading-tight mb-5">
              {language === "fr" ? "Prendre rendez-vous" : "Book an Appointment"}
            </h1>

            <div className="flex items-center justify-center gap-3">
              <span className="block w-8 h-px bg-[#F5CB5C]/50" />
              <p className="text-white/60 text-sm sm:text-base max-w-md leading-relaxed">
                {language === "fr"
                  ? "Choisissez un créneau qui vous convient — en physique ou en visioconférence."
                  : "Choose a time slot that works for you — in person or via video call."}
              </p>
              <span className="block w-8 h-px bg-[#F5CB5C]/50" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CALENDAR EMBED ── */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
            className="rounded-sm overflow-hidden border border-[#F5CB5C]/20"
          >
            <iframe
              src={CALENDAR_EMBED_URL}
              style={{ border: 0, width: "100%", height: 700, display: "block" }}
              title={
                language === "fr"
                  ? "Prendre rendez-vous — Fidsmart Solutions"
                  : "Book an Appointment — Fidsmart Solutions"
              }
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
