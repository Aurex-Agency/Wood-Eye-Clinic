import { clinic } from "@/lib/site";

/*
 * GA4 measurement ID. This value ships in the client bundle by design (it is
 * not a secret), but an env override is honored so staging can point somewhere
 * else without a code change.
 */
export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_ID || "G-22QGZMS5KD";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

/* Every conversion event carries these two params. */
export type TrackParams = {
  page_path: string;
  link_location: string;
};

export function track(event: string, params: TrackParams & Record<string, unknown>) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", event, params);
}

/* Path of the page the interaction happened on, query string included. */
export function currentPagePath() {
  if (typeof window === "undefined") return "";
  return window.location.pathname + window.location.search;
}

/*
 * Where on the page the click happened. Prefers an explicit
 * data-track-location wrapper, then falls back to landmark elements so a link
 * we forgot to tag still reports something usable instead of "unknown".
 */
export function locationOf(el: Element): string {
  const tagged = el.closest("[data-track-location]");
  const value = tagged?.getAttribute("data-track-location");
  if (value) return value;
  if (el.closest("header")) return "header";
  if (el.closest("footer")) return "footer";
  return "page";
}

const BOOKING_HOST = new URL(clinic.bookingUrl).hostname.toLowerCase();

export function isBookingLink(url: URL) {
  return url.hostname.toLowerCase() === BOOKING_HOST;
}

/* Google Maps and Apple Maps, in the URL shapes either service hands out. */
export function isDirectionsLink(url: URL) {
  const host = url.hostname.toLowerCase();
  if (host === "maps.apple.com") return true;
  if (host === "maps.google.com" || host === "maps.app.goo.gl") return true;
  if (host === "goo.gl" && url.pathname.startsWith("/maps")) return true;
  if (
    (host === "google.com" || host.endsWith(".google.com")) &&
    url.pathname.startsWith("/maps")
  ) {
    return true;
  }
  return false;
}
