"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { clinic } from "@/lib/site";

/*
 * Hero with the "putting on glasses" intro. The scene starts blurred, a
 * pair of round brand-blue glasses drops onto the headline, and the world
 * seen through each lens stays sharp (a live clone of the hero is clipped
 * inside each lens circle). When the glasses settle, the whole hero
 * transitions into focus and the frames fade away.
 */

function easeOutBack(t: number) {
  const c1 = 0.9;
  const c3 = c1 + 1;
  return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
}

function HeroContent({ hidden = false }: { hidden?: boolean }) {
  return (
    <div
      aria-hidden={hidden || undefined}
      inert={hidden || undefined}
      className="mx-auto flex w-full max-w-4xl flex-col items-center px-6 pb-24 pt-16 text-center sm:pt-24"
    >
      <p className="inline-flex items-center gap-2 rounded-full bg-sky/60 px-4 py-1.5 text-sm font-semibold text-brand-dark">
        <span className="h-2 w-2 rounded-full bg-brand" aria-hidden="true" />
        Welcoming new patients in Pontotoc, MS
      </p>
      <h1
        data-hero-headline
        className="mt-8 font-display text-5xl font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl"
      >
        Life is better
        <span className="block text-brand">in focus.</span>
      </h1>
      <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink/70 sm:text-xl">
        Since 1981, Wood Eye Clinic has helped generations of North
        Mississippi families protect one of their greatest gifts: their
        vision. Comprehensive eye care, designer eyewear, and a team that
        treats you like family.
      </p>
      <div className="mt-9 flex flex-col gap-4 sm:flex-row">
        <Link
          href="/contact"
          className="rounded-full bg-brand px-9 py-4 text-center font-bold text-white shadow-xl shadow-brand/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-dark"
        >
          Request an Appointment
        </Link>
        <a
          href={clinic.phoneHref}
          className="glass-surface rounded-full px-9 py-4 text-center font-bold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:text-brand"
        >
          Call {clinic.phone}
        </a>
      </div>
      <p className="mt-7 text-sm text-ink/60">
        {clinic.address.street}, {clinic.address.city}, {clinic.address.state}{" "}
        {clinic.address.zip}
      </p>
    </div>
  );
}

