"use client";

import { useEffect, useState } from "react";
import Button, { EnvelopeIcon } from "./Button";
import { heroVariants } from "@/lib/content";

const HERO_VARIANT_KEY = "hero-variant-index";

type HeroProps = {
  city: string;
};

export default function Hero({ city }: HeroProps) {
  const variants = heroVariants(city);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const stored = Number(window.localStorage.getItem(HERO_VARIANT_KEY) ?? "0");
    const current = Number.isFinite(stored) ? ((stored % variants.length) + variants.length) % variants.length : 0;
    setIndex(current);
    window.localStorage.setItem(HERO_VARIANT_KEY, String((current + 1) % variants.length));
  }, [variants.length]);

  const variant = variants[index];

  return (
    <section id="arbeitsschutz" className="scroll-mt-28 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="max-w-3xl">
          <h1 className="font-serif text-4xl font-bold leading-[1.2] tracking-tight text-brand sm:text-5xl lg:text-[3.35rem]">
            {variant.title}
            <span className="mt-2 block">– {variant.subtitle}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-brand">{variant.intro}</p>

          <ul className="mt-8 space-y-3">
            {variant.bullets.map((item) => (
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
