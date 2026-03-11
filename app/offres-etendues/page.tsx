import type { Metadata } from "next";
import { Sparkles } from "lucide-react";
import { ServicePage } from "@/components/ui/service-page";

export const metadata: Metadata = {
  title: "Offres étendues — Fidsmart Solutions",
  description: "Services complémentaires : traduction en 4 langues et digital marketing.",
};

export default function OffresEtenduesPage() {
  return (
    <ServicePage
      iconSlot={<Sparkles className="w-6 h-6 text-[#D4AF37]" strokeWidth={1.5} />}
      title="Offres étendues"
      subtitle="Des compléments pour vous accompagner au mieux dans votre développement !"
      intro={[
        "La fiduciaire Fidsmart Solutions vous propose deux services complémentaires pour renforcer votre développement et votre visibilité.",
      ]}
      features={[
        {
          text: "Traduction — Français",
        },
        {
          text: "Traduction — Anglais",
        },
        {
          text: "Traduction — Espagnol",
        },
        {
          text: "Traduction — Chinois",
        },
      ]}
      secondarySection={{
        title: "Digital Marketing",
        intro: [
          "Boostez votre présence en ligne sur les plateformes et sur internet. Fidsmart Solutions vous accompagne dans votre stratégie digitale.",
        ],
        features: [
          {
            text: "Création et gestion des réseaux sociaux",
          },
          {
            text: "Développement de site internet vitrine",
          },
        ],
      }}
    />
  );
}
