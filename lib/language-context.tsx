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
    "nav.clientportal": "Portail Client",

    // Hero
    "hero.title": "Fidsmart Solutions",
    "hero.subtitle": "Précision - Progrès - Partenariat",
    "hero.badge": "PLAN-LES-OUATES · GENÈVE · FONDÉ EN 2022",
    "hero.headline1": "Précision",
    "hero.headline2": "Financière",
    "hero.subtitle2": "Votre partenaire fiduciaire en Suisse — comptabilité, fiscalité, création d'entreprise et gestion administrative.",
    "hero.cta.services": "Nos Services",
    "hero.cta.contact": "Contacter un Expert",

    // Stats
    "stats.since.label": "Fondé en",
    "stats.since.value": "2022",
    "stats.clients.label": "Clients accompagnés",
    "stats.clients.value": "100+",
    "stats.services.label": "Services spécialisés",
    "stats.services.value": "8",
    "stats.languages.label": "Langues maîtrisées",
    "stats.languages.value": "2",

    // Services
    "services.title": "Nos services",
    "services.section.label": "NOS SERVICES",
    "services.section.subtitle": "Une expertise complète pour accompagner chaque étape de votre activité en Suisse.",
    "services.fiscalite": "Fiscalité",
    "services.fiscalite.desc": "Optimisation fiscale, déclarations d'impôts et conseil TVA pour entreprises et particuliers.",
    "services.comptabilite": "Comptabilité",
    "services.comptabilite.desc": "Tenue de comptabilité, bouclement annuel et états financiers conformes au Code des obligations.",
    "services.creation": "Création d'entreprise",
    "services.creation.desc": "Création de SA, Sàrl et raison individuelle — de l'inscription au RC jusqu'à l'opérationnel.",
    "services.domiciliation": "Domiciliation",
    "services.domiciliation.desc": "Adresse commerciale genevoise avec services administratifs et courrier intégrés.",
    "services.gestion": "Gestion",
    "services.gestion.desc": "Conseil en gestion d'entreprise, reporting financier et pilotage stratégique de votre activité.",
    "services.rh": "Ressources Humaines",
    "services.rh.desc": "Gestion de la paie, contrats de travail, permis et conseil RH complet.",

    // Complementary Services
    "complementary.title": "Nos services complémentaires",
    "complementary.traduction": "Traduction",
    "complementary.traduction.desc": "Traduction professionnelle de documents juridiques, financiers et commerciaux.",
    "complementary.marketing": "Digital Marketing",
    "complementary.marketing.desc": "Stratégie digitale, création de contenu et visibilité en ligne sur mesure.",

    // Expertise / Swiss Advantage
    "expertise.section.label": "L'AVANTAGE SUISSE",
    "expertise.title": "Pourquoi choisir Fidsmart?",
    "expertise.subtitle": "Une expertise locale, une vision internationale. Nous combinons la rigueur suisse avec l'agilité d'une équipe entièrement dédiée à votre succès.",
    "expertise.adv1": "Expertise confirmée en droit suisse des affaires",
    "expertise.adv2": "Services bilingues français et anglais",
    "expertise.adv3": "Accès sécurisé au portail client 24h/7j",
    "expertise.adv4": "Disponibilité du lundi au vendredi, 9h–17h",
    "expertise.adv5": "Discrétion et confidentialité absolues",
    "expertise.adv6": "Honoraires transparents, sans frais cachés",

    // Contact
    "contact.section.label": "NOUS CONTACTER",
    "contact.title": "Parlons de votre projet",
    "contact.subtitle": "Prenez rendez-vous ou envoyez-nous un message. Notre équipe vous répond dans les 24 heures ouvrables.",
    "contact.address": "Plan-Les-Ouates, Genève, Suisse",
    "contact.hours": "Lun–Ven : 09h00 – 17h00",
    "contact.form.name": "Votre nom",
    "contact.form.email": "Adresse e-mail",
    "contact.form.message": "Votre message",
    "contact.form.submit": "Envoyer le message",
    "contact.form.placeholder.name": "Jean Dupont",
    "contact.form.placeholder.email": "jean@entreprise.ch",
    "contact.form.placeholder.message": "Décrivez votre besoin...",

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
    "nav.clientportal": "Client Portal",

    // Hero
    "hero.title": "Fidsmart Solutions",
    "hero.subtitle": "Precision - Progress - Partnership",
    "hero.badge": "PLAN-LES-OUATES · GENEVA · FOUNDED IN 2022",
    "hero.headline1": "Financial",
    "hero.headline2": "Precision",
    "hero.subtitle2": "Your trusted fiduciary partner in Switzerland — accounting, taxation, business formation and administrative management.",
    "hero.cta.services": "Our Services",
    "hero.cta.contact": "Contact an Expert",

    // Stats
    "stats.since.label": "Founded in",
    "stats.since.value": "2022",
    "stats.clients.label": "Clients served",
    "stats.clients.value": "100+",
    "stats.services.label": "Specialised services",
    "stats.services.value": "8",
    "stats.languages.label": "Languages spoken",
    "stats.languages.value": "2",

    // Services
    "services.title": "Our Services",
    "services.section.label": "OUR SERVICES",
    "services.section.subtitle": "Complete expertise to support every stage of your business in Switzerland.",
    "services.fiscalite": "Taxation",
    "services.fiscalite.desc": "Tax optimisation, income tax returns, and VAT advisory for businesses and individuals.",
    "services.comptabilite": "Accounting",
    "services.comptabilite.desc": "Bookkeeping, annual closing, and financial statements compliant with Swiss Code of Obligations.",
    "services.creation": "Business Formation",
    "services.creation.desc": "SA, Sàrl, and sole trader creation — from Commercial Registry to fully operational.",
    "services.domiciliation": "Domiciliation",
    "services.domiciliation.desc": "Geneva business address with integrated administrative and mail services.",
    "services.gestion": "Management",
    "services.gestion.desc": "Business management consulting, financial reporting, and strategic steering of your activity.",
    "services.rh": "Human Resources",
    "services.rh.desc": "Payroll management, employment contracts, work permits, and full HR advisory.",

    // Complementary Services
    "complementary.title": "Additional Services",
    "complementary.traduction": "Translation",
    "complementary.traduction.desc": "Professional translation of legal, financial, and commercial documents.",
    "complementary.marketing": "Digital Marketing",
    "complementary.marketing.desc": "Digital strategy, content creation, and tailored online visibility.",

    // Expertise / Swiss Advantage
    "expertise.section.label": "THE SWISS ADVANTAGE",
    "expertise.title": "Why choose Fidsmart?",
    "expertise.subtitle": "Local expertise, international vision. We combine Swiss precision with the agility of a team entirely dedicated to your success.",
    "expertise.adv1": "Proven expertise in Swiss business law",
    "expertise.adv2": "Bilingual services in French and English",
    "expertise.adv3": "Secure 24/7 client portal access",
    "expertise.adv4": "Available Monday to Friday, 9 AM–5 PM",
    "expertise.adv5": "Absolute discretion and confidentiality",
    "expertise.adv6": "Transparent fees, no hidden charges",

    // Contact
    "contact.section.label": "CONTACT US",
    "contact.title": "Let's talk about your project",
    "contact.subtitle": "Schedule a meeting or send us a message. Our team responds within 24 business hours.",
    "contact.address": "Plan-Les-Ouates, Geneva, Switzerland",
    "contact.hours": "Mon–Fri: 09:00 AM – 5:00 PM",
    "contact.form.name": "Your name",
    "contact.form.email": "Email address",
    "contact.form.message": "Your message",
    "contact.form.submit": "Send message",
    "contact.form.placeholder.name": "John Smith",
    "contact.form.placeholder.email": "john@company.com",
    "contact.form.placeholder.message": "Describe your needs...",

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
