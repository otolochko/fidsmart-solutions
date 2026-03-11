import type { Metadata } from "next";
import { ArrowLeftRight } from "lucide-react";
import { ServicePage } from "@/components/ui/service-page";

export const metadata: Metadata = {
  title: "Frontaliers — Fidsmart Solutions",
  description: "Facilitez votre déclaration d'impôt en tant que travailleur frontalier avec Fidsmart Solutions.",
};

export default function FrontaliersPage() {
  return (
    <ServicePage
      iconSlot={<ArrowLeftRight className="w-6 h-6 text-[#D4AF37]" strokeWidth={1.5} />}
      title="Frontaliers"
      subtitle="Facilitez votre déclaration d'impôt avec Fidsmart Solutions !"
      intro={[
        "Le statut de quasi-résident permet aux travailleurs frontaliers soumis à l'imposition à la source en Suisse de demander une Taxation Ordinaire Ultérieure (TOU) afin de bénéficier des mêmes déductions fiscales que les résidents suisses, à condition de remplir les conditions requises.",
        "Fidsmart Solutions propose des forfaits personnalisés adaptés à la situation de chaque foyer pour les éventuelles demandes de rectification fiscale.",
      ]}
      features={[
        {
          text: "Analyse de votre situation fiscale",
          description: "Évaluation de l'éligibilité au statut de quasi-résident",
        },
        {
          text: "Demande de Taxation Ordinaire Ultérieure (TOU)",
          description: "Constitution et dépôt du dossier complet",
        },
        {
          text: "Récupération des déductions fiscales",
          description: "Frais professionnels, intérêts hypothécaires, primes d'assurance, etc.",
        },
        {
          text: "Forfaits personnalisés selon votre foyer",
        },
        {
          text: "Suivi et accompagnement jusqu'à la décision",
        },
      ]}
      note="Les conditions d'éligibilité varient selon le canton de travail. Notre équipe évalue votre situation lors d'un premier entretien."
    />
  );
}
