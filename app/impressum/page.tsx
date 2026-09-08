import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Impressum | CT-Arbeitsschutz",
};

export default function ImpressumPage() {
  return (
    <LegalLayout title="Impressum">
      <p>
        Dies ist eine Demo-Nachbildung der Landingpage. Angaben dienen nur der
        Illustration und ersetzen kein Impressum eines realen Anbieters.
      </p>
      <p>
        <strong className="text-brand">CT-Arbeitsschutz</strong>
        <br />
        Musterstraße 12
        <br />
        20095 Hamburg
      </p>
      <p>
        Telefon: 040 80 80 58 300
        <br />
        E-Mail: info@ct-arbeitsschutz.de
      </p>
      <p>Vertreten durch: Mattanja Kaiser</p>
    </LegalLayout>
  );
}
