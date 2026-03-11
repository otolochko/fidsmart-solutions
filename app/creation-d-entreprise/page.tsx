import type { Metadata } from "next";
import { Building2 } from "lucide-react";
import { ServicePage } from "@/components/ui/service-page";

export const metadata: Metadata = {
  title: "Création d'entreprise — Fidsmart Solutions",
  description: "Aide pour la création de votre entreprise et la réalisation de vos projets en Suisse.",
};

export default function CreationEntreprisePage() {
  return (
    <ServicePage
      iconSlot={<Building2 className="w-6 h-6 text-[#D4AF37]" strokeWidth={1.5} />}
      title="Création d'entreprise"
      subtitle="La création donne une chance, une opportunité — des horizons pleins de challenges et de succès"
      intro={[
        "La création donne une chance, une opportunité ; s'ouvre à des horizons pleins de challenges et de succès.",
        "Fidsmart Solutions est prêt à vous accompagner, que vous soyez un nouvel entrepreneur ou un porteur de projet souhaitant lancer une structure modeste, moyenne ou ambitieuse. Nous trouvons des solutions adaptées à chaque situation.",
      ]}
      features={[
        {
          text: "Création de Sàrl (Société à responsabilité limitée)",
          description: "Structure idéale pour les PME — capital minimum de CHF 20'000",
        },
        {
          text: "Création de SA (Société anonyme)",
          description: "Pour les projets de plus grande envergure — capital minimum de CHF 100'000",
        },
        {
          text: "Création d'une raison individuelle",
          description: "Démarrage rapide pour indépendants et auto-entrepreneurs",
        },
        {
          text: "Inscription au Registre du Commerce (RC)",
        },
        {
          text: "Rédaction des statuts et documents constitutifs",
        },
        {
          text: "Accompagnement jusqu'à la mise en exploitation",
        },
      ]}
    />
  );
}
