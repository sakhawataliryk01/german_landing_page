import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import Process from "@/components/Process";
import PromiseSection from "@/components/PromiseSection";
import Trust from "@/components/Trust";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CtaBanner from "@/components/CtaBanner";

export default function LandingPage({ city }: { city: string }) {
  return (
    <>
      <Hero city={city} />
      <Clients />
      <Process city={city} />
      <PromiseSection city={city} />
      <Trust city={city} />
      <Testimonials />
      <FAQ city={city} />
      <CtaBanner city={city} />
    </>
  );
}
