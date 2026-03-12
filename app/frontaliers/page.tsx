"use client";

import { ArrowLeftRight } from "lucide-react";
import { ServicePage } from "@/components/ui/service-page";
import { useLanguage } from "@/lib/language-context";

const content = {
  fr: {
    title: "Frontaliers",
    subtitle: "Facilitez votre déclaration d'impôt avec Fidsmart Solutions !",
    intro: [
      "Le statut de quasi-résident permet aux travailleurs frontaliers soumis à l'imposition à la source en Suisse de demander une Taxation Ordinaire Ultérieure (TOU) afin de bénéficier des mêmes déductions fiscales que les résidents suisses, à condition de remplir les conditions requises.",
      "Fidsmart Solutions propose des forfaits personnalisés adaptés à la situation de chaque foyer pour les éventuelles demandes de rectification fiscale.",
    ],
    features: [
      { text: "Analyse de votre situation fiscale", description: "Évaluation de l'éligibilité au statut de quasi-résident" },
      { text: "Demande de Taxation Ordinaire Ultérieure (TOU)", description: "Constitution et dépôt du dossier complet" },
      { text: "Récupération des déductions fiscales", description: "Frais professionnels, intérêts hypothécaires, primes d'assurance, etc." },
      { text: "Forfaits personnalisés selon votre foyer" },
      { text: "Suivi et accompagnement jusqu'à la décision" },
    ],
    note: "Les conditions d'éligibilité varient selon le canton de travail. Notre équipe évalue votre situation lors d'un premier entretien.",
  },
  en: {
    title: "Cross-border Workers",
    subtitle: "Simplify your tax declaration with Fidsmart Solutions!",
    intro: [
      "The quasi-resident status allows cross-border workers subject to withholding tax in Switzerland to apply for a Subsequent Ordinary Taxation (SOT) in order to benefit from the same tax deductions as Swiss residents, provided they meet the required conditions.",
      "Fidsmart Solutions offers personalised packages tailored to each household's situation for any tax rectification requests.",
    ],
    features: [
      { text: "Analysis of your tax situation", description: "Assessment of eligibility for quasi-resident status" },
      { text: "Subsequent Ordinary Taxation (SOT) application", description: "Preparation and submission of the complete file" },
      { text: "Recovery of tax deductions", description: "Professional expenses, mortgage interest, insurance premiums, etc." },
      { text: "Personalised packages based on your household" },
      { text: "Follow-up and support until the decision" },
    ],
    note: "Eligibility conditions vary depending on the canton of employment. Our team assesses your situation during an initial consultation.",
  },
};

export default function FrontaliersPage() {
  const { language } = useLanguage();
  const c = content[language];

  return (
    <ServicePage
      iconSlot={<ArrowLeftRight className="w-6 h-6 text-[#D4AF37]" strokeWidth={1.5} />}
      title={c.title}
      subtitle={c.subtitle}
      intro={c.intro}
      features={c.features}
      note={c.note}
    />
  );
}
