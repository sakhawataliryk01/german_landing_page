"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { navItems } from "@/lib/content";

function pageBase(pathname: string) {
  if (
    pathname.startsWith("/arbeitssicherheit-in-") ||
    pathname.startsWith("/arbeitsschutz-in-")
  ) {
    return pathname.replace(/\/$/, "");
  }
  return "";
}

export default function Header() {
  const pathname = usePathname();
  const base = pageBase(pathname);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="border-b border-line/70">
        <div className="mx-auto flex max-w-6xl items-center justify-end gap-6 px-4 py-2 sm:px-6">
          <a
            href={`${base}/#kontakt`}
            className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-accent"
          >
            <span className="text-accent">
              <ContactIcon />
            </span>
            <span>Kontakt</span>
          </a>
          <a
            href="tel:+4940808058300"
            className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-accent"
          >
            <span className="text-accent">
              <PhoneIcon />
            </span>
            <span>49 40 808058-300</span>
          </a>
        </div>
      </div>

      <div
        className={`bg-white transition-shadow ${
          scrolled ? "shadow-[0_6px_20px_rgba(67,58,54,0.06)]" : ""
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <Logo />

          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.hash}
                href={`${base}/${item.hash}`}
                className="text-[15px] font-medium text-muted transition hover:text-accent"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-brand lg:hidden"
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-line bg-white lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-4 py-3 sm:px-6">
            {navItems.map((item) => (
              <a
                key={item.hash}
                href={`${base}/${item.hash}`}
                onClick={() => setOpen(false)}
                className="border-b border-line py-3 text-base text-brand last:border-0"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}

function ContactIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
      <circle cx="12" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M5.5 19.2c.8-3.2 3.3-5 6.5-5s5.7 1.8 6.5 5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
      <path
        d="M6.5 4.5h3l1.2 3.2-1.8 1.1a12.5 12.5 0 0 0 6.3 6.3l1.1-1.8 3.2 1.2v3a1.5 1.5 0 0 1-1.6 1.5C9.7 18.4 5.6 14.3 5 8.1A1.5 1.5 0 0 1 6.5 4.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
      <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}
