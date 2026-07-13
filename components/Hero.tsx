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
  // On load, a pair of glasses lowers over the photo like putting them on. The
  // photo is blurred except inside the lenses, which act as clear windows. Once
  // the glasses settle, the whole photo comes into focus and they fade away.
  const [dropped, setDropped] = useState(false); // glasses have lowered into place
  const [revealed, setRevealed] = useState(false); // the whole photo is sharp
  const [glassesGone, setGlassesGone] = useState(false); // glasses faded away

  useEffect(() => {
    const raf = requestAnimationFrame(() => setDropped(true));
    const t1 = setTimeout(() => setRevealed(true), 1950);
    const t2 = setTimeout(() => setGlassesGone(true), 2800);
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

        {/* Clinic photo on a soft dark-glass pane. On load, glasses lower over
            the blurred photo and you see clearly only through the lenses; then
            the whole photo comes into focus and the glasses fade. */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="glass-dark relative w-full max-w-[36rem] rounded-[1.75rem] p-2.5 shadow-xl sm:p-3">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.35rem]">
              {/* Pre-blurred base */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/hero-blur.webp"
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full scale-105 object-cover"
              />
              {/* Full sharp photo — fades in once the glasses have settled */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/hero.webp"
                alt="The Wood Eye Clinic team at their optical boutique in Pontotoc"
                className="absolute inset-0 h-full w-full object-cover"
                style={{
                  opacity: revealed ? 1 : 0,
                  transition: "opacity 850ms cubic-bezier(0.22,1,0.36,1)",
                }}
              />

              {/* Glasses lowering in: the lenses clip the sharp photo so you see
                  clearly through them over the blurred rest, and the frame is
                  drawn on top. The whole SVG lowers as one. */}
              <svg
                viewBox="0 0 400 300"
                preserveAspectRatio="xMidYMid slice"
                className="absolute inset-0 h-full w-full"
                aria-hidden="true"
                style={{
                  transform: dropped ? "translateY(0)" : "translateY(-86%)",
                  opacity: glassesGone ? 0 : 1,
                  transition:
                    "transform 1200ms cubic-bezier(0.33,1,0.35,1), opacity 700ms ease-out",
                }}
              >
                <defs>
                  <clipPath id="hero-lens-clip">
                    <circle cx="125" cy="150" r="70" />
                    <circle cx="275" cy="150" r="70" />
                  </clipPath>
                </defs>
                {/* sharp photo revealed only inside the lenses */}
                <image
                  href="/img/hero.webp"
                  x="0"
                  y="0"
                  width="400"
                  height="300"
                  preserveAspectRatio="xMidYMid slice"
                  clipPath="url(#hero-lens-clip)"
                />
                {/* frame, layered dark halo + white + blue rim for legibility */}
                <g fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <g stroke="rgba(0,18,30,0.5)" strokeWidth="15">
                    <circle cx="125" cy="150" r="70" />
                    <circle cx="275" cy="150" r="70" />
                    <path d="M195 143 q5 -12 10 0" />
                    <path d="M57 130 L12 86" />
                    <path d="M343 130 L388 86" />
                  </g>
                  <g stroke="#ffffff" strokeWidth="8">
                    <circle cx="125" cy="150" r="70" />
                    <circle cx="275" cy="150" r="70" />
                    <path d="M195 143 q5 -12 10 0" />
                    <path d="M57 130 L12 86" />
                    <path d="M343 130 L388 86" />
                  </g>
                  <g stroke="#7fd3f2" strokeWidth="2.5">
                    <circle cx="125" cy="150" r="70" />
                    <circle cx="275" cy="150" r="70" />
                  </g>
                </g>
              </svg>

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
          </div>
        </div>
      </div>
    </section>
  );
}
