"use client";

import { FormEvent, useEffect, useState, type InputHTMLAttributes } from "react";

type Status = "idle" | "success" | "error";

export default function ContactForm() {
  const [challenge, setChallenge] = useState({ a: 4, b: 5, sum: 9 });
  const [status, setStatus] = useState<Status>("idle");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const a = Math.floor(Math.random() * 8) + 2;
    const b = Math.floor(Math.random() * 8) + 2;
    setChallenge({ a, b, sum: a + b });
  }, []);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const answer = Number(data.get("captcha"));

    if (answer !== challenge.sum) {
      setStatus("error");
      return;
    }

    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 700));
    setSubmitting(false);
    setStatus("success");
    form.reset();
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-accent/40 bg-white/5 p-6 text-white">
        <p className="text-lg font-semibold">Vielen Dank für Ihre Anfrage.</p>
        <p className="mt-2 text-sm text-white/75">Wir melden uns in Kürze bei Ihnen.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <Field label="Unternehmen *" name="company" required />
      <Field label="Ihr Name *" name="name" required />
      <Field label="Telefon (optional)" name="phone" type="tel" />
      <Field label="E-Mail *" name="email" type="email" required />
      <Field label="Mitarbeiteranzahl (optional)" name="employees" />
      <label className="grid gap-2 text-sm text-white/85">
        Ihre Anfrage (optional)
        <textarea
          name="message"
          rows={4}
          className="rounded-md border border-white/15 bg-white px-4 py-3 text-brand outline-none ring-accent/40 transition focus:ring-2"
        />
      </label>
      <Field
        label={`${challenge.a} + ${challenge.b} = *`}
        name="captcha"
        required
        inputMode="numeric"
      />
      {status === "error" ? (
        <p className="text-sm text-red-200">Bitte prüfen Sie die Rechenaufgabe.</p>
      ) : null}
      <button
        type="submit"
        disabled={submitting}
        className="mt-2 rounded-md bg-accent px-6 py-3 font-semibold text-white transition hover:bg-accent-hover disabled:opacity-70"
      >
        {submitting ? "Wird gesendet…" : "Anfrage senden"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  inputMode,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  inputMode?: InputHTMLAttributes<HTMLInputElement>["inputMode"];
}) {
  return (
    <label className="grid gap-2 text-sm text-white/85">
      {label}
      <input
        name={name}
        type={type}
        required={required}
        inputMode={inputMode}
        className="rounded-md border border-white/15 bg-white px-4 py-3 text-brand outline-none ring-accent/40 transition focus:ring-2"
      />
    </label>
  );
}
