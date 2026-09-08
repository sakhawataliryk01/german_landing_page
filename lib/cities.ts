import { GERMAN_CITIES, GERMAN_CITY_SLUGS } from "@/lib/german-cities";

export const DEFAULT_CITY_SLUG = "hamburg";

export const CITY_HEADLINES: Record<string, string> = {
  hamburg:
    "Arbeitsschutz in Hamburg – Sicherheit für Arbeitgeber und Arbeitnehmer",
  berlin:
    "Professioneller Arbeitsschutz in Berlin – jetzt informieren und absichern",
};

function normalizeSlug(slug: string) {
  return decodeURIComponent(slug).trim().toLowerCase();
}

function foldSlug(slug: string) {
  return slug
    .replaceAll("ä", "ae")
    .replaceAll("ö", "oe")
    .replaceAll("ü", "ue")
    .replaceAll("ß", "ss");
}

function titleCaseSlug(slug: string) {
  return slug
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export function cityFromSlug(slug: string) {
  const key = normalizeSlug(slug);
  if (GERMAN_CITIES[key]) return GERMAN_CITIES[key];

  const folded = foldSlug(key);
  if (GERMAN_CITIES[folded]) return GERMAN_CITIES[folded];

  return titleCaseSlug(key);
}

export function headlineForCity(city: string, slug: string) {
  return (
    CITY_HEADLINES[normalizeSlug(slug)] ??
    `Arbeitsschutz in ${city} – Sicherheit für Arbeitgeber und Arbeitnehmer`
  );
}

export function knownCitySlugs() {
  return [...GERMAN_CITY_SLUGS];
}
