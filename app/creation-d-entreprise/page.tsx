"use client";

import { Building2 } from "lucide-react";
import { ServicePage } from "@/components/ui/service-page";
import { useLanguage } from "@/lib/language-context";

const content = {
  fr: {
    title: "Création d'entreprise",
    subtitle: "La création donne une chance, une opportunité — des horizons pleins de challenges et de succès",
    intro: [
      "La création donne une chance, une opportunité ; s'ouvre à des horizons pleins de challenges et de succès.",
      "Fidsmart Solutions est prêt à vous accompagner, que vous soyez un nouvel entrepreneur ou un porteur de projet souhaitant lancer une structure modeste, moyenne ou ambitieuse. Nous trouvons des solutions adaptées à chaque situation.",
    ],
    features: [
      { text: "Création de Sàrl (Société à responsabilité limitée)", description: "Structure idéale pour les PME — capital minimum de CHF 20'000" },
      { text: "Création de SA (Société anonyme)", description: "Pour les projets de plus grande envergure — capital minimum de CHF 100'000" },
      { text: "Création d'une raison individuelle", description: "Démarrage rapide pour indépendants et auto-entrepreneurs" },
      { text: "Inscription au Registre du Commerce (RC)" },
      { text: "Rédaction des statuts et documents constitutifs" },
      { text: "Accompagnement jusqu'à la mise en exploitation" },
    ],
  },
  en: {
    title: "Business Formation",
    subtitle: "Starting a business opens the door to opportunity — horizons full of challenges and success",
    intro: [
      "Starting a business is an opportunity — it opens doors to horizons full of challenges and success.",
      "Fidsmart Solutions is ready to support you, whether you are a new entrepreneur or someone looking to launch a modest, mid-sized, or ambitious venture. We find solutions tailored to every situation.",
    ],
    features: [
      { text: "Formation of a GmbH (Gesellschaft mit beschränkter Haftung / Sàrl)", description: "Ideal structure for SMEs — minimum capital of CHF 20,000" },
      { text: "Formation of an AG (Aktiengesellschaft / SA)", description: "For larger-scale projects — minimum capital of CHF 100,000" },
      { text: "Registration as a sole trader", description: "Fast setup for self-employed individuals and freelancers" },
      { text: "Registration in the Commercial Register (CR)" },
      { text: "Drafting of articles of association and founding documents" },
      { text: "Support through to the start of operations" },
    ],
  },
};

export default function CreationEntreprisePage() {
  const { language } = useLanguage();
  const c = content[language];

  return (
    <ServicePage
      iconSlot={<Building2 className="w-6 h-6 text-[#D4AF37]" strokeWidth={1.5} />}
      title={c.title}
      subtitle={c.subtitle}
      intro={c.intro}
      features={c.features}
    />
  );
}
