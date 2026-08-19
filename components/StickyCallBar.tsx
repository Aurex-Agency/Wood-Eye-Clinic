import Link from "next/link";
import { clinic } from "@/lib/site";

/*
 * Mobile-only action bar pinned to the bottom of the viewport, below the md
 * breakpoint. The appointment page previously took 2 visits in 28 days, so the
 * two things a patient actually wants are always one tap away.
 *
 * globals.css reserves matching bottom padding on <body> at the same
 * breakpoint so this never covers footer content.
 */
export default function StickyCallBar() {
  return (
    <div
      data-track-location="sticky_bar"
      className="fixed inset-x-0 bottom-0 z-40 px-3 pb-3 md:hidden"
      style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
    >
      <div className="glass-liquid flex items-center gap-2 rounded-full p-2 shadow-2xl">
        <a
          href={clinic.phoneHref}
          className="flex flex-1 items-center justify-center gap-2 rounded-full border-2 border-brand px-4 py-3 text-sm font-bold text-brand-dark transition-colors duration-300 hover:bg-brand hover:text-white"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4 shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
          </svg>
          Call
        </a>
        <Link
          href="/appointment"
          className="flex flex-1 items-center justify-center rounded-full bg-brand px-4 py-3 text-center text-sm font-bold text-white shadow-lg transition-colors duration-300 hover:bg-brand-dark"
        >
          Request Appointment
        </Link>
      </div>
    </div>
  );
}
