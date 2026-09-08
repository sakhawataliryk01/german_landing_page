import { testimonials } from "@/lib/content";

export default function Testimonials() {
  return (
    <section id="referenzen" className="scroll-mt-28 bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          Stimmen
        </p>
        <h2 className="mt-3 text-center font-serif text-3xl font-bold tracking-tight text-brand sm:text-4xl">
          Das sagen unsere Kundinnen und Kunden
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="flex flex-col rounded-2xl border border-line bg-white p-7 shadow-[0_12px_32px_rgba(67,58,54,0.06)]"
            >
              <span className="text-4xl leading-none text-accent">&ldquo;</span>
              <p className="mt-3 flex-1 text-[15px] leading-7 text-muted">{item.quote}</p>
              <div className="mt-6 border-t border-line pt-5">
                <p className="font-semibold text-brand">{item.name}</p>
                <p className="mt-1 text-sm text-muted">{item.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
