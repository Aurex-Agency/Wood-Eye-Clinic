"use client";

import { useState } from "react";
import { clinic } from "@/lib/site";
import { currentPagePath, track } from "@/lib/analytics";

/*
 * Appointment request form. Posts to /api/contact with formType "appointment".
 * Fires GA4 appointment_request only after the server confirms the request
 * reached the clinic inbox.
 */
export default function AppointmentForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    setError(null);

    const data = Object.fromEntries(new FormData(e.currentTarget).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, formType: "appointment" }),
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        setError(result.error || `Something went wrong. Please call us at ${clinic.phone}.`);
        return;
      }

      track("appointment_request", {
        page_path: currentPagePath(),
        link_location: "appointment_page",
      });
      setSubmitted(true);
    } catch {
      setError(`We could not reach our server. Please call us at ${clinic.phone}.`);
    } finally {
      setSending(false);
    }
  }

  if (submitted) {
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
        <h3 className="text-xl font-bold text-ink">Your request is in!</h3>
        <p className="mt-2 text-ink/70">
          A member of our team will call you shortly to confirm your
          appointment time. If you need to be seen right away, call us at{" "}
          {clinic.phone}.
        </p>
      </div>
    );
  }

  const inputStyles =
    "w-full rounded-2xl border border-white/70 bg-white/70 px-4 py-3 text-ink placeholder:text-ink/40 shadow-inner outline-none transition-all focus:border-brand focus:bg-white focus:ring-2 focus:ring-sky";

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
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-ink">Are you a</span>
          <select name="patientType" className={inputStyles} defaultValue="New patient">
            <option value="New patient">New patient</option>
            <option value="Returning patient">Returning patient</option>
          </select>
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-ink">
            What do you need?
          </span>
          <select name="topic" className={inputStyles} defaultValue="Comprehensive eye exam">
            <option value="Comprehensive eye exam">Comprehensive eye exam</option>
            <option value="Contact lens exam or fitting">Contact lens exam or fitting</option>
            <option value="Child's eye exam">Child&apos;s eye exam</option>
            <option value="Glasses or frame fitting">Glasses or frame fitting</option>
            <option value="Eye health concern">Eye health concern</option>
            <option value="Something else">Something else</option>
          </select>
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-1.5 block text-sm font-semibold text-ink">
            Days and times that work best
          </span>
          <input
            type="text"
            name="preferredDay"
            placeholder="Weekday mornings, or Tuesday after 4:00"
            className={inputStyles}
          />
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-1.5 block text-sm font-semibold text-ink">
            Anything else we should know?
          </span>
          <textarea
            name="message"
            rows={4}
            placeholder="Insurance questions, accessibility needs, or anything else."
            className={inputStyles}
          />
        </label>
      </div>

      {/* Honeypot: hidden from patients, irresistible to bots. */}
      <div className="hidden" aria-hidden="true">
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <p className="mt-4 text-xs leading-relaxed text-ink/50">
        This is a request, not a confirmed booking. We will call you to confirm
        your time. Please do not include personal medical details. For urgent
        eye care needs, call us at {clinic.phone}.
      </p>

      {error && (
        <p
          role="alert"
          className="mt-4 rounded-2xl bg-brand/10 px-5 py-4 text-sm font-semibold leading-relaxed text-brand-deep"
        >
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={sending}
        className="mt-5 w-full rounded-2xl bg-brand px-6 py-4 text-base font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 sm:w-auto sm:px-10"
      >
        {sending ? "Sending..." : "Request My Appointment"}
      </button>
    </form>
  );
}
