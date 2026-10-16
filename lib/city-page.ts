import type { Metadata } from "next";
import { cityFromSlug, headlineForCity, knownCitySlugs } from "@/lib/cities";

const CITY_SLUG_PATTERN = /^(arbeitssicherheit-in-|arbeitsschutz-in-|fosi-in-)(.+)$/;

export function parseCityRoute(slug: string) {
  const normalized = decodeURIComponent(slug).trim().toLowerCase();
  const match = normalized.match(CITY_SLUG_PATTERN);
  if (!match) return null;

  const citySlug = match[2];
  return {
    slug: citySlug,
    city: cityFromSlug(citySlug),
  };
}

export function resolveCity(slug: string) {
  const normalized = decodeURIComponent(slug).trim().toLowerCase();
  return {
    slug: normalized,
    city: cityFromSlug(normalized),
  };
}

export function cityMetadata(slug: string): Metadata {
  const { city } = resolveCity(slug);
  const title = headlineForCity(city, slug);

  return {
    title: `${title} | CT-Arbeitsschutz`,
    description: `Fachkraft für Arbeitssicherheit in ${city}. Betreuung nach ASiG, Gefährdungsbeurteilung und Unfallverhütung – vor Ort und deutschlandweit.`,
  };
}

export function cityStaticParams() {
  return knownCitySlugs().flatMap((city) => [
    { slug: `arbeitssicherheit-in-${city}` },
    { slug: `arbeitsschutz-in-${city}` },
    { slug: `fosi-in-${city}` },
  ]);
}
