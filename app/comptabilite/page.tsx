import type { Metadata } from "next";
import { Calculator } from "lucide-react";
import { ServicePage } from "@/components/ui/service-page";

export const metadata: Metadata = {
  title: "Comptabilité — Fidsmart Solutions",
  description: "La comptabilité chez Fidsmart Solutions — tenue des comptes, clôture annuelle et conseils.",
};

export default function ComptabilitePage() {
  return (
    <ServicePage
      iconSlot={<Calculator className="w-6 h-6 text-[#D4AF37]" strokeWidth={1.5} />}
      title="Comptabilité"
      subtitle="La comptabilité chez Fidsmart Solutions"
      intro={[
        "Chez Fidsmart Solutions nous savons que la comptabilité représente une part importante de la gestion de votre entreprise. C'est pour cela que notre cabinet fiduciaire vous propose ses services pour vous faciliter la gestion comptable de votre organisation.",
        "En Suisse, la comptabilité est régie par le Code des obligations et adaptée aux besoins des entreprises selon leur taille et leur forme juridique. Elle repose sur des principes de transparence, de régularité et de prudence.",
      ]}
      features={[
        {
          text: "Tenue de la comptabilité générale",
          description: "Saisie comptable, décompte TVA",
        },
        {
          text: "Gestion des salaires et des assurances sociales",
        },
        {
          text: "Clôture des comptes annuels",
          description: "Vérification des comptes et bouclement",
        },
        {
          text: "Conseils d'optimisation fiscale et financière",
        },
        {
          text: "Audit",
        },
      ]}
    />
  );
}
