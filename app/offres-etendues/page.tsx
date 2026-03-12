"use client";

import { Sparkles } from "lucide-react";
import { ServicePage } from "@/components/ui/service-page";
import { useLanguage } from "@/lib/language-context";

const content = {
  fr: {
    title: "Offres étendues",
    subtitle: "Des compléments pour vous accompagner au mieux dans votre développement !",
    intro: [
      "La fiduciaire Fidsmart Solutions vous propose deux services complémentaires pour renforcer votre développement et votre visibilité.",
    ],
    features: [
      { text: "Traduction — Français" },
      { text: "Traduction — Anglais" },
      { text: "Traduction — Espagnol" },
      { text: "Traduction — Chinois" },
    ],
    secondarySection: {
      title: "Digital Marketing",
      intro: [
        "Boostez votre présence en ligne sur les plateformes et sur internet. Fidsmart Solutions vous accompagne dans votre stratégie digitale.",
      ],
      features: [
        { text: "Création et gestion des réseaux sociaux" },
        { text: "Développement de site internet vitrine" },
      ],
    },
  },
  en: {
    title: "Extended Services",
    subtitle: "Additional services to support your growth and visibility!",
    intro: [
      "Fidsmart Solutions offers two complementary services to strengthen your development and visibility.",
    ],
    features: [
      { text: "Translation — French" },
      { text: "Translation — English" },
      { text: "Translation — Spanish" },
      { text: "Translation — Chinese" },
    ],
    secondarySection: {
      title: "Digital Marketing",
      intro: [
        "Boost your online presence across platforms and the web. Fidsmart Solutions supports your digital strategy.",
      ],
      features: [
        { text: "Social media creation and management" },
        { text: "Showcase website development" },
      ],
    },
  },
};

export default function OffresEtenduesPage() {
  const { language } = useLanguage();
  const c = content[language];

  return (
    <ServicePage
      iconSlot={<Sparkles className="w-6 h-6 text-[#D4AF37]" strokeWidth={1.5} />}
      title={c.title}
      subtitle={c.subtitle}
      intro={c.intro}
      features={c.features}
      secondarySection={c.secondarySection}
    />
  );
}
