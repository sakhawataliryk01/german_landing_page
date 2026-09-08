import Image from "next/image";
import Button from "./Button";
import { promisePoints } from "@/lib/content";

export default function PromiseSection({ city }: { city: string }) {
  return (
    <section
      id="versprechen"
      className="relative scroll-mt-28 overflow-hidden bg-brand-dark text-white"
    >
      <div className="absolute inset-y-0 right-0 hidden w-1/2 lg:block">
        <Image
          src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1400&q=80"
          alt="Gründer im Gespräch"
          fill
          className="object-cover object-top opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-brand-dark" />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-24">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Unser Versprechen
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight sm:text-4xl">
            Wir wissen, was wir tun – und stehen Ihnen zur Seite.
          </h2>
          <p className="mt-5 max-w-xl text-[16px] leading-8 text-white/80">
            Unser Team berät Unternehmen in {city} und deutschlandweit. Im
            Mittelpunkt stehen die Pflichten des Arbeitgebers und die
            langfristige Förderung von Gesundheit und Sicherheit. Vorschriften
            setzen wir klar, kostengünstig und zuverlässig um.
          </p>

          <ul className="mt-8 space-y-3">
            {promisePoints(city).map((item) => (
              <li key={item} className="flex items-center gap-3 text-white/90">
                <span className="h-2.5 w-2.5 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>

          <Button href="#kontakt" className="mt-10">
            Individuelles Angebot anfordern
          </Button>
        </div>

        <blockquote className="relative self-end rounded-2xl border border-white/15 bg-white/10 p-7 backdrop-blur-sm lg:max-w-md lg:justify-self-end">
          <p className="text-lg leading-8 text-white/95">
            „Wir denken bei Arbeitsschutz nicht nur an rechtliche Pflichten,
            sondern an die nachhaltige Förderung der Gesundheit Ihrer
            Mitarbeitenden – dafür geben wir täglich unser Bestes.“
          </p>
          <footer className="mt-6">
            <p className="font-semibold">Mattanja Kaiser</p>
            <p className="text-sm text-accent">Gründer</p>
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
