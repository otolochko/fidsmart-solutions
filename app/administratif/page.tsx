import type { Metadata } from "next";
import { FolderOpen } from "lucide-react";
import { ServicePage } from "@/components/ui/service-page";

export const metadata: Metadata = {
  title: "Administratif — Fidsmart Solutions",
  description: "Besoin d'aide pour votre gestion administrative ? Fidsmart Solutions est là pour vous aider.",
};

export default function AdministratifPage() {
  return (
    <ServicePage
      iconSlot={<FolderOpen className="w-6 h-6 text-[#D4AF37]" strokeWidth={1.5} />}
      title="Administratif"
      subtitle="Besoin d'aide pour votre gestion administrative ? Fidsmart Solutions est là pour vous aider !"
      intro={[
        "La vie d'une entreprise est fondée autour de la gestion de cette dernière. Notre fiduciaire est là pour vous accompagner tout au long de ce processus.",
        "Il est essentiel de réaliser diverses déclarations auprès d'organismes compétents et dédiés. Nous vous accompagnons dans diverses démarches, peu importe l'ancienneté de votre activité.",
      ]}
      features={[
        { text: "Création d'entreprise" },
        {
          text: "Gestion des ressources humaines",
          description: "Salaires, cotisations sociales, conventions collectives",
        },
        { text: "Gestion de la facturation" },
        { text: "Domiciliation d'entreprise" },
        {
          text: "Déclarations sociales",
          description: "AVS, AI, APG, AC, 2ème pilier, prévoyance professionnelle, SUVA",
        },
      ]}
    />
  );
}
