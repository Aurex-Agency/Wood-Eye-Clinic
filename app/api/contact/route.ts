import { NextResponse } from "next/server";
import { clinic } from "@/lib/site";

/*
 * Delivers contact and appointment form submissions to the clinic inbox.
 *
 * Before this route existed the contact form discarded every submission
 * client-side, so nothing a patient typed ever reached the clinic.
 *
 * Requires RESEND_API_KEY. If it is not configured the route returns 503 and
 * the form tells the patient to call instead, which routes the lead to the
 * phone rather than silently swallowing it.
 */

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "woodeyeclinic@gmail.com";
const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL || "Wood Eye Clinic Website <website@woodeyeclinic.com>";

type Payload = {
  formType?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  email?: string;
  topic?: string;
  preferredDay?: string;
  patientType?: string;
  message?: string;
  company?: string; // honeypot, must stay empty
};

function clean(value: unknown, max = 2000) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Bots fill every field they find; real patients never see this one.
  if (clean(body.company)) {
    return NextResponse.json({ ok: true });
  }

  const isAppointment = clean(body.formType) === "appointment";
  const firstName = clean(body.firstName, 100);
  const lastName = clean(body.lastName, 100);
  const phone = clean(body.phone, 40);
  const email = clean(body.email, 200);
  const message = clean(body.message);

  if (!firstName || !lastName || !phone || !email) {
    return NextResponse.json(
      { error: "Please fill in your name, phone, and email." },
      { status: 400 }
    );
  }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      {
        error: `Our online form is temporarily unavailable. Please call us at ${clinic.phone} and we will take care of you.`,
      },
      { status: 503 }
    );
  }

  const rows: [string, string][] = [
    ["Name", `${firstName} ${lastName}`],
    ["Phone", phone],
    ["Email", email],
  ];
  if (isAppointment) {
    if (clean(body.patientType)) rows.push(["Patient", clean(body.patientType, 60)]);
    if (clean(body.preferredDay)) rows.push(["Preferred time", clean(body.preferredDay, 120)]);
  }
  if (clean(body.topic)) rows.push(["Topic", clean(body.topic, 60)]);
  if (message) rows.push(["Message", message]);

  const subject = isAppointment
    ? `Appointment request from ${firstName} ${lastName}`
    : `Website message from ${firstName} ${lastName}`;

  const html = `<h2>${escapeHtml(subject)}</h2><table cellpadding="6">${rows
    .map(
      ([label, value]) =>
        `<tr><td><strong>${escapeHtml(label)}</strong></td><td>${escapeHtml(
          value
        ).replace(/\n/g, "<br>")}</td></tr>`
    )
    .join("")}</table><p>Sent from woodeyeclinic.com</p>`;

  const text = `${subject}\n\n${rows.map(([l, v]) => `${l}: ${v}`).join("\n")}\n\nSent from woodeyeclinic.com`;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        reply_to: email,
        subject,
        html,
        text,
      }),
    });

    if (!response.ok) {
      console.error("Resend rejected the submission", response.status, await response.text());
      return NextResponse.json(
        {
          error: `We could not send your message. Please call us at ${clinic.phone}.`,
        },
        { status: 502 }
      );
    }
  } catch (error) {
    console.error("Failed to reach the email provider", error);
    return NextResponse.json(
      { error: `We could not send your message. Please call us at ${clinic.phone}.` },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
