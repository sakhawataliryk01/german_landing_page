"use client";

import { useState } from "react";
import { faqs } from "@/lib/content";

export default function FAQ({ city }: { city: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-28 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          FAQ
        </p>
        <h2 className="mt-3 text-center font-serif text-3xl font-bold tracking-tight text-brand sm:text-4xl">
          Fragen und Antworten zur Arbeitssicherheit
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted">
          Die wichtigsten Punkte für Unternehmen in {city} – kurz und klar
          beantwortet.
        </p>

        <div className="mt-10 divide-y divide-line rounded-2xl border border-line bg-surface">
          {faqs.map((item, index) => {
            const open = openIndex === index;
            return (
              <div key={item.question} className="px-5 sm:px-6">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? null : index)}
                >
                  <span className="text-[16px] font-semibold text-brand">
                    {item.question}
                  </span>
                  <span
                    className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-white transition ${
                      open ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                {open ? (
                  <p className="pb-5 text-[15px] leading-7 text-muted">{item.answer}</p>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