export default function HeroGlasses() {
  const sectionRef = useRef<HTMLElement>(null);
  const lensLRef = useRef<HTMLDivElement>(null);
  const lensRRef = useRef<HTMLDivElement>(null);
  const cloneLRef = useRef<HTMLDivElement>(null);
  const cloneRRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const ringLRef = useRef<SVGCircleElement>(null);
  const ringRRef = useRef<SVGCircleElement>(null);
  const bridgeRef = useRef<SVGPathElement>(null);
  const templeLRef = useRef<SVGPathElement>(null);
  const templeRRef = useRef<SVGPathElement>(null);

  // "clear" before hydration so crawlers and no-JS visitors get a sharp hero.
  const [phase, setPhase] = useState<"clear" | "intro" | "reveal">("clear");
  const [canAnimate, setCanAnimate] = useState(false);
  const [run, setRun] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    setCanAnimate(true);
    setPhase("intro");

    let raf = 0;
    let finished = false;
    const DURATION = 2000;
    const start = performance.now() + 450;
    const timers: number[] = [];

    const placeLens = (
      lens: HTMLDivElement | null,
      clone: HTMLDivElement | null,
      cx: number,
      cy: number,
      r: number,
      W: number,
      H: number
    ) => {
      if (!lens || !clone) return;
      lens.style.width = `${r * 2}px`;
      lens.style.height = `${r * 2}px`;
      lens.style.transform = `translate(${cx - r}px, ${cy - r}px)`;
      clone.style.width = `${W}px`;
      clone.style.height = `${H}px`;
      clone.style.transform = `translate(${-(cx - r)}px, ${-(cy - r)}px)`;
    };

    const tick = (now: number) => {
      const el = sectionRef.current;
      if (!el) return;
      const W = el.clientWidth;
      const H = el.clientHeight;
      const headline = el.querySelector<HTMLElement>("[data-hero-headline]");
      const sRect = el.getBoundingClientRect();
      const hRect = headline?.getBoundingClientRect();
      const targetY = hRect
        ? hRect.top - sRect.top + hRect.height / 2
        : H * 0.35;

      const r = Math.max(62, Math.min(118, W * 0.09));
      const bridge = r * 0.42;
      const dx = r + bridge / 2;
      const cx = W / 2;
      const startY = -r * 2.4;

      const p = Math.min(1, Math.max(0, (now - start) / DURATION));
      const cy = startY + (targetY - startY) * easeOutBack(p);

      placeLens(lensLRef.current, cloneLRef.current, cx - dx, cy, r, W, H);
      placeLens(lensRRef.current, cloneRRef.current, cx + dx, cy, r, W, H);

      const svg = svgRef.current;
      if (svg) {
        svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
        svg.setAttribute("width", String(W));
        svg.setAttribute("height", String(H));
        const stroke = Math.max(5, r * 0.09);
        for (const [ring, x] of [
          [ringLRef.current, cx - dx],
          [ringRRef.current, cx + dx],
        ] as const) {
          if (!ring) continue;
          ring.setAttribute("cx", String(x));
          ring.setAttribute("cy", String(cy));
          ring.setAttribute("r", String(r));
          ring.setAttribute("stroke-width", String(stroke));
        }
        bridgeRef.current?.setAttribute(
          "d",
          `M ${cx - dx + r * 0.92} ${cy - r * 0.28} Q ${cx} ${cy - r * 0.62} ${
            cx + dx - r * 0.92
          } ${cy - r * 0.28}`
        );
        bridgeRef.current?.setAttribute("stroke-width", String(stroke * 0.8));
        templeLRef.current?.setAttribute(
          "d",
          `M ${cx - dx - r * 0.96} ${cy - r * 0.18} L ${cx - dx - r * 1.75} ${
            cy - r * 1.05
          }`
        );
        templeRRef.current?.setAttribute(
          "d",
          `M ${cx + dx + r * 0.96} ${cy - r * 0.18} L ${cx + dx + r * 1.75} ${
            cy - r * 1.05
          }`
        );
        templeLRef.current?.setAttribute("stroke-width", String(stroke * 0.6));
        templeRRef.current?.setAttribute("stroke-width", String(stroke * 0.6));
      }

      if (p >= 1) {
        if (!finished) {
          finished = true;
          timers.push(window.setTimeout(() => setPhase("reveal"), 400));
          timers.push(window.setTimeout(() => setPhase("clear"), 400 + 950));
        }
        return;
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      timers.forEach(clearTimeout);
    };
  }, [run]);

  const overlayVisible = phase === "intro" || phase === "reveal";

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      aria-label="Welcome to Wood Eye Clinic"
    >
      {/* Real, interactive hero content */}
      <div
        className="transition-[filter,opacity] duration-[950ms] ease-out"
        style={
          phase === "intro"
            ? { filter: "blur(10px) saturate(0.85)", opacity: 0.8 }
            : { filter: "blur(0px) saturate(1)", opacity: 1 }
        }
      >
        <HeroContent />
      </div>

      {overlayVisible && (
        <div
          className={`pointer-events-none absolute inset-0 transition-opacity duration-700 ${
            phase === "reveal" ? "opacity-0" : "opacity-100"
          }`}
        >
          {/* Sharp view through each lens: a clipped live clone of the hero */}
          {[
            { lens: lensLRef, clone: cloneLRef },
            { lens: lensRRef, clone: cloneRRef },
          ].map((refs, i) => (
            <div
              key={i}
              ref={refs.lens}
              className="absolute left-0 top-0 w-0 overflow-hidden rounded-full will-change-transform"
            >
              <div ref={refs.clone} className="absolute left-0 top-0 will-change-transform">
                <HeroContent hidden />
              </div>
              {/* Glass sheen inside the lens */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  boxShadow:
                    "inset 0 0 24px rgba(188, 237, 255, 0.5), inset 2px 2px 2px rgba(255,255,255,0.6)",
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.16) 0%, rgba(188,237,255,0.06) 45%, rgba(255,255,255,0) 70%)",
                }}
              />
            </div>
          ))}

          {/* The frames, drawn to match the lens positions */}
          <svg ref={svgRef} className="absolute left-0 top-0" aria-hidden="true">
            <path ref={templeLRef} stroke="#0075a1" strokeLinecap="round" fill="none" />
            <path ref={templeRRef} stroke="#0075a1" strokeLinecap="round" fill="none" />
            <path ref={bridgeRef} stroke="#0075a1" strokeLinecap="round" fill="none" />
            <circle ref={ringLRef} stroke="#0075a1" fill="none" />
            <circle ref={ringRRef} stroke="#0075a1" fill="none" />
          </svg>
        </div>
      )}

      {canAnimate && phase === "clear" && (
        <button
          type="button"
          onClick={() => setRun((r) => r + 1)}
          className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full px-4 py-2 text-xs font-semibold text-ink/45 transition-colors hover:bg-sky/40 hover:text-brand-dark"
        >
          &#8635; Put the glasses on again
        </button>
      )}
    </section>
  );
}
