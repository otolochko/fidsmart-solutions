"use client";

import { FolderOpen } from "lucide-react";
import { ServicePage } from "@/components/ui/service-page";
import { useLanguage } from "@/lib/language-context";

const content = {
  fr: {
    title: "Administratif",
    subtitle: "Besoin d'aide pour votre gestion administrative ? Fidsmart Solutions est là pour vous aider !",
    intro: [
      "La vie d'une entreprise est fondée autour de la gestion de cette dernière. Notre fiduciaire est là pour vous accompagner tout au long de ce processus.",
      "Il est essentiel de réaliser diverses déclarations auprès d'organismes compétents et dédiés. Nous vous accompagnons dans diverses démarches, peu importe l'ancienneté de votre activité.",
    ],
    features: [
      { text: "Création d'entreprise" },
      { text: "Gestion des ressources humaines", description: "Salaires, cotisations sociales, conventions collectives" },
      { text: "Gestion de la facturation" },
      { text: "Domiciliation d'entreprise" },
      { text: "Déclarations sociales", description: "AVS, AI, APG, AC, 2ème pilier, prévoyance professionnelle, SUVA" },
    ],
  },
  en: {
    title: "Administrative",
    subtitle: "Need help with your administrative management? Fidsmart Solutions is here for you!",
    intro: [
      "A company's daily life revolves around its management. Our fiduciary firm is here to support you throughout this process.",
      "It is essential to file various declarations with the relevant authorities. We guide you through every step, regardless of how long your business has been operating.",
    ],
    features: [
      { text: "Business formation" },
      { text: "Human resources management", description: "Payroll, social contributions, collective agreements" },
      { text: "Invoicing management" },
      { text: "Business domiciliation" },
      { text: "Social declarations", description: "AHV, IV, EO, ALV, 2nd pillar, occupational pension, SUVA" },
    ],
  },
};

export default function AdministratifPage() {
  const { language } = useLanguage();
  const c = content[language];

  return (
    <ServicePage
      iconSlot={<FolderOpen className="w-6 h-6 text-[#D4AF37]" strokeWidth={1.5} />}
      title={c.title}
      subtitle={c.subtitle}
      intro={c.intro}
      features={c.features}
    />
  );
}
