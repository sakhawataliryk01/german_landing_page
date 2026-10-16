import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LandingPage from "@/components/LandingPage";
import { cityMetadata, cityStaticParams, parseCityRoute } from "@/lib/city-page";

export const dynamicParams = true;

export function generateStaticParams() {
  return cityStaticParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const parsed = parseCityRoute(slug);
  if (!parsed) return {};
  return cityMetadata(parsed.slug);
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const parsed = parseCityRoute(slug);
  if (!parsed) notFound();

  return <LandingPage city={parsed.city} />;
}
