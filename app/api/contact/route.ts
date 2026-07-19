import { NextResponse } from "next/server";
import {
  clinicNotificationEmail,
  patientConfirmationEmail,
  TOPIC_LABELS,
  type ContactSubmission,
} from "@/lib/emails";

export const runtime = "nodejs";

const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "woodeyeclinic@gmail.com";
const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL ?? "Wood Eye Clinic <noreply@woodeyeclinic.com>";

async function sendViaResend(sub: ContactSubmission) {
  const key = process.env.RESEND_API_KEY!;
  const notify = clinicNotificationEmail(sub);
  const confirm = patientConfirmationEmail(sub);

  const send = (payload: Record<string, unknown>) =>
    fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

  // Notify the clinic (required). Reply-To is the patient so staff can reply.
  const res = await send({
    from: FROM_EMAIL,
    to: [TO_EMAIL],
    reply_to: sub.email,
    subject: notify.subject,
    html: notify.html,
    text: notify.text,
  });
  if (!res.ok) {
    throw new Error(`Resend notify failed: ${res.status} ${await res.text()}`);
  }

  // Confirmation to the patient (best effort — don't fail the request if this
  // one bounces, the clinic already has the message).
  try {
    await send({
      from: FROM_EMAIL,
      to: [sub.email],
      subject: confirm.subject,
      html: confirm.html,
      text: confirm.text,
    });
  } catch {
    /* ignore confirmation failure */
  }
}

async function sendViaFormSubmit(sub: ContactSubmission) {
  const endpoint =
    process.env.NEXT_PUBLIC_FORM_ENDPOINT ??
    `https://formsubmit.co/ajax/${encodeURIComponent(TO_EMAIL)}`;
  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      Name: `${sub.firstName} ${sub.lastName}`.trim(),
      Phone: sub.phone,
      Email: sub.email,
      "How can we help": sub.topicLabel,
      Message: sub.message,
      _subject: `New website message from ${sub.firstName} ${sub.lastName}`.trim(),
      _template: "box",
      _replyto: sub.email,
      _captcha: "false",
      _autoresponse:
        `Hi ${sub.firstName}, thanks for reaching out to Wood Eye Clinic! ` +
        `We have received your message and will get back to you soon, usually within one business day. ` +
        `If you need to reach us sooner, please call (662) 489-5907.`,
    }),
  });
  if (!res.ok) {
    throw new Error(`FormSubmit failed: ${res.status}`);
  }
}

export async function POST(req: Request) {
  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  // Honeypot: silently accept bot submissions without doing anything.
  if (body._honey) {
    return NextResponse.json({ ok: true });
  }

  const firstName = (body.firstName ?? "").trim();
  const lastName = (body.lastName ?? "").trim();
  const phone = (body.phone ?? "").trim();
  const email = (body.email ?? "").trim();
  const topic = (body.topic ?? "").trim();
  const message = (body.message ?? "").trim();

  if (!firstName || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "Please fill in your name, email, and message." },
      { status: 400 }
    );
  }

  const submission: ContactSubmission = {
    firstName,
    lastName,
    phone,
    email,
    topicLabel: TOPIC_LABELS[topic] ?? topic ?? "General",
    message,
  };

  try {
    if (process.env.RESEND_API_KEY) {
      await sendViaResend(submission);
    } else {
      await sendViaFormSubmit(submission);
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form send failed:", err);
    return NextResponse.json(
      { ok: false, error: "Could not send your message. Please try again or call us." },
      { status: 502 }
    );
  }
}
