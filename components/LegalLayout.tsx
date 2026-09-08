import type { ReactNode } from "react";

export default function LegalLayout({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <article className="bg-white">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <h1 className="font-serif text-3xl font-bold tracking-tight text-brand sm:text-4xl">
          {title}
        </h1>
        <div className="mt-8 space-y-4 text-[15px] leading-7 text-muted">{children}</div>
      </div>
    </article>
  );
}
