"use client";

import { Calculator } from "lucide-react";
import { ServicePage } from "@/components/ui/service-page";
import { useLanguage } from "@/lib/language-context";

const content = {
  fr: {
    title: "Comptabilité",
    subtitle: "La comptabilité chez Fidsmart Solutions",
    intro: [
      "Chez Fidsmart Solutions nous savons que la comptabilité représente une part importante de la gestion de votre entreprise. C'est pour cela que notre cabinet fiduciaire vous propose ses services pour vous faciliter la gestion comptable de votre organisation.",
      "En Suisse, la comptabilité est régie par le Code des obligations et adaptée aux besoins des entreprises selon leur taille et leur forme juridique. Elle repose sur des principes de transparence, de régularité et de prudence.",
    ],
    features: [
      { text: "Tenue de la comptabilité générale", description: "Saisie comptable, décompte TVA" },
      { text: "Gestion des salaires et des assurances sociales" },
      { text: "Clôture des comptes annuels", description: "Vérification des comptes et bouclement" },
      { text: "Conseils d'optimisation fiscale et financière" },
      { text: "Audit" },
    ],
  },
  en: {
    title: "Accounting",
    subtitle: "Accounting services at Fidsmart Solutions",
    intro: [
      "At Fidsmart Solutions, we understand that accounting is a critical part of running your business. That's why our fiduciary firm offers its services to simplify the financial management of your organisation.",
      "In Switzerland, accounting is governed by the Code of Obligations and tailored to the needs of businesses based on their size and legal structure. It rests on principles of transparency, regularity, and prudence.",
    ],
    features: [
      { text: "General bookkeeping", description: "Accounting entries, VAT returns" },
      { text: "Payroll and social insurance management" },
      { text: "Annual accounts closing", description: "Account verification and year-end close" },
      { text: "Tax and financial optimisation advice" },
      { text: "Audit" },
    ],
  },
};

export default function ComptabilitePage() {
  const { language } = useLanguage();
  const c = content[language];

  return (
    <ServicePage
      iconSlot={<Calculator className="w-6 h-6 text-[#D4AF37]" strokeWidth={1.5} />}
      title={c.title}
      subtitle={c.subtitle}
      intro={c.intro}
      features={c.features}
    />
  );
}
