import Button, { EnvelopeIcon } from "./Button";
import { headlineForCity } from "@/lib/cities";
import { heroBullets } from "@/lib/content";

type HeroProps = {
  city: string;
  slug: string;
};

export default function Hero({ city, slug }: HeroProps) {
  return (
    <section id="arbeitsschutz" className="scroll-mt-28 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="max-w-3xl">
          <h1 className="font-serif text-4xl font-bold leading-[1.2] tracking-tight text-brand sm:text-5xl lg:text-[3.35rem]">
            {headlineForCity(city, slug)}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-brand">
            Bereits ab dem ersten Angestellten benötigen alle Unternehmen eine
            Fachkraft für Arbeitssicherheit. Mit den Fachkräften von CT
            Arbeitsschutz werden Gefahren abgesichert und alle gesetzlichen
            Vorschriften eingehalten.
          </p>

          <ul className="mt-8 space-y-3">
            {heroBullets(city).map((item) => (
              <li key={item} className="flex items-start gap-3 text-[16px] text-brand">
                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>

          <Button href="#kontakt" className="mt-10">
            <EnvelopeIcon />
            Jetzt Schnellanfrage stellen
          </Button>
        </div>
      </div>
    </section>
  );
}
