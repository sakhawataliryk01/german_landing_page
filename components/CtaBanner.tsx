import Button, { EnvelopeIcon } from "./Button";

export default function CtaBanner({ city }: { city: string }) {
  return (
    <section className="bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-4 py-16 text-center sm:px-6">
        <div className="mb-6 flex flex-col items-center">
          <span className="h-8 w-px bg-line" />
          <span className="swing inline-flex h-12 w-12 items-center justify-center rounded-full border border-line bg-white text-accent shadow-sm">
            <HelmetIcon />
          </span>
        </div>
        <h2 className="font-serif text-3xl font-bold tracking-tight text-brand sm:text-4xl">
          Arbeitsschutz in {city}.
        </h2>
        <Button href="#kontakt" className="mt-8">
          <EnvelopeIcon />
          Jetzt Schnellanfrage stellen
        </Button>
        <a
          href="tel:+4940808058300"
          className="mt-4 text-sm text-muted transition hover:text-accent"
        >
          Kostenlose Beratung unter 040 80 80 58 300
        </a>
      </div>
    </section>
  );
}

function HelmetIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
      <path
        d="M4 14.5c0-4.4 3.6-8 8-8s8 3.6 8 8"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M3.5 14.5h17v3.2a1.8 1.8 0 0 1-1.8 1.8H5.3a1.8 1.8 0 0 1-1.8-1.8v-3.2Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path d="M12 6.5V4.8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}
