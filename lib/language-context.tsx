"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Language = "fr" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  fr: {
    // Navigation
    "nav.home": "Accueil",
    "nav.about": "À propos",
    "nav.services": "Services",
    "nav.contact": "Contact",

    // Hero
    "hero.title": "Fidsmart Solutions",
    "hero.subtitle": "Précision - Progrès - Partenariat",

    // Services
    "services.title": "Nos services",
    "services.fiscalite": "Fiscalité",
    "services.comptabilite": "Comptabilité",
    "services.creation": "Création d'entreprise",
    "services.domiciliation": "Domiciliation",
    "services.gestion": "Gestion",
    "services.rh": "Ressources Humaines",

    // Complementary Services
    "complementary.title": "Nos services complémentaires",
    "complementary.traduction": "Traduction",
    "complementary.marketing": "Digital marketing",

    // Footer
    "footer.rights": "Tous droits réservés",
    "footer.privacy": "Politique de confidentialité",

    // About Page
    "about.hero.title": "À PROPOS DE",
    "about.hero.subtitle": "Créée en 2022, nous sommes un cabinet spécialisé dans la gestion fiduciaire des entreprises de Suisse.",
    "about.description": "Nous vous accompagnons sur divers plans pour faire accroître votre activité et pour vous permettre de gérer au mieux la fiscalité et l'administratif de votre entreprise.",
    "about.location.title": "Situé en Suisse",
    "about.location.detail": "Et plus précisément à Plan-Les-Ouates",
    "about.hours.title": "Nous vous accueillons",
    "about.hours.detail": "De 9h00 à 17h00 du lundi au vendredi",
    "about.meetings.title": "Nous vous rencontrons",
    "about.meetings.detail": "En physique ou en visioconférence",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.contact": "Contact",

    // Hero
    "hero.title": "Fidsmart Solutions",
    "hero.subtitle": "Precision - Progress - Partnership",

    // Services
    "services.title": "Our Services",
    "services.fiscalite": "Taxation",
    "services.comptabilite": "Accounting",
    "services.creation": "Business Creation",
    "services.domiciliation": "Domiciliation",
    "services.gestion": "Management",
    "services.rh": "Human Resources",

    // Complementary Services
    "complementary.title": "Additional Services",
    "complementary.traduction": "Translation",
    "complementary.marketing": "Digital Marketing",

    // Footer
    "footer.rights": "All rights reserved",
    "footer.privacy": "Privacy Policy",

    // About Page
    "about.hero.title": "ABOUT",
    "about.hero.subtitle": "Founded in 2022, we are a firm specialized in fiduciary management for Swiss companies.",
    "about.description": "We support you on various levels to grow your business and enable you to best manage your company's taxes and administration.",
    "about.location.title": "Located in Switzerland",
    "about.location.detail": "More specifically in Plan-Les-Ouates",
    "about.hours.title": "We welcome you",
    "about.hours.detail": "From 9:00 AM to 5:00 PM, Monday to Friday",
    "about.meetings.title": "We meet you",
    "about.meetings.detail": "In person or via videoconference",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("fr");

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
