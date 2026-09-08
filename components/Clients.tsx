import { clients } from "@/lib/content";

export default function Clients() {
  const row = [...clients, ...clients];

  return (
    <section className="border-y border-line bg-white py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="mb-6 text-center text-sm font-semibold uppercase tracking-[0.22em] text-muted">
          Diese Kunden vertrauen uns
        </p>
        <div className="overflow-hidden">
          <div className="logo-marquee flex w-max gap-14">
            {row.map((name, index) => (
              <span
                key={`${name}-${index}`}
                className="whitespace-nowrap text-xl font-semibold tracking-tight text-brand/40"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
