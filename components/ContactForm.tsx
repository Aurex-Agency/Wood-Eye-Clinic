"use client";

import { useState } from "react";

/*
 * Contact form. Submissions POST to /api/contact, which emails a branded
 * message to the clinic and a confirmation to the patient (via Resend when
 * configured, otherwise FormSubmit as a no-setup fallback).
 */
type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: if a bot filled the hidden field, pretend success and stop.
    if (data.get("_honey")) {
      setStatus("success");
      return;
    }

    const payload = {
      firstName: String(data.get("firstName") ?? "").trim(),
      lastName: String(data.get("lastName") ?? "").trim(),
      phone: String(data.get("phone") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      topic: String(data.get("topic") ?? ""),
      message: String(data.get("message") ?? "").trim(),
    };

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="glass-surface glass-tint rounded-3xl p-10 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white">
          <svg
            viewBox="0 0 24 24"
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-ink">Thank you for reaching out!</h3>
        <p className="mt-2 text-ink/70">
          We have received your message and will get back to you as soon as
          possible. If you need immediate assistance, please call us at (662)
          489-5907.
        </p>
      </div>
    );
  }

  const inputStyles =
    "w-full rounded-2xl border border-white/70 bg-white/70 px-4 py-3 text-ink placeholder:text-ink/40 shadow-inner outline-none transition-all focus:border-brand focus:bg-white focus:ring-2 focus:ring-sky";

  const submitting = status === "submitting";

  return (
    <form onSubmit={handleSubmit} className="glass-surface glass-strong rounded-3xl p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-ink">First name</span>
          <input type="text" name="firstName" required placeholder="Jane" className={inputStyles} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-ink">Last name</span>
          <input type="text" name="lastName" required placeholder="Smith" className={inputStyles} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-ink">Phone</span>
          <input
            type="tel"
            name="phone"
            required
            placeholder="(662) 555-0100"
            className={inputStyles}
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-ink">Email</span>
          <input
            type="email"
            name="email"
            required
            placeholder="jane@example.com"
            className={inputStyles}
          />
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-1.5 block text-sm font-semibold text-ink">
            How can we help?
          </span>
          <select name="topic" className={inputStyles} defaultValue="appointment">
            <option value="appointment">Request an appointment</option>
            <option value="eyewear">Glasses or contact lenses</option>
            <option value="insurance">Insurance question</option>
            <option value="vision-therapy">Vision therapy</option>
            <option value="other">Something else</option>
          </select>
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-1.5 block text-sm font-semibold text-ink">Message</span>
          <textarea
            name="message"
            rows={5}
            required
            placeholder="Tell us a little about what you need..."
            className={inputStyles}
          />
        </label>
      </div>

      {/* Honeypot field: hidden from people, catches spam bots. */}
      <input
        type="text"
        name="_honey"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <p className="mt-4 text-xs leading-relaxed text-ink/50">
        Please do not include personal medical details in this form. For
        urgent eye care needs, call us directly at (662) 489-5907.
      </p>

      {status === "error" && (
        <p className="mt-4 rounded-2xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          Sorry, something went wrong sending your message. Please try again, or
          call us at{" "}
          <a href="tel:+16624895907" className="font-bold underline">
            (662) 489-5907
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-brand px-6 py-4 text-base font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto sm:px-10"
      >
        {submitting && (
          <svg
            className="h-5 w-5 animate-spin"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-90" fill="currentColor" d="M4 12a8 8 0 0 1 8-8V0C5.4 0 0 5.4 0 12h4z" />
          </svg>
        )}
        {submitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
