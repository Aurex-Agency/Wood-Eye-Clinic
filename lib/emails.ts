import { clinic, siteUrl } from "./site";

/*
 * Branded, email-client-safe HTML for the contact form. Uses table layout and
 * inline styles (required for Outlook/Gmail) and a text-based brand header so
 * it renders perfectly everywhere without depending on a hosted logo image.
 */

export type ContactSubmission = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  topicLabel: string;
  message: string;
};

const BRAND = "#0075a1";
const BRAND_DEEP = "#00445e";
const INK = "#1a2b33";
const MUTED = "#6b7c85";
const BG = "#eef3f6";
const CARD_BORDER = "#e2ebef";

function esc(s: string): string {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const prettyUrl = siteUrl.replace(/^https?:\/\//, "");

function shell(preheader: string, inner: string): string {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="light">
</head>
<body style="margin:0;padding:0;background:${BG};">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;">${esc(preheader)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${BG};padding:24px 12px;">
<tr><td align="center">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:600px;max-width:100%;background:#ffffff;border:1px solid ${CARD_BORDER};border-radius:16px;overflow:hidden;font-family:Helvetica,Arial,sans-serif;">
<tr>
<td style="background:${BRAND};padding:26px 32px;">
<div style="font-size:22px;font-weight:bold;letter-spacing:0.5px;color:#ffffff;">Wood Eye Clinic</div>
<div style="font-size:12px;letter-spacing:2px;text-transform:uppercase;color:#bcedff;margin-top:4px;">Pontotoc, Mississippi</div>
</td>
</tr>
${inner}
<tr>
<td style="padding:22px 32px;background:#f7fafc;border-top:1px solid ${CARD_BORDER};">
<div style="font-size:13px;line-height:1.6;color:${MUTED};">
<strong style="color:${INK};">${esc(clinic.name)}</strong><br>
${esc(clinic.address.street)}, ${esc(clinic.address.city)}, ${esc(clinic.address.state)} ${esc(clinic.address.zip)}<br>
<a href="${clinic.phoneHref}" style="color:${BRAND};text-decoration:none;">${esc(clinic.phone)}</a>
&nbsp;&bull;&nbsp;
<a href="${siteUrl}" style="color:${BRAND};text-decoration:none;">${esc(prettyUrl)}</a>
</div>
</td>
</tr>
</table>
</td></tr>
</table>
</body>
</html>`;
}

function button(href: string, label: string): string {
  return `<table role="presentation" cellpadding="0" cellspacing="0"><tr>
<td style="border-radius:999px;background:${BRAND};">
<a href="${href}" style="display:inline-block;padding:13px 28px;font-size:15px;font-weight:bold;color:#ffffff;text-decoration:none;border-radius:999px;">${esc(label)}</a>
</td></tr></table>`;
}

/** Email delivered to the clinic with the submission details. */
export function clinicNotificationEmail(s: ContactSubmission) {
  const fullName = `${s.firstName} ${s.lastName}`.trim();
  const row = (label: string, value: string) => `
<tr>
<td style="padding:10px 0;border-bottom:1px solid ${CARD_BORDER};font-size:13px;color:${MUTED};width:120px;vertical-align:top;">${esc(label)}</td>
<td style="padding:10px 0;border-bottom:1px solid ${CARD_BORDER};font-size:15px;color:${INK};font-weight:600;">${value}</td>
</tr>`;

  const inner = `
<tr>
<td style="padding:32px 32px 8px;">
<div style="font-size:20px;font-weight:bold;color:${INK};">New message from your website</div>
<div style="font-size:14px;color:${MUTED};margin-top:4px;">A patient reached out through the contact form.</div>
</td>
</tr>
<tr>
<td style="padding:12px 32px 4px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
${row("Name", esc(fullName))}
${row("Phone", `<a href="tel:${esc(s.phone.replace(/[^\d+]/g, ""))}" style="color:${BRAND};text-decoration:none;">${esc(s.phone)}</a>`)}
${row("Email", `<a href="mailto:${esc(s.email)}" style="color:${BRAND};text-decoration:none;">${esc(s.email)}</a>`)}
${row("Topic", esc(s.topicLabel))}
</table>
</td>
</tr>
<tr>
<td style="padding:20px 32px 8px;">
<div style="font-size:13px;color:${MUTED};margin-bottom:8px;">Message</div>
<div style="background:#f0f8fb;border-left:4px solid ${BRAND};border-radius:8px;padding:16px 18px;font-size:15px;line-height:1.6;color:${INK};white-space:pre-wrap;">${esc(s.message)}</div>
</td>
</tr>
<tr>
<td style="padding:20px 32px 32px;">
${button(`mailto:${esc(s.email)}?subject=${encodeURIComponent("Re: your message to Wood Eye Clinic")}`, `Reply to ${esc(s.firstName) || "patient"}`)}
</td>
</tr>`;

  return {
    subject: `New website message from ${fullName || s.email}`,
    html: shell(`New message from ${fullName || s.email}: ${s.message.slice(0, 90)}`, inner),
    text:
      `New message from your website\n\n` +
      `Name: ${fullName}\nPhone: ${s.phone}\nEmail: ${s.email}\nTopic: ${s.topicLabel}\n\n` +
      `Message:\n${s.message}\n`,
  };
}

/** Confirmation email delivered to the patient who submitted the form. */
export function patientConfirmationEmail(s: ContactSubmission) {
  const inner = `
<tr>
<td style="padding:32px 32px 8px;">
<div style="font-size:22px;font-weight:bold;color:${INK};">Thanks for reaching out, ${esc(s.firstName) || "friend"}!</div>
</td>
</tr>
<tr>
<td style="padding:8px 32px;">
<div style="font-size:15px;line-height:1.7;color:${INK};">
We have received your message and a member of our team will get back to you soon, usually within one business day.
</div>
<div style="font-size:15px;line-height:1.7;color:${INK};margin-top:14px;">
If you need to reach us sooner, we would love to hear from you by phone.
</div>
</td>
</tr>
<tr>
<td style="padding:20px 32px 4px;">
${button(clinic.phoneHref, `Call ${esc(clinic.phone)}`)}
</td>
</tr>
<tr>
<td style="padding:24px 32px 8px;">
<div style="font-size:13px;color:${MUTED};margin-bottom:8px;">A copy of your message</div>
<div style="background:#f0f8fb;border-left:4px solid ${BRAND};border-radius:8px;padding:16px 18px;font-size:15px;line-height:1.6;color:${INK};white-space:pre-wrap;">${esc(s.message)}</div>
</td>
</tr>
<tr>
<td style="padding:18px 32px 32px;">
<div style="font-size:13px;line-height:1.7;color:${MUTED};">
Need to book right away? You can request an appointment any time at
<a href="${clinic.bookingUrl}" style="color:${BRAND};text-decoration:none;font-weight:600;">our online scheduler</a>.
Please do not include personal medical details by email.
</div>
</td>
</tr>`;

  return {
    subject: "We received your message — Wood Eye Clinic",
    html: shell(
      "Thanks for reaching out. We received your message and will get back to you soon.",
      inner
    ),
    text:
      `Thanks for reaching out, ${s.firstName}!\n\n` +
      `We have received your message and will get back to you soon, usually within one business day. ` +
      `If you need to reach us sooner, call ${clinic.phone}.\n\n` +
      `A copy of your message:\n${s.message}\n\n` +
      `${clinic.name} — ${clinic.address.street}, ${clinic.address.city}, ${clinic.address.state} ${clinic.address.zip}\n`,
  };
}

export const TOPIC_LABELS: Record<string, string> = {
  appointment: "Request an appointment",
  eyewear: "Glasses or contact lenses",
  insurance: "Insurance question",
  "vision-therapy": "Vision therapy",
  other: "Something else",
};
