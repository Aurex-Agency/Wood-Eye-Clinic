"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "@/components/Logo";
import { clinic, navLinks } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <div className="glass-surface glass-strong mx-auto flex max-w-6xl items-center justify-between rounded-3xl px-5 py-3 sm:px-7">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-300 ${
                isActive(link.href)
                  ? "bg-brand text-white"
                  : "text-ink/80 hover:bg-sky/50 hover:text-brand-dark"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={clinic.phoneHref}
            className="text-sm font-bold text-brand-dark transition-colors hover:text-brand"
          >
            {clinic.phone}
          </a>
          <Link
            href="/contact"
            className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand"
          >
            Request Appointment
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex h-11 w-11 items-center justify-center rounded-full text-ink transition-colors hover:bg-sky/50 lg:hidden"
          aria-expanded={open}
          aria-label="Toggle navigation menu"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="glass-surface glass-strong mx-auto mt-2 max-w-6xl rounded-3xl p-4 lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-2xl px-4 py-3 text-base font-semibold transition-colors ${
                  isActive(link.href)
                    ? "bg-brand text-white"
                    : "text-ink/80 hover:bg-sky/50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-2xl bg-ink px-4 py-3 text-center text-base font-semibold text-white"
            >
              Request Appointment
            </Link>
            <a
              href={clinic.phoneHref}
              className="rounded-2xl px-4 py-3 text-center text-base font-bold text-brand-dark"
            >
              Call {clinic.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
