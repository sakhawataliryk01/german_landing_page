import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export default function Button({ href, children, className = "" }: ButtonProps) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 text-[15px] font-semibold text-white shadow-[0_8px_20px_rgba(242,101,34,0.28)] transition hover:bg-accent-hover ${className}`}
    >
      {children}
    </a>
  );
}

export function EnvelopeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
      <rect x="3" y="6" width="18" height="12" rx="1.6" stroke="currentColor" strokeWidth="1.8" />
      <path d="M4 7.5 12 13l8-5.5" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}
