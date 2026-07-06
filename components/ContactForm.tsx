"use client";

import { useState } from "react";

/*
 * Contact form (first draft). Submission is handled client-side only for
 * now. Wire the handleSubmit body to the clinic's form endpoint (Formspree,
 * Netlify Forms, or a custom API route) before launch.
 */
export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
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

      <p className="mt-4 text-xs leading-relaxed text-ink/50">
        Please do not include personal medical details in this form. For
        urgent eye care needs, call us directly at (662) 489-5907.
      </p>

      <button
        type="submit"
        className="mt-5 w-full rounded-2xl bg-brand px-6 py-4 text-base font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-dark sm:w-auto sm:px-10"
      >
        Send Message
      </button>
    </form>
  );
}
