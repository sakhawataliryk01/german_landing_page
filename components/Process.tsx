import Button from "./Button";
import { steps } from "@/lib/content";

export default function Process({ city }: { city: string }) {
  return (
    <section className="bg-surface py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-14 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="lg:sticky lg:top-32">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            In 4 Schritten
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-brand sm:text-4xl">
            Arbeitsschutz in {city}: In 4 Schritten zum Erfolg
          </h2>
          <p className="mt-5 max-w-md text-[16px] leading-7 text-muted">
            Das Arbeitssicherheitsgesetz (ASiG) beschreibt, welche Anforderungen
            Ihr Unternehmen erfüllen muss. Unsere Expertinnen und Experten im
            Raum {city} begleiten Sie von der ersten Beurteilung bis zur
            Umsetzung.
          </p>
          <Button href="#kontakt" className="mt-8">
            Jetzt Beratungsgespräch vereinbaren
          </Button>
        </div>

        <ol className="space-y-5">
          {steps.map((step) => (
            <li
              key={step.number}
              className="rounded-2xl border border-line bg-white p-6 shadow-[0_10px_30px_rgba(67,58,54,0.05)] sm:p-7"
            >
              <div className="mb-4 flex items-center gap-4">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent text-lg font-semibold text-white">
                  {step.number}
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                    {step.label}
                  </p>
                  <h3 className="font-serif text-xl font-bold text-brand">{step.title}</h3>
                </div>
              </div>
              <p className="text-[15px] leading-7 text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
