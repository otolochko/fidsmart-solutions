import type { Metadata } from "next";
import { FileText } from "lucide-react";
import { ServicePage } from "@/components/ui/service-page";


export const metadata: Metadata = {
  title: "Fiscalité — Fidsmart Solutions",
  description: "Facilitez vos déclarations fiscales avec notre fiduciaire Fidsmart Solutions.",
};

export default function FiscalitePage() {
  return (
    <ServicePage
      iconSlot={<FileText className="w-6 h-6 text-[#D4AF37]" strokeWidth={1.5} />}
      title="Fiscalité"
      subtitle="Facilitez vos déclarations fiscales avec notre fiduciaire Fidsmart Solutions"
      intro={[
        "Il en va de la responsabilité d'une entreprise de réaliser des déclarations fiscales à la fin de son exercice. Il est indispensable pour une entreprise de répondre à cette obligation légale.",
        "Notre équipe fiduciaire compétente vous libère de cette tâche qui peut s'avérer complexe, en vous garantissant des déclarations conformes et optimisées.",
      ]}
      features={[
        { text: "Décomptes TVA" },
        { text: "Impôt sur le bénéfice et le capital" },
        { text: "Impôt anticipé" },
        { text: "Impôt pour les personnes physiques" },
      ]}
    />
  );
}
