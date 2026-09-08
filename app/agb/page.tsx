import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "AGB | CT-Arbeitsschutz",
};

export default function AgbPage() {
  return (
    <LegalLayout title="Allgemeine Geschäftsbedingungen">
      <p>
        Die vorliegenden AGB sind Platzhalter für die Demo-Landingpage und
        begründen kein Vertragsverhältnis.
      </p>
      <p>
        Leistungen im Arbeitsschutz, Umfang der Betreuung und Vergütung würden
        in einem realen Mandat individuell vereinbart.
      </p>
    </LegalLayout>
  );
}
