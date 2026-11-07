import nodemailer from "nodemailer";

export const runtime = "nodejs";

type Payload = {
  company?: string;
  name?: string;
  phone?: string;
  email?: string;
  employees?: string;
  message?: string;
  website?: string; // honeypot
};

const clean = (value: unknown, max = 2000) =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Ungültige Anfrage." }, { status: 400 });
  }

  // Honeypot: bots fill this hidden field. Pretend success, send nothing.
  if (clean(body.website)) {
    return Response.json({ ok: true });
  }

  const company = clean(body.company, 200);
  const name = clean(body.name, 200);
  const phone = clean(body.phone, 100);
  const email = clean(body.email, 200);
  const employees = clean(body.employees, 100);
  const message = clean(body.message, 5000);

  if (!company || !name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json(
      { ok: false, error: "Bitte füllen Sie alle Pflichtfelder aus." },
      { status: 400 },
    );
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_TO, MAIL_FROM } = process.env;

  if (!SMTP_USER || !SMTP_PASS) {
    console.error("[contact] SMTP_USER / SMTP_PASS are not configured.");
    return Response.json(
      { ok: false, error: "Der Versand ist derzeit nicht verfügbar." },
      { status: 500 },
    );
  }

  const port = Number(SMTP_PORT) || 465;
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST || "smtp.gmail.com",
    port,
    secure: port === 465,
    // Google shows app passwords in groups of four; spaces are not part of the password.
    auth: { user: SMTP_USER, pass: SMTP_PASS.replace(/\s/g, "") },
  });

  const rows: [string, string][] = [
    ["Unternehmen", company],
    ["Name", name],
    ["E-Mail", email],
    ["Telefon", phone || "–"],
    ["Mitarbeiteranzahl", employees || "–"],
    ["Anfrage", message || "–"],
  ];

  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n");
  const html = `<table cellpadding="6" style="font-family:Arial,sans-serif;font-size:14px">${rows
    .map(
      ([k, v]) =>
        `<tr><td style="vertical-align:top"><strong>${k}</strong></td><td>${escapeHtml(v).replace(/\n/g, "<br>")}</td></tr>`,
    )
    .join("")}</table>`;

  try {
    await transporter.sendMail({
      from: MAIL_FROM || `"Website-Anfrage" <${SMTP_USER}>`,
      to: MAIL_TO || SMTP_USER,
      replyTo: `"${name.replace(/"/g, "")}" <${email}>`,
      subject: `Neue Anfrage von ${company}`,
      text,
      html,
    });
    return Response.json({ ok: true });
  } catch (error) {
    console.error("[contact] sendMail failed:", error);
    return Response.json(
      { ok: false, error: "Die Nachricht konnte nicht gesendet werden." },
      { status: 502 },
    );
  }
}
