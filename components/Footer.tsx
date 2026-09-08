import Link from "next/link";
import Logo from "./Logo";
import ContactForm from "./ContactForm";
import { footerServices } from "@/lib/content";

export default function Footer() {
  return (
    <footer id="kontakt" className="scroll-mt-28 bg-brand-deep text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Logo variant="light" />
          <h2 className="mt-8 font-serif text-2xl font-bold leading-snug">
            Lernen Sie uns kennen und profitieren Sie von Professionalität in
            den Bereichen:
          </h2>
          <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 text-white/80">
            {footerServices.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-10 rounded-xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm uppercase tracking-[0.16em] text-accent">
              Ansprechpartnerin
            </p>
            <p className="mt-2 text-lg font-semibold">Ana Palumbo</p>
            <a
              href="tel:+4940808058303"
              className="mt-1 inline-block text-white/80 hover:text-accent"
            >
              040 80 80 58 303
            </a>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Schnellanfrage
          </p>
          <h3 className="mt-2 font-serif text-2xl font-bold">Schreiben Sie uns</h3>
          <p className="mt-2 mb-6 text-sm text-white/70">
            Pflichtfelder sind mit * gekennzeichnet.
          </p>
          <ContactForm />
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-5 text-sm text-white/60 sm:flex-row sm:px-6">
          <p>© {new Date().getFullYear()} CT-Arbeitsschutz</p>
          <nav className="flex gap-5">
            <Link href="/impressum" className="hover:text-accent">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-accent">
              Datenschutz
            </Link>
            <Link href="/agb" className="hover:text-accent">
              AGB
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
