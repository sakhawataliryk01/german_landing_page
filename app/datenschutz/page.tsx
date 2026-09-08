import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Datenschutz | CT-Arbeitsschutz",
};

export default function DatenschutzPage() {
  return (
    <LegalLayout title="Datenschutz">
      <p>
        Diese Seite ist Teil einer Demo-Website. Es werden keine Anfragen an
        einen Server übermittelt; das Kontaktformular bestätigt den Versand nur
        lokal im Browser.
      </p>
      <p>
        Beim Aufruf können technisch notwendige Daten wie IP-Adresse und
        Browserinformationen durch den Hosting-Anbieter verarbeitet werden.
      </p>
      <p>
        Für ein reales Angebot wäre hier eine vollständige Datenschutzerklärung
        nach DSGVO erforderlich.
      </p>
    </LegalLayout>
  );
}
