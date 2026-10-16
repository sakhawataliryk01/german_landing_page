import LandingPage from "@/components/LandingPage";
import { DEFAULT_CITY_SLUG, cityFromSlug } from "@/lib/cities";

export default function Home() {
  return <LandingPage city={cityFromSlug(DEFAULT_CITY_SLUG)} />;
}
