"use client";

import { useEffect, useState } from "react";
import Button, { EnvelopeIcon } from "./Button";
import {
  HERO_BULLET_PAIRS_PER_HEADING,
  heroBulletPair,
  heroVariants,
} from "@/lib/content";

const HERO_VARIANT_KEY = "hero-variant-index";
const HERO_PAIR_INDEX_KEY = "hero-bullet-pair-indexes";

type HeroProps = {
  city: string;
};

export default function Hero({ city }: HeroProps) {
  const variants = heroVariants(city);
  const [index, setIndex] = useState(0);
  const [pairIndex, setPairIndex] = useState(0);

  useEffect(() => {
    const currentVariant = wrapIndex(
      Number(window.localStorage.getItem(HERO_VARIANT_KEY) ?? "0"),
      variants.length,
    );
    const pairs = readPairIndexes(variants.length);
    const currentPair = pairs[currentVariant];

    setIndex(currentVariant);
    setPairIndex(currentPair);

    pairs[currentVariant] = (currentPair + 1) % HERO_BULLET_PAIRS_PER_HEADING;
    window.localStorage.setItem(HERO_VARIANT_KEY, String((currentVariant + 1) % variants.length));
    window.localStorage.setItem(HERO_PAIR_INDEX_KEY, JSON.stringify(pairs));
  }, [variants.length]);

  const variant = variants[index];
  const bullets = heroBulletPair(city, index, pairIndex);

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
            {bullets.map((item) => (
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

function wrapIndex(value: number, length: number) {
  if (!Number.isFinite(value) || length <= 0) return 0;
  return ((value % length) + length) % length;
}

function readPairIndexes(variantCount: number) {
  try {
    const parsed = JSON.parse(window.localStorage.getItem(HERO_PAIR_INDEX_KEY) ?? "[]");
    if (Array.isArray(parsed) && parsed.length === variantCount) {
      return parsed.map((value) => wrapIndex(Number(value), HERO_BULLET_PAIRS_PER_HEADING));
    }
  } catch {
    // Fall through to defaults.
  }

  return Array.from({ length: variantCount }, () => 0);
}
