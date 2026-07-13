"use client";

import { useEffect, useState } from "react";
import { clinic } from "@/lib/site";

/*
 * "See clearly" hero. The scene fills the section softly out of focus, the way
 * the world looks without the right prescription. A glass-framed photo of the
 * clinic sits to the right, blurred until the visitor presses "See what happens
 * at Wood Eye Clinic," which brings it into sharp focus. A literal, on-brand
 * play on what the clinic does.
 *
 * The reveal cross-fades a sharp image over a pre-blurred one (hero-blur.webp)
 * rather than animating a CSS `filter`, so the framed photo never lifts into
 * its own compositing layer and keeps frosting correctly behind the sticky
 * header while it scrolls.
 *
 * SWAP THE PHOTO: replace /public/img/hero.webp, then regenerate the blurred
 * companion /public/img/hero-blur.webp from the same source.
 */
export default function Hero() {
  // On load, a pair of glasses drops down (like putting them on) while the
  // framed photo comes into focus, then the glasses lift away.
  const [dropped, setDropped] = useState(false); // glasses have dropped into place
  const [revealed, setRevealed] = useState(false); // photo is sharp
  const [glassesGone, setGlassesGone] = useState(false); // glasses faded away

  useEffect(() => {
    const raf = requestAnimationFrame(() => setDropped(true));
    const t1 = setTimeout(() => setRevealed(true), 780);
    const t2 = setTimeout(() => setGlassesGone(true), 2500);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <section id="hero" className="relative -mt-[92px] flex min-h-[42rem] items-center overflow-hidden px-4 pb-16 pt-28 sm:px-6 sm:pt-32 lg:min-h-[48rem]">
      {/* Out-of-focus backdrop. The bottom is masked to fade away so the fixed
          light site backdrop (which the next section also sits on) shows through,
          letting the dark hero melt smoothly into the section below. */}
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, #000 68%, rgba(0,0,0,0.45) 86%, transparent 100%)",
          maskImage:
            "linear-gradient(to bottom, #000 68%, rgba(0,0,0,0.45) 86%, transparent 100%)",
        }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/img/hero.webp')",
            filter: "blur(24px) brightness(0.6) saturate(1.1)",
            transform: "scale(1.15)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(150,205,235,0.2) 0%, rgba(0,24,36,0) 15%), linear-gradient(to right, rgba(0,24,36,0.82) 0%, rgba(0,24,36,0.5) 46%, rgba(0,24,36,0.25) 100%)",
          }}
        />
        <div className="orb animate-drift right-[6%] top-[14%] h-80 w-80 bg-sky/20" />
        <div
          className="orb animate-drift left-[8%] bottom-[10%] h-72 w-72 bg-brand/25"
          style={{ animationDelay: "-9s" }}
        />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Copy */}
        <div className="max-w-xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky opacity-70" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-sky" />
            </span>
            Welcoming new patients in Pontotoc, MS
          </p>

          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.02] tracking-tight text-white drop-shadow-[0_2px_18px_rgba(0,18,30,0.55)] sm:text-6xl lg:text-7xl">
            Life is better
            <span className="block text-sky">in focus.</span>
          </h1>

          <p className="mt-6 max-w-md text-lg leading-relaxed text-white/85 drop-shadow-[0_1px_10px_rgba(0,18,30,0.5)]">
            A trusted family eye clinic caring for North Mississippi since 1981,
            with comprehensive exams, designer eyewear, and doctors who know you
            by name.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={clinic.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-white py-2.5 pl-2.5 pr-7 font-bold text-ink shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white transition-transform duration-300 group-hover:rotate-45">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
              Book Your Eye Exam
            </a>
            <a
              href={clinic.phoneHref}
              className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20"
            >
              Call {clinic.phone}
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2">
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5 text-sky" aria-label="Five star rated">
                {Array.from({ length: 5 }).map((_, s) => (
                  <svg key={s} viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                    <path d="M12 2l2.9 6.6 7.1.7-5.4 4.8 1.6 7L12 17.5 5.8 21l1.6-7L2 9.3l7.1-.7L12 2Z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm font-semibold text-white/85">Loved by local families</span>
            </div>
            <span className="text-sm text-white/70">
              <span className="font-bold text-white">45+ years</span> of care
            </span>
          </div>
        </div>

        {/* Clinic photo resting on a soft dark-glass pane that harmonizes with
            the hero, snapping into focus on demand */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="glass-dark relative w-full max-w-[36rem] rounded-[1.75rem] p-2.5 shadow-xl sm:p-3">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.35rem]">
              {/* Pre-blurred base (no CSS filter, so it frosts under the header) */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/hero-blur.webp"
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full scale-105 object-cover"
              />
              {/* Sharp image fades in on reveal */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/hero.webp"
                alt="The Wood Eye Clinic team at their optical boutique in Pontotoc"
                className="absolute inset-0 h-full w-full object-cover"
                style={{
                  opacity: revealed ? 1 : 0,
                  transform: revealed ? "scale(1)" : "scale(1.05)",
                  transition:
                    "opacity 900ms cubic-bezier(0.22,1,0.36,1), transform 1200ms cubic-bezier(0.22,1,0.36,1)",
                }}
              />
              {/* Faint sheen for a hint of glass */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 44%)",
                }}
                aria-hidden="true"
              />
            </div>

            {/* Wood-eye glasses that drop in on load, like putting them on, and
                lift away as the photo comes into focus. Placed outside the
                clipped image so they can enter from above the frame. */}
            <div
              className="pointer-events-none absolute inset-x-2.5 inset-y-2.5 z-10 flex items-center justify-center sm:inset-x-3 sm:inset-y-3"
              aria-hidden="true"
            >
              <svg
                viewBox="0 0 520 250"
                className="w-[82%]"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  transform: dropped ? "translateY(0)" : "translateY(-120%)",
                  opacity: glassesGone ? 0 : 1,
                  transition:
                    "transform 1150ms cubic-bezier(0.34,1.34,0.5,1), opacity 650ms ease-out",
                }}
              >
                {/* dark halo so the frame reads over any part of the photo */}
                <g stroke="rgba(0,18,30,0.5)" strokeWidth="21">
                  <circle cx="158" cy="132" r="92" />
                  <circle cx="362" cy="132" r="92" />
                  <path d="M250 116 q10 -16 20 0" />
                  <path d="M66 104 L16 52" />
                  <path d="M454 104 L504 52" />
                </g>
                {/* white frame */}
                <g stroke="#ffffff" strokeWidth="12">
                  <circle cx="158" cy="132" r="92" />
                  <circle cx="362" cy="132" r="92" />
                  <path d="M250 116 q10 -16 20 0" />
                  <path d="M66 104 L16 52" />
                  <path d="M454 104 L504 52" />
                </g>
                {/* subtle brand-blue rim on the lenses */}
                <g stroke="#7fd3f2" strokeWidth="4">
                  <circle cx="158" cy="132" r="92" />
                  <circle cx="362" cy="132" r="92" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
