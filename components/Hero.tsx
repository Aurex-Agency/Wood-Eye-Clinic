"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { clinic } from "@/lib/site";

/*
 * "Life is better in focus" hero. A clear photo of the clinic fills the section
 * behind a legibility scrim. On load a line-art pair of glasses drops in from
 * above and settles over the centered headline while the copy animates from
 * softly blurred into sharp focus, a literal play on what the clinic does.
 *
 * The blur lives on the individual copy elements (not a wrapping ancestor) and
 * is removed outright once the intro finishes, so nothing keeps a lingering
 * `filter` layer that would stop the sticky header from frosting the hero.
 *
 * SWAP THE PHOTO: replace /public/img/hero.webp.
 */
export default function Hero() {
  // revealed -> run the intro transitions; settled -> strip the blur filter.
  const [revealed, setRevealed] = useState(false);
  const [settled, setSettled] = useState(false);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setRevealed(true));
    const timer = setTimeout(() => setSettled(true), 2000);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
    };
  }, []);

  // Blur while blurred; animate to sharp on reveal; drop the property once done.
  const blur = settled ? undefined : revealed ? "blur(0px)" : "blur(9px)";
  const copyStyle = {
    filter: blur,
    transition: "filter 950ms cubic-bezier(0.22,1,0.36,1)",
    transitionDelay: revealed ? "520ms" : "0ms",
  };

  return (
    <section id="hero" className="relative -mt-[92px] flex min-h-[44rem] items-center overflow-hidden px-4 pb-20 pt-32 sm:px-6 lg:min-h-[50rem]">
      {/* Clear photo backdrop with a legibility scrim */}
      <div className="absolute inset-0" aria-hidden="true">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/img/hero.webp')", transform: "scale(1.04)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 72% 62% at 50% 44%, rgba(0,15,25,0.64) 0%, rgba(0,15,25,0.3) 58%, rgba(0,15,25,0) 100%), linear-gradient(to bottom, rgba(0,15,25,0.74) 0%, rgba(0,15,25,0.46) 42%, rgba(0,15,25,0.72) 100%)",
          }}
        />
        <div className="orb animate-drift right-[8%] top-[16%] h-72 w-72 bg-sky/15" />
        <div
          className="orb animate-drift left-[10%] bottom-[12%] h-72 w-72 bg-brand/20"
          style={{ animationDelay: "-9s" }}
        />
      </div>

      <div className="relative mx-auto flex w-full max-w-3xl flex-col items-center text-center">
        {/* Badge */}
        <p
          className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur-md"
          style={copyStyle}
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky opacity-70" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-sky" />
          </span>
          Welcoming new patients in Pontotoc, MS
        </p>

        {/* Headline with the glasses that drop into focus over it */}
        <div className="relative mt-7 w-full">
          <h1
            className="font-display text-5xl font-bold leading-[1.02] tracking-tight text-white drop-shadow-[0_2px_20px_rgba(0,18,30,0.6)] sm:text-6xl lg:text-7xl"
            style={copyStyle}
          >
            Life is better
            <span className="block text-sky">in focus.</span>
          </h1>

          {/* Line-art glasses: sharp (outside the blurred copy), dropping in */}
          <span
            className="pointer-events-none absolute left-1/2 top-1/2 w-[118%] max-w-none -translate-x-1/2 -translate-y-1/2 sm:w-[104%]"
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 760 320"
              className="h-auto w-full"
              fill="none"
              stroke="#a5ddf6"
              strokeWidth="11"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                transform: revealed ? "translateY(0)" : "translateY(-175%)",
                opacity: revealed ? 1 : 0,
                filter: "drop-shadow(0 10px 24px rgba(0,20,34,0.45))",
                transition:
                  "transform 1150ms cubic-bezier(0.34,1.42,0.5,1), opacity 700ms ease-out",
              }}
            >
              <circle cx="250" cy="168" r="128" />
              <circle cx="510" cy="168" r="128" />
              {/* bridge */}
              <path d="M372 140 q18 -22 36 0" />
              {/* temple arms sweeping up and out */}
              <path d="M128 128 L26 46" />
              <path d="M632 128 L734 46" />
            </svg>
          </span>
        </div>

        <div style={copyStyle}>
          <p className="mx-auto mt-7 max-w-lg text-lg leading-relaxed text-white/85 drop-shadow-[0_1px_10px_rgba(0,18,30,0.5)]">
            A trusted family eye clinic caring for North Mississippi since 1981,
            with comprehensive exams, designer eyewear, and doctors who know you
            by name.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-white py-2.5 pl-2.5 pr-7 font-bold text-ink shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white transition-transform duration-300 group-hover:rotate-45">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
              Book Your Eye Exam
            </Link>
            <a
              href={clinic.phoneHref}
              className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20"
            >
              Call {clinic.phone}
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
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
      </div>
    </section>
  );
}
