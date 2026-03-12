"use client";

import { FileText } from "lucide-react";
import { ServicePage } from "@/components/ui/service-page";
import { useLanguage } from "@/lib/language-context";

const content = {
  fr: {
    title: "Fiscalité",
    subtitle: "Facilitez vos déclarations fiscales avec notre fiduciaire Fidsmart Solutions",
    intro: [
      "Il en va de la responsabilité d'une entreprise de réaliser des déclarations fiscales à la fin de son exercice. Il est indispensable pour une entreprise de répondre à cette obligation légale.",
      "Notre équipe fiduciaire compétente vous libère de cette tâche qui peut s'avérer complexe, en vous garantissant des déclarations conformes et optimisées.",
    ],
    features: [
      { text: "Décomptes TVA" },
      { text: "Impôt sur le bénéfice et le capital" },
      { text: "Impôt anticipé" },
      { text: "Impôt pour les personnes physiques" },
    ],
  },
  en: {
    title: "Tax Returns",
    subtitle: "Simplify your tax filings with Fidsmart Solutions",
    intro: [
      "It is every company's responsibility to file tax returns at the end of its financial year. Meeting this legal obligation is essential for any business.",
      "Our experienced fiduciary team takes this complex task off your hands, ensuring compliant and optimised declarations.",
    ],
    features: [
      { text: "VAT returns" },
      { text: "Corporate income and capital tax" },
      { text: "Withholding tax" },
      { text: "Personal income tax" },
    ],
  },
};

export default function FiscalitePage() {
  const { language } = useLanguage();
  const c = content[language];

  return (
    <ServicePage
      iconSlot={<FileText className="w-6 h-6 text-[#D4AF37]" strokeWidth={1.5} />}
      title={c.title}
      subtitle={c.subtitle}
      intro={c.intro}
      features={c.features}
    />
  );
}
