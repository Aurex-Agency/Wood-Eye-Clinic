"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import {
  currentPagePath,
  isBookingLink,
  isDirectionsLink,
  locationOf,
  track,
} from "@/lib/analytics";

/*
 * Conversion tracking for the GA4 tag loaded in app/layout.tsx.
 *
 * This component deliberately does NOT load gtag.js or call gtag('config') --
 * layout.tsx already does both, and doing it twice double-counts every
 * pageview. This only adds what the base tag cannot do on its own:
 *
 *  1. A page_view on client-side route changes. The App Router does not reload
 *     the document, so the base tag alone only ever reports the entry page.
 *  2. One delegated capture-phase click listener that turns tel:, mailto:,
 *     maps, and booking links into conversion events, so no individual link
 *     anywhere on the site needs to know analytics exists.
 *
 * Form success events are fired by the forms themselves, only after the server
 * confirms the submission.
 */
export default function ConversionTracking() {
  const pathname = usePathname();
  const firstRender = useRef(true);

  // gtag('config') already sent the first page_view; only report navigations.
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    if (typeof window.gtag !== "function") return;
    window.gtag("event", "page_view", {
      page_path: currentPagePath(),
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [pathname]);

  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      const page_path = currentPagePath();
      const link_location = locationOf(anchor);

      if (href.startsWith("tel:")) {
        track("click_to_call", { page_path, link_location });
        return;
      }

      if (href.startsWith("mailto:")) {
        track("email_click", { page_path, link_location });
        return;
      }

      let url: URL;
      try {
        url = new URL(href, window.location.href);
      } catch {
        return;
      }
      if (url.protocol !== "http:" && url.protocol !== "https:") return;

      if (isDirectionsLink(url)) {
        track("directions_click", { page_path, link_location });
        return;
      }

      if (isBookingLink(url)) {
        track("book_online_click", { page_path, link_location });
      }
    }

    // Capture phase, so the event is recorded even if a handler further down
    // stops propagation before the click reaches document.
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
