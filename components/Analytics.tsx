"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import {
  GA_MEASUREMENT_ID,
  currentPagePath,
  isBookingLink,
  isDirectionsLink,
  locationOf,
  track,
} from "@/lib/analytics";

/*
 * One client component handles all of GA4:
 *
 *  1. Loads gtag.js and sends the initial page_view.
 *  2. Sends a page_view on every client-side route change (the App Router does
 *     not reload the page, so GA would otherwise only ever see the entry page).
 *  3. Listens for clicks on document once, in the capture phase, and turns
 *     tel:, mailto:, maps, and booking links into conversion events. Delegation
 *     means no link anywhere on the site needs to know about analytics, and
 *     links added later are covered automatically.
 *
 * Form success events are NOT handled here. They are fired by the forms
 * themselves, only after the server confirms the submission.
 */
export default function Analytics() {
  const pathname = usePathname();
  const firstRender = useRef(true);

  // gtag's own config call sends the first page_view, so skip the initial
  // effect run and only report subsequent client-side navigations.
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

      // Relative and hash links are internal navigation, nothing to report.
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

    // Capture phase so the event is recorded even if a handler further down
    // stops propagation before the click reaches document.
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  if (!GA_MEASUREMENT_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}');`}
      </Script>
    </>
  );
}
