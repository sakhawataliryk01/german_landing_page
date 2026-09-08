import Image from "next/image";
import { trustItems } from "@/lib/content";

export default function Trust({ city }: { city: string }) {
  return (
    <section id="leistungen" className="scroll-mt-28 bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Leistungen
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-brand sm:text-4xl">
            Arbeitsschutz in {city} – darauf können Sie vertrauen
          </h2>
          <ul className="mt-8 space-y-4">
            {trustItems.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[15.5px] leading-7 text-foreground">
                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1400&q=80"
              alt="Team bei der Beurteilung von Arbeitsbedingungen"
              width={900}
              height={720}
              className="h-[460px] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 left-6 right-6 rounded-xl bg-accent p-5 text-white shadow-xl sm:left-auto sm:right-8 sm:w-72">
            <p className="text-sm uppercase tracking-[0.16em] text-white/80">Betreuung</p>
            <p className="mt-1 text-lg font-semibold">Digital und vor Ort – aus einer Hand</p>
          </div>
        </div>
      </div>
    </section>
  );
}
