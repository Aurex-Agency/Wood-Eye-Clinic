"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "@/components/Logo";
import Icon from "@/components/Icon";
import { clinic, services } from "@/lib/site";

type NavChild = { label: string; href: string; desc?: string; icon?: string };
type NavItem = { label: string; href: string; children?: NavChild[] };

const nav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "About Wood Eye Clinic", href: "/about", desc: "Our story since 1981" },
      {
        label: "Meet the Optometrists",
        href: "/about/meet-the-doctors",
        desc: "Dr. Wood, Dr. Maynard & Dr. Warren",
      },
      {
        label: "Meet the Team",
        href: "/about/meet-the-team",
        desc: "The people behind your care",
      },
    ],
  },
  {
    label: "Eyecare Services",
    href: "/services",
    children: services.map((s) => ({
      label: s.name,
      href: `/services/${s.slug}`,
      icon: s.icon,
    })),
  },
  { label: "Contact Us", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  // On the home page the header floats over the dark hero, so nav text is
  // white until the hero scrolls out from behind it, then it turns dark.
  const [light, setLight] = useState(pathname === "/");

  useEffect(() => {
    if (pathname !== "/") {
      setLight(false);
      return;
    }
    const hero = document.getElementById("hero");
    if (!hero) {
      setLight(false);
      return;
    }
    let raf = 0;
    const update = () => {
      raf = 0;
      setLight(hero.getBoundingClientRect().bottom > 120);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <div className="glass-liquid mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-3 sm:px-7">
        <Logo light={light} />

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Main navigation">
          {nav.map((item) =>
            item.children ? (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-300 ${
                    isActive(item.href)
                      ? "bg-brand text-white"
                      : light
                        ? "text-white hover:bg-white/20 hover:text-white"
                        : "text-ink/80 hover:bg-sky/50 hover:text-brand-dark"
                  }`}
                >
                  {item.label}
                  <svg
                    viewBox="0 0 24 24"
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </Link>

                {/* Dropdown */}
                <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div
                    className={`glass-surface rounded-3xl p-2 shadow-2xl ${
                      item.children.length > 4 ? "w-[34rem]" : "w-72"
                    }`}
                    style={{ backgroundColor: "rgba(255,255,255,0.96)" }}
                  >
                    <div
                      className={
                        item.children.length > 4 ? "grid grid-cols-2 gap-1" : "flex flex-col gap-1"
                      }
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="flex items-start gap-3 rounded-2xl px-3 py-2.5 transition-colors duration-200 hover:bg-sky/50"
                        >
                          {child.icon && (
                            <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky/60 text-brand-dark">
                              <Icon name={child.icon} className="h-4 w-4" />
                            </span>
                          )}
                          <span>
                            <span className="block text-sm font-bold text-ink">{child.label}</span>
                            {child.desc && (
                              <span className="mt-0.5 block text-xs text-ink/55">{child.desc}</span>
                            )}
                          </span>
                        </Link>
                      ))}
                    </div>
                    {item.children.length > 4 && (
                      <Link
                        href={item.href}
                        className="mt-1 block rounded-2xl bg-brand/10 px-4 py-2.5 text-center text-sm font-bold text-brand transition-colors hover:bg-brand hover:text-white"
                      >
                        View all services &rarr;
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-300 ${
                  isActive(item.href)
                    ? "bg-brand text-white"
                    : light
                      ? "text-white hover:bg-white/20 hover:text-white"
                      : "text-ink/80 hover:bg-sky/50 hover:text-brand-dark"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-2.5 xl:flex">
          <a
            href={clinic.patientPortalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`whitespace-nowrap text-sm font-semibold transition-colors duration-300 ${
              light ? "text-white hover:text-sky" : "text-brand-dark hover:text-brand"
            }`}
          >
            Patient Portal
          </a>
          <a
            href={clinic.orderContactsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 ${
              light
                ? "border-white/50 text-white hover:bg-white/15"
                : "border-brand text-brand hover:bg-brand hover:text-white"
            }`}
          >
            Order Contacts
          </a>
          <a
            href={clinic.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand"
          >
            Book an Appointment
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className={`flex h-11 w-11 items-center justify-center rounded-full transition-colors duration-300 xl:hidden ${
            light ? "text-white hover:bg-white/20" : "text-ink hover:bg-sky/50"
          }`}
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
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="glass-surface glass-strong mx-auto mt-2 max-h-[75vh] max-w-6xl overflow-y-auto rounded-3xl p-4 xl:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {nav.map((item) =>
              item.children ? (
                <div key={item.href}>
                  <div className="flex items-center gap-1">
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`flex-1 rounded-2xl px-4 py-3 text-base font-semibold transition-colors ${
                        isActive(item.href) ? "bg-brand text-white" : "text-ink/80 hover:bg-sky/50"
                      }`}
                    >
                      {item.label}
                    </Link>
                    <button
                      type="button"
                      onClick={() => setExpanded(expanded === item.label ? null : item.label)}
                      className="flex h-11 w-11 items-center justify-center rounded-2xl text-ink/70 transition-colors hover:bg-sky/50"
                      aria-expanded={expanded === item.label}
                      aria-label={`Toggle ${item.label} submenu`}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className={`h-5 w-5 transition-transform duration-300 ${
                          expanded === item.label ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </button>
                  </div>
                  {expanded === item.label && (
                    <div className="ml-3 mt-1 flex flex-col gap-0.5 border-l-2 border-sky/60 pl-3">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className="rounded-xl px-3 py-2.5 text-sm font-medium text-ink/75 transition-colors hover:bg-sky/40 hover:text-brand-dark"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-2xl px-4 py-3 text-base font-semibold transition-colors ${
                    isActive(item.href) ? "bg-brand text-white" : "text-ink/80 hover:bg-sky/50"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
            <a
              href={clinic.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-2xl bg-ink px-4 py-3 text-center text-base font-semibold text-white"
            >
              Book an Appointment
            </a>
            <a
              href={clinic.orderContactsUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="rounded-2xl border-2 border-brand px-4 py-3 text-center text-base font-bold text-brand"
            >
              Order Contacts Online
            </a>
            <a
              href={clinic.patientPortalUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="rounded-2xl border-2 border-brand/50 px-4 py-3 text-center text-base font-bold text-brand-dark"
            >
              Patient Portal
            </a>
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
